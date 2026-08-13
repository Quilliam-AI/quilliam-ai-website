import { sendGAEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/content";
import { hasAcceptedAnalyticsCookies } from "@/lib/posthog-config";

const productionHostname = new URL(siteConfig.url).hostname;
const pendingEvents: Array<{
  event: string;
  properties?: Record<string, unknown>;
}> = [];
const MAX_PENDING_EVENTS = 50;

export function isProductionAnalyticsHost(hostname: string) {
  return (
    hostname === productionHostname ||
    hostname === `www.${productionHostname}`
  );
}

export function captureGoogleAnalyticsEvent(
  event: string,
  properties?: Record<string, unknown>,
) {
  if (
    typeof window === "undefined" ||
    !hasAcceptedAnalyticsCookies() ||
    !isProductionAnalyticsHost(window.location.hostname)
  ) {
    return;
  }

  if (!window.dataLayer) {
    if (pendingEvents.length < MAX_PENDING_EVENTS) {
      pendingEvents.push({ event, properties });
    }
    return;
  }

  sendGAEvent("event", event, properties ?? {});
}

export function flushPendingGoogleAnalyticsEvents() {
  if (
    typeof window === "undefined" ||
    !window.dataLayer ||
    !hasAcceptedAnalyticsCookies() ||
    !isProductionAnalyticsHost(window.location.hostname)
  ) {
    return;
  }

  const events = pendingEvents.splice(0);
  for (const { event, properties } of events) {
    sendGAEvent("event", event, properties ?? {});
  }
}
