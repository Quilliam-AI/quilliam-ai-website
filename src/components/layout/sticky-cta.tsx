"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-stone-950/90 backdrop-blur-xl border-t border-stone-800/50 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button asChild className="w-full rounded-full h-12 text-base">
        <Link href="/book">
          Book Your Free AI Audit
        </Link>
      </Button>
    </div>
  );
}
