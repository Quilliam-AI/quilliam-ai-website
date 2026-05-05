"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import posthog from "posthog-js";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitBooking } from "./booking-action";
import {
  trackBookingFormViewed,
  trackBookingFormStarted,
  trackBookingFormSubmitted,
  trackBookingFormSuccess,
  trackBookingFormError,
} from "@/lib/analytics";

const BUSINESS_TYPES = [
  "Professional services",
  "Healthcare / clinic",
  "Hospitality / venue",
  "Real estate / property",
  "Education / training",
  "Local service business",
  "B2B / SaaS",
  "Other owner-led business",
] as const;

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hasStarted = useRef(false);

  useEffect(() => {
    trackBookingFormViewed();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const businessType = formData.get("businessType") as string;

    trackBookingFormSubmitted({
      business_type: businessType,
    });

    try {
      const result = await submitBooking(formData);
      if (result.success) {
        setStatus("success");

        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const business = formData.get("business") as string;
        posthog.identify(email, {
          email,
          name,
          business,
          business_type: businessType,
        });

        trackBookingFormSuccess({
          business_type: businessType,
        });
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        trackBookingFormError({ error: result.error || "unknown" });
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again or message us on WhatsApp.");
      setStatus("error");
      trackBookingFormError({ error: "network_error" });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[2rem] bg-white border border-stone-200 p-8 md:p-10 flex flex-col items-center justify-center min-h-[500px] text-center shadow-[0_24px_80px_-65px_rgba(68,64,60,0.55)]"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
          Mapping request sent
        </h2>
        <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-[40ch]">
          Thanks — I&apos;ll read your notes and reply with the most likely
          first AI system to map properly. If there&apos;s a fit, we&apos;ll use
          the call to agree the outcome and baseline.
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
          trackBookingFormStarted();
        }
      }}
      className="rounded-[2rem] bg-white border border-stone-200 p-8 md:p-10 shadow-[0_24px_80px_-65px_rgba(68,64,60,0.55)]"
    >
      <h2 className="text-xl font-semibold tracking-tight text-stone-950 mb-2">
        Map your first AI opportunity
      </h2>
      <p className="text-xs text-stone-500 mb-8">
        Takes 2 minutes. Useful notes beat generic discovery calls.
      </p>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Jane Smith"
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@yourbusiness.co.uk"
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
          />
        </div>

        {/* Business name */}
        <div>
          <label
            htmlFor="business"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="Your business"
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
          />
        </div>

        {/* Website URL */}
        <div>
          <label
            htmlFor="website"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Website URL{" "}
            <span className="text-stone-600 normal-case tracking-normal">
              (optional)
            </span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourbusiness.co.uk"
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
          />
        </div>

        {/* Business type */}
        <div>
          <label
            htmlFor="businessType"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Business type
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-stone-600">
              Select the closest match
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type} className="bg-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Phone (optional) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            Phone{" "}
            <span className="text-stone-600 normal-case tracking-normal">
              (optional)
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="07xxx xxxxxx"
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            What work eats your week?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            placeholder="e.g. enquiry follow-up is slow, reporting takes half a day, onboarding is manual, or admin keeps piling up..."
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all resize-none"
          />
        </div>

        {/* Desired outcome */}
        <div>
          <label
            htmlFor="outcome"
            className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2"
          >
            What outcome would make this worth doing?{" "}
            <span className="text-stone-600 normal-case tracking-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="outcome"
            name="outcome"
            rows={3}
            placeholder="e.g. every lead gets a useful reply within 5 minutes, or monthly reporting drops from 6 hours to 30 minutes..."
            className="w-full rounded-xl bg-[#fbfaf7] border border-stone-200 px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all resize-none"
          />
        </div>
      </div>

      {/* Error message */}
      <div aria-live="polite" aria-atomic="true">
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-400">
            {errorMessage}
          </p>
        )}
      </div>

      {/* Privacy consent */}
      <div className="mt-6 flex items-start gap-2.5">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 bg-white text-emerald-600 focus:ring-emerald-500/40 accent-emerald-600"
        />
        <label htmlFor="privacy" className="text-xs text-stone-500 leading-relaxed">
          I agree to Quilliam AI&apos;s{" "}
          <a
            href="/privacy"
            className="text-stone-700 underline underline-offset-2 hover:text-stone-950 transition-colors"
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <Button type="submit" disabled={status === "submitting"} size="fullLg">
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Map my AI opportunity
              <ArrowRight size={18} />
            </>
          )}
        </Button>
      </div>

      <p className="mt-4 text-xs text-stone-600 text-center">
        No spam. No generic pitch. We reply with a practical first-system view.
      </p>
    </form>
  );
}
