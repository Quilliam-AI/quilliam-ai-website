export const STANDARD_UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
] as const;

// PostHog captures the five classic UTM fields by default. `utm_id` is
// standard too, but needs to be added explicitly as a custom campaign param.
export const POSTHOG_CUSTOM_CAMPAIGN_PARAMS = ["utm_id"] as const;

export function extractUtmParamsFromUrl(rawUrl?: string | null) {
  const utmParams: Partial<Record<(typeof STANDARD_UTM_PARAMS)[number], string>> =
    {};

  if (!rawUrl) return utmParams;

  try {
    const url = new URL(rawUrl);

    for (const key of STANDARD_UTM_PARAMS) {
      const value = url.searchParams.get(key)?.trim();
      if (value) {
        utmParams[key] = value;
      }
    }
  } catch {
    // Ignore malformed URLs; attribution should never block lead capture.
  }

  return utmParams;
}
