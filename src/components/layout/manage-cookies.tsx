"use client";

import { POSTHOG_CONSENT_KEY } from "@/lib/posthog-config";

export function ManageCookies() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem(POSTHOG_CONSENT_KEY);
        window.location.reload();
      }}
      className="inline-flex cursor-pointer items-center text-xs leading-none text-inherit transition-colors hover:text-ink"
    >
      Manage cookies
    </button>
  );
}
