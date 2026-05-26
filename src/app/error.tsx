"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <h1 className="text-3xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-paper/60">
        An unexpected error occurred. You can try again or return to the
        homepage.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={reset}
          className="bg-signal px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-signal/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-paper/15 px-5 py-2.5 text-sm font-semibold text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
