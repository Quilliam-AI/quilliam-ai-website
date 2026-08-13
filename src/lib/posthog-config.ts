export const ANALYTICS_CONSENT_KEY = "cookie_consent";
export const POSTHOG_CONSENT_KEY = ANALYTICS_CONSENT_KEY;
export const POSTHOG_PROXY_PATH = "/qai-relay";
export const POSTHOG_UI_HOST = "https://eu.posthog.com";
export const POSTHOG_DEFAULTS = "2026-01-30";

export type AnalyticsConsent = "accepted" | "rejected" | null;
export type PostHogConsent = AnalyticsConsent;

export function readStoredAnalyticsConsent(): AnalyticsConsent {
  try {
    const value = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredAnalyticsConsent(
  consent: Exclude<AnalyticsConsent, null>,
) {
  try {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
  } catch {
    // Some private browser contexts block storage. The in-memory React state
    // still hides the banner for the current session.
  }
}

export function hasAcceptedAnalyticsCookies() {
  return readStoredAnalyticsConsent() === "accepted";
}

export function clearStoredAnalyticsData() {
  if (typeof window === "undefined") return;

  const storagePrefixes = ["ph_"];
  const cookiePrefixes = ["_ga", "_gid", "_gat", "_gac_", "_dc_gtm_", "ph_"];

  for (const storage of [window.localStorage, window.sessionStorage]) {
    try {
      const keys = Array.from({ length: storage.length }, (_, index) =>
        storage.key(index),
      ).filter((key): key is string => Boolean(key));

      for (const key of keys) {
        if (storagePrefixes.some((prefix) => key.startsWith(prefix))) {
          storage.removeItem(key);
        }
      }
    } catch {
      // Storage can be unavailable in private browser contexts.
    }
  }

  try {
    const rootDomain = window.location.hostname.replace(/^www\./, "");
    const cookieNames = document.cookie
      .split(";")
      .map((cookie) => cookie.split("=", 1)[0]?.trim())
      .filter((name): name is string => Boolean(name));

    for (const name of cookieNames) {
      if (!cookiePrefixes.some((prefix) => name.startsWith(prefix))) continue;

      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${rootDomain}; SameSite=Lax`;
    }
  } catch {
    // Cookie access can be unavailable in restricted browser contexts.
  }
}

// Compatibility aliases for the existing PostHog client.
export const readStoredPostHogConsent = readStoredAnalyticsConsent;
export const writeStoredPostHogConsent = writeStoredAnalyticsConsent;
export const hasAcceptedPostHogCookies = hasAcceptedAnalyticsCookies;

export function isLocalPostHogHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1"
  );
}
