import type { Metadata } from "next";
import { BookingForm } from "@/components/book/booking-form";
import { CircuitPattern } from "@/components/shared/pattern-overlay";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import { Clock, MessageSquare, Zap, CheckCircle2 } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book Your Free AI Audit",
  description:
    "Book a free AI Audit with Quilliam Digital. We look at your business, find your biggest time-waster, and show you how AI can fix it. No commitment.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Your Free AI Audit | Quilliam Digital",
    description:
      "Book a free AI Audit with Quilliam Digital. We look at your business, find your biggest time-waster, and show you how AI can fix it.",
    url: "/book",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Book Your Free AI Audit | Quilliam Digital",
    description:
      "Book a free AI Audit with Quilliam Digital. We look at your business, find your biggest time-waster, and show you how AI can fix it.",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "30 minutes",
    description: "A focused session, not a rambling sales call",
  },
  {
    icon: Zap,
    title: "Actionable insight",
    description: "You leave with a clear plan, even if we never work together",
  },
  {
    icon: MessageSquare,
    title: "No jargon",
    description: "Plain English. We explain what AI can do for your business",
  },
  {
    icon: CheckCircle2,
    title: "No commitment",
    description: "Free. No obligation. No follow-up spam",
  },
];

export default function BookPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'd like to book a free AI Audit.");

  return (
    <section className="relative min-h-[100dvh] bg-stone-950 overflow-hidden">
      <BreadcrumbJsonLd items={[{ name: "Book Your Free AI Audit", href: "/book" }]} />
      <WebPageJsonLd
        path="/book"
        name="Book Your Free AI Audit | Quilliam Digital"
        description="Book a free, no-obligation AI Audit with Quilliam Digital. We'll show you exactly where AI can save your business time and win more customers."
        datePublished="2025-03-01"
        dateModified="2026-04-05"
      />
      <CircuitPattern className="text-emerald-400" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: copy + benefits */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40 w-fit">
                <Zap size={13} className="fill-emerald-400 text-emerald-400" />
                Free — No Obligation
              </span>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
                Book your free
                <span className="block text-emerald-400">
                  AI Audit
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-6">
              <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch]">
                Tell us a bit about your business and we will get back to you
                within 24 hours to arrange your free audit. Or get in touch
                directly:
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors text-sm"
                  >
                    Message on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </FadeIn>

            {/* Benefits grid */}
            <FadeIn delay={0.4} className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <benefit.icon
                        size={16}
                        className="text-emerald-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Social proof */}
            <FadeIn delay={0.5} className="mt-10">
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex -space-x-2">
                  {["K", "D", "S"].map((initial) => (
                    <div
                      key={initial}
                      className="w-8 h-8 rounded-full bg-emerald-900/60 border-2 border-stone-950 flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-emerald-400">
                        {initial}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-white font-medium">
                    5.0 on Google
                  </p>
                  <p className="text-xs text-stone-500">
                    Trusted by businesses across Cornwall and the UK
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: booking form */}
          <FadeIn delay={0.3} direction="left">
            <BookingForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
