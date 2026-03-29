"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Levi, I'm interested in learning more about how AI can help my business."
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
