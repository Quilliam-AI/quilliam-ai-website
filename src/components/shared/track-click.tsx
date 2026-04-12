"use client";

import type { ReactNode } from "react";
import posthog from "posthog-js";

interface TrackClickProps {
  /** PostHog event name */
  event: string;
  /** Event properties */
  properties?: Record<string, string>;
  children: ReactNode;
}

/**
 * Client wrapper that fires a PostHog event on click.
 * Use around Links/buttons in server components where you can't add onClick.
 * Renders as a transparent wrapper using CSS `display: contents`.
 */
export function TrackClick({ event, properties, children }: TrackClickProps) {
  return (
    <span
      onClick={() => posthog.capture(event, properties)}
      className="contents"
    >
      {children}
    </span>
  );
}
