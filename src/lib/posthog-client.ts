import { POSTHOG_CUSTOM_CAMPAIGN_PARAMS } from "@/lib/campaign-params";
import {
  isLocalPostHogHost,
  POSTHOG_DEFAULTS,
  POSTHOG_PROXY_PATH,
  POSTHOG_UI_HOST,
  readStoredPostHogConsent,
} from "@/lib/posthog-config";

type PostHogClient = (typeof import("posthog-js"))["default"];

let posthogPromise: Promise<PostHogClient | null> | null = null;

const posthogToken =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  process.env.NEXT_PUBLIC_POSTHOG_TOKEN;

function canLoadPostHog() {
  return (
    typeof window !== "undefined" &&
    posthogToken &&
    readStoredPostHogConsent() === "accepted" &&
    !isLocalPostHogHost(window.location.hostname)
  );
}

function runWhenIdle(callback: () => void) {
  const idleWindow = window as Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  };

  if (idleWindow.requestIdleCallback) {
    idleWindow.requestIdleCallback(callback, { timeout: 2500 });
    return;
  }

  window.setTimeout(callback, 1);
}

function loadPostHog() {
  const token = posthogToken;

  if (!token || !canLoadPostHog()) return Promise.resolve(null);

  posthogPromise ??= import("posthog-js")
    .then(({ default: posthog }) => {
      if (!posthog.__loaded) {
        posthog.init(token, {
          api_host: POSTHOG_PROXY_PATH,
          ui_host: POSTHOG_UI_HOST,
          custom_campaign_params: [...POSTHOG_CUSTOM_CAMPAIGN_PARAMS],
          defaults: POSTHOG_DEFAULTS,
          person_profiles: "identified_only",
          capture_pageleave: true,
          persistence: "localStorage+cookie",
          disable_session_recording: false,
          session_recording: {
            maskAllInputs: false,
            maskInputOptions: { password: true },
          },
        });
      }

      return posthog;
    })
    .catch((error) => {
      posthogPromise = null;

      if (process.env.NODE_ENV === "development") {
        console.warn("PostHog failed to initialise", error);
      }

      return null;
    });

  return posthogPromise;
}

export function initializePostHog({ immediate = false } = {}) {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (immediate) return loadPostHog();

  return new Promise<PostHogClient | null>((resolve) => {
    runWhenIdle(() => {
      void loadPostHog().then(resolve);
    });
  });
}

export async function capturePostHogEvent(
  event: string,
  properties?: Record<string, unknown>,
) {
  const posthog = await initializePostHog({ immediate: true });
  posthog?.capture(event, properties);
}

export async function identifyPostHogUser(
  distinctId: string,
  properties: Record<string, unknown>,
) {
  const posthog = await initializePostHog({ immediate: true });
  posthog?.identify(distinctId, properties);
}

export async function disablePostHog() {
  const posthog = posthogPromise ? await posthogPromise : null;

  if (!posthog?.__loaded) return;

  posthog.stopSessionRecording();
  posthog.set_config({
    disable_session_recording: true,
    persistence: "memory",
  });
}
