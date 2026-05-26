"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { trackWhatsAppClicked } from "@/lib/analytics";

export function WhatsAppButton() {
  const href = getWhatsAppUrl(
    "Hi Levi, I want to talk about AI for my business."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Levi on WhatsApp"
      onClick={() => trackWhatsAppClicked("footer")}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-signal text-ink shadow-[0_18px_60px_-28px_rgba(18,16,12,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal/90 active:scale-95 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
