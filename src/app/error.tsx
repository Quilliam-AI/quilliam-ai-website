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
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm text-stone-400 max-w-[44ch] leading-relaxed">
        An unexpected error occurred. You can try again or return to the
        homepage.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-stone-700 px-5 py-2.5 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
