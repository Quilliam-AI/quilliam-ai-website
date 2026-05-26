import "server-only";

import { randomUUID } from "node:crypto";
import { PostHog } from "posthog-node";
import { extractUtmParamsFromUrl } from "@/lib/campaign-params";

type AnalyticsConsent = "accepted" | "rejected" | "unknown";

interface ServerBookingSuccessProps {
  analyticsConsent: AnalyticsConsent;
  business: string;
  businessType: string;
  email: string;
  interest: string;
  message?: string;
  name: string;
  pageUrl?: string;
  phone?: string;
}

const POSTHOG_SERVER_HOST =
  process.env.POSTHOG_HOST ??
  process.env.NEXT_PUBLIC_POSTHOG_HOST ??
  "https://eu.i.posthog.com";

function getPostHogToken() {
  return (
    process.env.POSTHOG_KEY ??
    process.env.NEXT_PUBLIC_POSTHOG_KEY ??
    process.env.NEXT_PUBLIC_POSTHOG_TOKEN
  );
}

function getPostHogServerClient() {
  const token = getPostHogToken();
  if (!token) return null;

  return new PostHog(token, {
    flushAt: 1,
    flushInterval: 0,
    host: POSTHOG_SERVER_HOST,
    requestTimeout: 3000,
  });
}

export async function captureServerBookingSuccess({
  analyticsConsent,
  business,
  businessType,
  email,
  interest,
  message,
  name,
  pageUrl,
  phone,
}: ServerBookingSuccessProps) {
  let posthog: PostHog | null = null;

  try {
    posthog = getPostHogServerClient();
  } catch (error) {
    console.error("PostHog server client failed:", error);
  }

  if (!posthog) return;

  const consentAccepted = analyticsConsent === "accepted";
  const distinctId = consentAccepted
    ? email.trim().toLowerCase()
    : `booking:${randomUUID()}`;
  const utmParams = extractUtmParamsFromUrl(pageUrl);

  try {
    posthog.capture({
      distinctId,
      event: "booking_form_success",
      properties: {
        $current_url: pageUrl,
        $process_person_profile: consentAccepted,
        ...utmParams,
        ...(consentAccepted && {
          $set: {
            business,
            business_type: businessType,
            email,
            name,
            phone,
          },
        }),
        analytics_consent: analyticsConsent,
        business_type: businessType,
        capture_source: "server",
        has_message: Boolean(message),
        interest,
      },
    });
  } catch (error) {
    console.error("PostHog server capture failed:", error);
  }

  try {
    await posthog.shutdown();
  } catch (error) {
    console.error("PostHog server shutdown failed:", error);
  }
}
