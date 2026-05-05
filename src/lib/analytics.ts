import posthog from "posthog-js";

/**
 * Typed PostHog event tracking for Quilliam AI.
 *
 * Every conversion-relevant user action has a dedicated function so
 * event names stay consistent and properties are never misspelled.
 */

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

export function trackOpportunityMappingClicked(location: CtaLocation) {
  posthog.capture("cta_clicked", {
    cta_type: "opportunity_mapping",
    location,
  });
}

// ── WhatsApp / phone / email ────────────────────────────────────────

export function trackWhatsAppClicked(location: CtaLocation) {
  posthog.capture("contact_clicked", {
    method: "whatsapp",
    location,
  });
}

export function trackPhoneClicked(location: CtaLocation) {
  posthog.capture("contact_clicked", {
    method: "phone",
    location,
  });
}

export function trackEmailClicked(location: CtaLocation) {
  posthog.capture("contact_clicked", {
    method: "email",
    location,
  });
}

// ── Offer discovery ─────────────────────────────────────────────────

export type OfferSlug =
  | "ai-opportunity-mapping"
  | "outcome-sprint"
  | "fixed-ai-system-build"
  | "monthly-optimisation";

export function trackServiceCardClicked(service: OfferSlug) {
  posthog.capture("service_card_clicked", { service });
}

// ── Booking form funnel ─────────────────────────────────────────────
// The form now serves a single flow: AI Opportunity Mapping.

export function trackBookingFormViewed() {
  posthog.capture("booking_form_viewed");
}

export function trackBookingFormStarted() {
  posthog.capture("booking_form_started");
}

export function trackBookingFormSubmitted(props: {
  business_type: string;
}) {
  posthog.capture("booking_form_submitted", props);
}

export function trackBookingFormError(props: {
  error: string;
}) {
  posthog.capture("booking_form_error", props);
}

export function trackBookingFormSuccess(props: {
  business_type: string;
}) {
  posthog.capture("booking_form_success", props);
}
