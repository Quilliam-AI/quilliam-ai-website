"use client";

import { useCallback, useEffect, useState } from "react";
import {
  disablePostHog,
  initializePostHog,
} from "@/lib/posthog-client";
import {
  readStoredPostHogConsent,
  type PostHogConsent,
  writeStoredPostHogConsent,
} from "@/lib/posthog-config";
import { Button } from "@/components/ui/button";

type ConsentState = PostHogConsent | "loading";

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>("loading");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setConsent(readStoredPostHogConsent());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleAccept = useCallback(() => {
    setConsent("accepted");
    writeStoredPostHogConsent("accepted");
    void initializePostHog({ immediate: true });
  }, []);

  const handleReject = useCallback(() => {
    setConsent("rejected");
    writeStoredPostHogConsent("rejected");
    void disablePostHog();
  }, []);

  if (consent === "loading" || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 z-[60] sm:left-auto sm:max-w-sm"
    >
      <div className="rounded-card-lg border border-paper/10 bg-panel/95 p-4 shadow-[0_18px_70px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <p className="text-xs leading-relaxed text-paper/70">
          Optional analytics help improve the site. Rejecting keeps tracking
          off.{" "}
          <a
            href="/privacy#cookies"
            className="text-signal underline underline-offset-4 transition-colors hover:text-paper"
          >
            Privacy policy
          </a>
        </p>
        <div className="mt-3 flex gap-2">
          <Button
            type="button"
            size="sm"
            onClick={handleAccept}
            className="h-9 px-4 text-xs hover:translate-y-0"
          >
            Accept
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="h-9 border-paper/15 bg-ink px-4 text-xs text-paper/70 hover:bg-paper/10 hover:text-paper"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
