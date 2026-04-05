"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitBooking } from "./booking-action";

const BUSINESS_TYPES = [
  "Gym / Fitness",
  "Trades / Construction",
  "Hospitality / Food",
  "Retail / E-commerce",
  "Professional Services",
  "Health & Wellbeing",
  "Other",
] as const;

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitBooking(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again or message us on WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-stone-900 border border-stone-800/60 p-8 md:p-10 flex flex-col items-center justify-center min-h-[500px] text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          You&apos;re booked in
        </h2>
        <p className="mt-3 text-sm text-stone-400 leading-relaxed max-w-[36ch]">
          We will get back to you within 24 hours to arrange your free AI
          Audit. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-stone-900 border border-stone-800/60 p-8 md:p-10"
    >
      <h2 className="text-xl font-semibold tracking-tight text-white mb-8">
        Tell us about your business
      </h2>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Dirk Parker"
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="dirk@k2gym.co.uk"
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all"
          />
        </div>

        {/* Phone (optional) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
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
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all"
          />
        </div>

        {/* Business name */}
        <div>
          <label
            htmlFor="business"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
          >
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="K2 Gym"
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all"
          />
        </div>

        {/* Business type */}
        <div>
          <label
            htmlFor="businessType"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
          >
            Business type
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-stone-600">
              Select your industry
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type} className="bg-stone-950">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-2"
          >
            What&apos;s your biggest time-waster?{" "}
            <span className="text-stone-600 normal-case tracking-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="e.g. I spend 2 hours a day answering the same questions on Instagram..."
            className="w-full rounded-xl bg-stone-950 border border-stone-800/60 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-700 transition-all resize-none"
          />
        </div>
      </div>

      {/* Error message */}
      <div aria-live="polite" aria-atomic="true">
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-400">{errorMessage}</p>
        )}
      </div>

      {/* Privacy consent */}
      <div className="mt-6 flex items-start gap-2.5">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-700 bg-stone-950 text-emerald-600 focus:ring-emerald-500/40 accent-emerald-600"
        />
        <label htmlFor="privacy" className="text-xs text-stone-500 leading-relaxed">
          I agree to Quilliam Digital&apos;s{" "}
          <a href="/privacy" className="text-stone-400 underline underline-offset-2 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="w-full mt-8 rounded-full h-12 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Book Your Free AI Audit
            <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </Button>

      <p className="mt-4 text-xs text-stone-600 text-center">
        We will reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
