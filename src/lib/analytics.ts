import { captureGoogleAnalyticsEvent } from "@/lib/google-analytics-client";
import { capturePostHogEvent } from "@/lib/posthog-client";

/**
 * Typed analytics event tracking for Quilliam AI.
 *
 * Every conversion-relevant user action has a dedicated function so
 * event names stay consistent across PostHog and Google Analytics.
 */

export function captureAnalyticsEvent(
  event: string,
  properties?: Record<string, unknown>,
) {
  void capturePostHogEvent(event, properties);
  captureGoogleAnalyticsEvent(event, properties);
}

// ── CTA clicks ──────────────────────────────────────────────────────

type CtaLocation =
  | "hero"
  | "nav"
  | "sticky_cta"
  | "footer"
  | "cta_section"
  | "about_hero"
  | "about_cta"
  | "contact"
  | "service_page";

export function trackBookTrainingClicked(location: CtaLocation) {
  captureAnalyticsEvent("cta_clicked", {
    cta_type: "book_training",
    location,
  });
}

export function trackBookOpportunityClicked(location: CtaLocation) {
  captureAnalyticsEvent("cta_clicked", {
    cta_type: "book_opportunity",
    location,
  });
}

export function trackBookSessionClicked(location: CtaLocation) {
  captureAnalyticsEvent("cta_clicked", {
    cta_type: "book_session",
    location,
  });
}

// ── WhatsApp / phone / email ────────────────────────────────────────

export function trackWhatsAppClicked(location: CtaLocation) {
  captureAnalyticsEvent("contact_clicked", {
    method: "whatsapp",
    location,
  });
}

export function trackPhoneClicked(location: CtaLocation) {
  captureAnalyticsEvent("contact_clicked", {
    method: "phone",
    location,
  });
}

export function trackEmailClicked(location: CtaLocation) {
  captureAnalyticsEvent("contact_clicked", {
    method: "email",
    location,
  });
}

// ── Service discovery ───────────────────────────────────────────────

export function trackServiceCardClicked(
  service: "opportunity" | "agents" | "adoption",
) {
  captureAnalyticsEvent("service_card_clicked", { service });
}

// ── Booking form funnel ─────────────────────────────────────────────

export function trackBookingFormViewed(
  intent: "training" | "opportunity" | "either",
) {
  captureAnalyticsEvent("booking_form_viewed", { intent });
}

export function trackBookingFormStarted(
  intent: "training" | "opportunity" | "either",
) {
  captureAnalyticsEvent("booking_form_started", { intent });
}

export function trackBookingFormSubmitted(props: {
  intent: "training" | "opportunity" | "either";
  interest: string;
  business_type: string;
}) {
  captureAnalyticsEvent("booking_form_submitted", props);
}

export function trackBookingFormError(props: {
  intent: "training" | "opportunity" | "either";
  error: string;
}) {
  captureAnalyticsEvent("booking_form_error", props);
}
