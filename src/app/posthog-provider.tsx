"use client";

import { useEffect, useState, useCallback } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

const CONSENT_KEY = "cookie_consent";

type Consent = "accepted" | "rejected" | null;

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

function initPostHog(consent: Consent) {
  if (
    typeof window === "undefined" ||
    posthog.__loaded ||
    !process.env.NEXT_PUBLIC_POSTHOG_KEY ||
    window.location.hostname.includes("localhost")
  ) {
    return;
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ph",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-01-30",
    person_profiles: "identified_only",
    capture_pageleave: true,
    // Start in memory-only mode unless the user has already accepted
    persistence: consent === "accepted" ? "localStorage+cookie" : "memory",
    // Only enable session recording if consent was given
    disable_session_recording: consent !== "accepted",
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: { password: true },
    },
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    initPostHog(stored);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    if (posthog.__loaded) {
      posthog.set_config({ persistence: "localStorage+cookie" });
      posthog.startSessionRecording();
    }
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    // persistence stays as 'memory', recording stays off
  }, []);

  return (
    <PHProvider client={posthog}>
      {children}
      {consent === null && (
        <CookieConsent onAccept={handleAccept} onReject={handleReject} />
      )}
    </PHProvider>
  );
}

function CookieConsent({
  onAccept,
  onReject,
}: {
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
    >
      <div className="max-w-2xl mx-auto rounded-2xl bg-stone-900 border border-stone-800/60 shadow-[0_-4px_32px_-8px_rgba(0,0,0,0.5)] p-5 md:p-6">
        <p className="text-sm text-stone-300 leading-relaxed">
          We use cookies and session recordings to understand how people use
          this site and improve it. You can accept or reject non-essential
          cookies.{" "}
          <a
            href="/privacy#cookies"
            className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
          >
            Privacy policy
          </a>
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={onAccept}
            className="rounded-full px-6 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.98] transition-all"
          >
            Accept
          </button>
          <button
            onClick={onReject}
            className="rounded-full px-6 py-2 text-sm font-medium bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700 hover:text-white active:scale-[0.98] transition-all"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
