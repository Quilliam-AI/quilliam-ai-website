"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Button
          type="button"
          onClick={reset}
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
