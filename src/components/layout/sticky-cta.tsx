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
      <div className="flex gap-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 rounded-full h-11 text-sm text-white/90 border-white/20"
        >
          <Link href="/book?intent=training">Free Training</Link>
        </Button>
        <Button asChild className="flex-1 rounded-full h-11 text-sm">
          <Link href="/book?intent=audit">Free AI Audit</Link>
        </Button>
      </div>
    </div>
  );
}
