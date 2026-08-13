"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  trackBookingFormError,
  trackBookingFormStarted,
  trackBookingFormSubmitted,
  trackBookingFormViewed,
} from "@/lib/analytics";
import { identifyPostHogUser } from "@/lib/posthog-client";
import { hasAcceptedAnalyticsCookies } from "@/lib/posthog-config";
import { submitBooking } from "./booking-action";

const BUSINESS_TYPES = [
  { value: "Small business (1-10)", label: "Small business (1 to 10 staff)" },
  { value: "Growing business (10-50)", label: "Growing business (10 to 50 staff)" },
  { value: "Agency / consultancy", label: "Agency or consultancy" },
  { value: "Startup / scale-up", label: "Start-up or scale-up" },
  { value: "University spin-out", label: "University spin-out" },
  {
    value: "Team inside a larger organisation",
    label: "Team within a larger organisation",
  },
  { value: "Other", label: "Other" },
] as const;

const INTERESTS = {
  training: {
    value: "AI Training / Team Adoption",
    label: "AI training",
  },
  opportunity: {
    value: "AI Opportunity / Implementation",
    label: "AI opportunity",
  },
  either: {
    value: "Not sure yet / both",
    label: "Initial advice",
  },
} as const;

type InterestKey = keyof typeof INTERESTS;

interface BookingFormProps {
  defaultInterest?: InterestKey;
}

export function BookingForm({ defaultInterest = "either" }: BookingFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [interest, setInterest] = useState<InterestKey>(defaultInterest);
  const hasStarted = useRef(false);

  useEffect(() => {
    trackBookingFormViewed(defaultInterest);
  }, [defaultInterest]);

  const submitLabel =
    interest === "training"
      ? "Book Free AI Training"
      : interest === "opportunity"
        ? "Book Free AI Opportunity"
        : "Arrange an Initial Consultation";

  const successLabel =
    interest === "training"
      ? "introductory AI training session"
      : interest === "opportunity"
        ? "AI Opportunity session"
        : "AI session";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const analyticsConsent = hasAcceptedAnalyticsCookies();
    formData.set("analyticsConsent", analyticsConsent ? "accepted" : "rejected");
    formData.set("pageUrl", window.location.href);

    const businessType = formData.get("businessType") as string;

    try {
      const result = await submitBooking(formData);

      if (result.success) {
        setStatus("success");
        trackBookingFormSubmitted({
          intent: interest,
          interest: INTERESTS[interest].value,
          business_type: businessType,
        });

        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const business = formData.get("business") as string;

        if (analyticsConsent) {
          void identifyPostHogUser(email, {
            email,
            name,
            business,
            business_type: businessType,
          });
        }
      } else {
        setErrorMessage(result.error || "We could not submit your request. Please try again.");
        setStatus("error");
        trackBookingFormError({ intent: interest, error: result.error || "unknown" });
      }
    } catch {
      setErrorMessage("We could not submit your request. Please try again or contact us by WhatsApp.");
      setStatus("error");
      trackBookingFormError({ intent: interest, error: "network_error" });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card-xl flex min-h-[520px] flex-col items-center justify-center border border-signal/30 bg-signal/10 p-6 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-signal/40 bg-signal/15 text-signal">
          <CheckCircle2 size={34} />
        </div>
        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-paper">
          Your request has been received
        </h2>
        <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-paper/65">
          I will contact you within 24 hours to arrange your {successLabel}. A
          confirmation email has been sent to the address provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={() => {
        if (!hasStarted.current) {
          hasStarted.current = true;
          trackBookingFormStarted(interest);
        }
      }}
      className="rounded-card-xl border border-paper/10 bg-panel/80 p-6 shadow-[0_30px_100px_-80px_rgba(18,16,12,0.65)]"
    >
      <div className="flex items-start justify-between gap-4 border-b border-paper/10 pb-5">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-signal">
            Enquiry details
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-paper">
            Tell us about your requirements
          </h2>
        </div>
        <div className="hidden border border-paper/10 bg-ink/70 px-3 py-2 text-xs font-semibold text-paper/45 sm:block">
          Response within 24 hours
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <fieldset>
          <legend className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-paper/50">
            Service required
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {(Object.keys(INTERESTS) as InterestKey[]).map((key) => (
              <label
                key={key}
                  className={`flex cursor-pointer items-center justify-center rounded-full border px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                  interest === key
                    ? "border-signal/50 bg-signal/10 text-signal"
                    : "border-paper/10 bg-ink/70 text-paper/55 hover:border-paper/25 hover:text-paper"
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={INTERESTS[key].value}
                  checked={interest === key}
                  onChange={() => setInterest(key)}
                  className="sr-only"
                />
                {INTERESTS[key].label}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Your name" id="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClassName}
          />
        </Field>

        <Field label="Email" id="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@business.co.uk"
            className={inputClassName}
          />
        </Field>

        <Field label="Phone" id="phone" optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="07593 121 621"
            className={inputClassName}
          />
        </Field>

        <Field label="Business name" id="business" required>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="Your business"
            className={inputClassName}
          />
        </Field>

        <Field label="Business type" id="businessType" required>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="" disabled>
              Select the closest match
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type.value} value={type.value} className="bg-ink">
                {type.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="What would you like to improve?" id="message" optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="For example: delayed lead follow-up, a support backlog, manual reporting or inconsistent use of AI across the team."
            className={`${inputClassName} min-h-28 resize-y`}
          />
        </Field>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status === "error" ? (
          <p role="alert" className="mt-4 text-sm text-danger-wire">
            {errorMessage}
          </p>
        ) : null}
      </div>

      <div className="rounded-card mt-6 flex items-start gap-3 border border-paper/10 bg-ink/60 p-4">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-signal"
        />
        <label htmlFor="privacy" className="text-xs leading-relaxed text-paper/55">
          I have read Quilliam AI&apos;s{" "}
          <a href="/privacy" className="text-paper underline underline-offset-4 hover:text-signal">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="mt-6 w-full whitespace-normal text-center leading-tight tracking-normal normal-case"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight size={18} />
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs leading-relaxed text-paper/40">
        Levi will respond directly. We use your details in accordance with the
        Privacy Policy.
      </p>
    </form>
  );
}

const inputClassName =
  "w-full rounded-[1rem] border border-paper/10 bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/30 transition-all focus:border-signal/40 focus:ring-2 focus:ring-signal/20";

function Field({
  label,
  id,
  children,
  required,
  optional,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-paper/50"
      >
        {label}
        {required ? <span className="text-signal"> *</span> : null}
        {optional ? (
          <span className="font-medium normal-case tracking-normal text-paper/35">
            {" "}
            (optional)
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
