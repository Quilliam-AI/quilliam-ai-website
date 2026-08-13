"use client";

import { useCallback, useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  disablePostHog,
  initializePostHog,
} from "@/lib/posthog-client";
import {
  flushPendingGoogleAnalyticsEvents,
  isProductionAnalyticsHost,
} from "@/lib/google-analytics-client";
import {
  clearStoredAnalyticsData,
  readStoredAnalyticsConsent,
  type AnalyticsConsent,
  writeStoredAnalyticsConsent,
} from "@/lib/posthog-config";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

type ConsentState = AnalyticsConsent | "loading";

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>("loading");
  const [canLoadGoogleAnalytics, setCanLoadGoogleAnalytics] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const storedConsent = readStoredAnalyticsConsent();

      setConsent(storedConsent);
      setCanLoadGoogleAnalytics(
        isProductionAnalyticsHost(window.location.hostname),
      );

      if (storedConsent === "accepted") {
        void initializePostHog();
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || !canLoadGoogleAnalytics) return;

    const frame = window.requestAnimationFrame(
      flushPendingGoogleAnalyticsEvents,
    );
    const timeout = window.setTimeout(flushPendingGoogleAnalyticsEvents, 1000);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [consent, canLoadGoogleAnalytics]);

  const handleAccept = useCallback(() => {
    setConsent("accepted");
    writeStoredAnalyticsConsent("accepted");
    void initializePostHog({ immediate: true });
  }, []);

  const handleReject = useCallback(() => {
    setConsent("rejected");
    writeStoredAnalyticsConsent("rejected");
    clearStoredAnalyticsData();
    void disablePostHog();
  }, []);

  return (
    <>
      {consent === "accepted" && canLoadGoogleAnalytics && (
        <GoogleAnalytics
          gaId={siteConfig.analytics.googleAnalyticsMeasurementId}
        />
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-3 left-3 right-3 z-[60] sm:left-auto sm:max-w-sm"
        >
          <div className="rounded-card-lg border border-paper/10 bg-panel/95 p-4 shadow-[0_18px_70px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <p className="text-xs leading-relaxed text-paper/70">
              With your consent, we use Google Analytics and PostHog to measure
              use of this website. If you reject optional cookies, these
              services will remain disabled.{" "}
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
      )}
    </>
  );
}
