export const POSTHOG_CONSENT_KEY = "cookie_consent";
export const POSTHOG_PROXY_PATH = "/qai-relay";
export const POSTHOG_UI_HOST = "https://eu.posthog.com";
export const POSTHOG_DEFAULTS = "2026-01-30";

export type PostHogConsent = "accepted" | "rejected" | null;

export function readStoredPostHogConsent(): PostHogConsent {
  try {
    const value = localStorage.getItem(POSTHOG_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredPostHogConsent(
  consent: Exclude<PostHogConsent, null>,
) {
  try {
    localStorage.setItem(POSTHOG_CONSENT_KEY, consent);
  } catch {
    // Some private browser contexts block storage. The in-memory React state
    // still hides the banner for the current session.
  }
}

export function hasAcceptedPostHogCookies() {
  return readStoredPostHogConsent() === "accepted";
}

export function isLocalPostHogHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1"
  );
}
