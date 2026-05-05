"use client";

import { useEffect, useCallback, useSyncExternalStore } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "cookie_consent";

type Consent = "accepted" | "rejected" | null;

const CONSENT_EVENT = "quilliam_cookie_consent_change";

function readStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  let value: string | null = null;
  try {
    value = localStorage.getItem(CONSENT_KEY);
  } catch {
    // localStorage may be blocked (private mode, strict cookie policies)
  }
  return value === "accepted" || value === "rejected" ? value : null;
}

function subscribeConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function subscribeHydration(callback: () => void) {
  void callback;
  return () => {};
}

function emitConsentChange() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const consent = useSyncExternalStore(subscribeConsent, readStoredConsent, () => null);

  useEffect(() => {
    const stored = readStoredConsent();

    // Init PostHog once, with persistence shaped by stored consent.
    // Note: skipped on localhost so dev sessions don't pollute analytics.
    if (
      !posthog.__loaded &&
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      !window.location.hostname.includes("localhost")
    ) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ph",
        ui_host: "https://eu.posthog.com",
        defaults: "2026-01-30",
        person_profiles: "identified_only",
        capture_pageleave: true,
        persistence: stored === "accepted" ? "localStorage+cookie" : "memory",
        disable_session_recording: stored !== "accepted",
        session_recording: {
          maskAllInputs: false,
          maskInputOptions: { password: true },
        },
      });
    }
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {
      /* swallow */
    }
    emitConsentChange();
    if (posthog.__loaded) {
      try {
        posthog.set_config({ persistence: "localStorage+cookie" });
        posthog.startSessionRecording();
      } catch {
        /* swallow */
      }
    }
  }, []);

  const handleReject = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, "rejected");
    } catch {
      /* swallow */
    }
    emitConsentChange();
  }, []);

  // Only render the banner after mount AND when consent is unset.
  const showBanner = mounted && consent === null;

  return (
    <PHProvider client={posthog}>
      {children}
      {showBanner && (
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
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
    >
      <div className="max-w-2xl mx-auto rounded-2xl bg-stone-900 border border-stone-800/60 shadow-[0_-4px_32px_-8px_rgba(0,0,0,0.5)] p-5 md:p-6 pointer-events-auto">
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
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onAccept();
            }}
          >
            Accept
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              onReject();
            }}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
