import type { Metadata } from "next";
import { BookingForm } from "@/components/book/booking-form";
import { CircuitPattern } from "@/components/shared/pattern-overlay";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import { Clock, MessageSquare, Zap, CheckCircle2, GraduationCap, Wrench } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";

type Intent = "training" | "audit" | "either";

function resolveIntent(raw: string | string[] | undefined): Intent {
  if (raw === "training") return "training";
  if (raw === "audit") return "audit";
  return "either";
}

const INTENT_CONTENT: Record<Intent, {
  badge: string;
  title: string;
  accent: string;
  description: string;
  BadgeIcon: typeof Zap;
}> = {
  training: {
    badge: "AI Training Session",
    title: "Book your",
    accent: "AI Training",
    description:
      "Tell us a bit about your team and we'll arrange a session where we train you and your people using your actual work. No slides, no theory, just practical AI skills you can use the next day.",
    BadgeIcon: GraduationCap,
  },
  audit: {
    badge: "AI Audit",
    title: "Book your",
    accent: "AI Audit",
    description:
      "Tell us a bit about your business and we'll arrange a session where we look at where AI can save you hours and make you money. Walk away with a clear recommendation, whether or not we work together.",
    BadgeIcon: Wrench,
  },
  either: {
    badge: "AI Session",
    title: "Book your",
    accent: "AI Session",
    description:
      "Tell us a bit about your business and we'll arrange a session — training, audit, or both. Walk away with a clear plan for what AI can do for you, whether we work together afterwards or not.",
    BadgeIcon: Zap,
  },
};

export const metadata: Metadata = {
  title: "Book Your AI Session",
  description:
    "Book an AI training session or AI Audit with Quilliam AI. We'll show you what AI can do for your team or your business in 30–60 minutes. No commitment.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Your AI Session | Quilliam AI",
    description:
      "Book an AI training session or AI Audit with Quilliam AI. No commitment, no jargon.",
    url: "/book",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Book Your AI Session | Quilliam AI",
    description:
      "Book an AI training session or AI Audit with Quilliam AI.",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "30–60 minutes",
    description: "A focused session, not a rambling sales call",
  },
  {
    icon: Zap,
    title: "Actionable plan",
    description: "Leave with a clear recommendation you can act on",
  },
  {
    icon: MessageSquare,
    title: "No jargon",
    description: "Plain English. We explain what AI can do for your business",
  },
  {
    icon: CheckCircle2,
    title: "No commitment",
    description: "No obligation. No follow-up spam",
  },
];

interface BookPageProps {
  searchParams: Promise<{ intent?: string | string[] }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;
  const intent = resolveIntent(params.intent);
  const copy = INTENT_CONTENT[intent];
  const BadgeIcon = copy.BadgeIcon;

  const whatsappHref = getWhatsAppUrl(
    intent === "training"
      ? "Hi Levi, I'd like to book an AI training session for my team."
      : intent === "audit"
        ? "Hi Levi, I'd like to book an AI Audit for my business."
        : "Hi Levi, I'd like to book an AI session.",
  );

  return (
    <section className="relative min-h-[100dvh] bg-stone-950 overflow-hidden">
      <BreadcrumbJsonLd items={[{ name: "Book Your AI Session", href: "/book" }]} />
      <WebPageJsonLd
        path="/book"
        name="Book Your AI Session | Quilliam AI"
        description="Book an AI training session or AI Audit with Quilliam AI. We'll show you what AI can do for your team or your business in 30-60 minutes."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
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
                <BadgeIcon size={13} className="fill-emerald-400 text-emerald-400" />
                {copy.badge}
              </span>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
                {copy.title}
                <span className="block text-emerald-400">
                  {copy.accent}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-6">
              <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch]">
                {copy.description}
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
                  {["V", "Q", "U"].map((initial) => (
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
                    Education + Implementation
                  </p>
                  <p className="text-xs text-stone-500">
                    UK AI agency doing both sides under one roof
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: booking form */}
          <FadeIn delay={0.3} direction="left">
            <BookingForm defaultInterest={intent} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
