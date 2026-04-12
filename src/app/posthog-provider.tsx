"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

/**
 * Initialise PostHog once on mount.
 *
 * - Reverse-proxied through /ph (see next.config.ts rewrites) so
 *   tracking is not blocked by ad-blockers.
 * - `defaults: '2026-01-30'` opts into latest SDK behaviour including
 *   history_change pageviews and head-injection for recordings.
 * - `person_profiles: 'identified_only'` — anonymous events are captured
 *   but person profiles are only created when you call identify().
 * - Session recording is on with password masking; toggle in PostHog
 *   project settings to actually enable/disable ingestion.
 * - Cookieless fallback: if a user rejects cookies, call
 *   `posthog.set_config({ persistence: 'memory' })` from your consent
 *   banner to downgrade to memory-only (no cookies, no localStorage).
 */
function initPostHog() {
  if (
    typeof window !== "undefined" &&
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
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: { password: true },
      },
    });
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
