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

export function trackBookTrainingClicked(location: CtaLocation) {
  posthog.capture("cta_clicked", {
    cta_type: "book_training",
    location,
  });
}

export function trackBookAuditClicked(location: CtaLocation) {
  posthog.capture("cta_clicked", {
    cta_type: "book_audit",
    location,
  });
}

export function trackBookSessionClicked(location: CtaLocation) {
  posthog.capture("cta_clicked", {
    cta_type: "book_session",
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

// ── Service discovery ───────────────────────────────────────────────

export function trackServiceCardClicked(
  service: "ai-training" | "ai-automation" | "digital-services",
) {
  posthog.capture("service_card_clicked", { service });
}

// ── Booking form funnel ─────────────────────────────────────────────

export function trackBookingFormViewed(
  intent: "training" | "audit" | "either",
) {
  posthog.capture("booking_form_viewed", { intent });
}

export function trackBookingFormStarted(
  intent: "training" | "audit" | "either",
) {
  posthog.capture("booking_form_started", { intent });
}

export function trackBookingFormSubmitted(props: {
  intent: "training" | "audit" | "either";
  interest: string;
  business_type: string;
}) {
  posthog.capture("booking_form_submitted", props);
}

export function trackBookingFormError(props: {
  intent: "training" | "audit" | "either";
  error: string;
}) {
  posthog.capture("booking_form_error", props);
}

export function trackBookingFormSuccess(props: {
  intent: "training" | "audit" | "either";
  interest: string;
  business_type: string;
}) {
  posthog.capture("booking_form_success", props);
}
