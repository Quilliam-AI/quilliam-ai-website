import type { Metadata } from "next";
import { BookingForm } from "@/components/book/booking-form";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import { CalendarCheck, CheckCircle2, Gauge, Map, Zap } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Opportunity Mapping Call",
  description:
    "Book a free AI Opportunity Mapping Call with Quilliam AI. Find the first AI system worth building for your owner-led business, tied to measurable outcomes.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "AI Opportunity Mapping Call | Quilliam AI",
    description:
      "Find the first AI system worth building, tied to a measurable business outcome.",
    url: "/book",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "AI Opportunity Mapping Call | Quilliam AI",
    description: "Find the first AI system worth building for your business.",
  },
};

const benefits = [
  {
    icon: Map,
    title: "First system mapped",
    description: "We narrow the opportunity to one practical workflow",
  },
  {
    icon: Gauge,
    title: "Metric-led",
    description: "Hours, response, backlog, conversion, or reporting",
  },
  {
    icon: CalendarCheck,
    title: "Clear next step",
    description: "Build now, scope properly, or wait until the timing is right",
  },
  {
    icon: CheckCircle2,
    title: "No generic report",
    description: "The call is about implementation, not a PDF nobody uses",
  },
];

export default function BookPage() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Levi, I'd like to map the first AI system worth building for my business.",
  );

  return (
    <section className="relative min-h-[100dvh] bg-[#f8f5ef] overflow-hidden">
      <BreadcrumbJsonLd
        items={[{ name: "AI Opportunity Mapping Call", href: "/book" }]}
      />
      <WebPageJsonLd
        path="/book"
        name="AI Opportunity Mapping Call | Quilliam AI"
        description="Book a free AI Opportunity Mapping Call with Quilliam AI. Find the first AI system worth building, tied to a measurable business outcome."
        datePublished="2026-04-11"
        dateModified="2026-05-03"
      />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: copy + benefits */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-emerald-700 border border-emerald-100 w-fit">
                <Zap size={13} className="fill-emerald-500 text-emerald-500" />
                Free · Outcome-led · No generic report
              </span>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08] text-stone-950 text-balance">
                Map your first
                <span className="block text-emerald-700">
                  AI opportunity.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-6">
              <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-[54ch]">
                Tell me what eats your week. I&apos;ll help identify the first
                AI system worth mapping properly: the workflow, the business
                outcome, and the baseline we would need before building.
              </p>
              <ul className="mt-6 space-y-2">
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors text-sm"
                  >
                    Prefer WhatsApp? Message me
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-stone-600 hover:text-stone-950 transition-colors text-sm"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-stone-600 hover:text-stone-950 transition-colors text-sm"
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
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                      <benefit.icon
                        size={16}
                        className="text-emerald-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-950">
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

            {/* What's mapped */}
            <FadeIn delay={0.5} className="mt-10">
              <div className="px-5 py-4 rounded-2xl bg-white border border-stone-200 backdrop-blur-sm">
                <p className="text-xs text-stone-500 uppercase tracking-widest">
                  What we&apos;re looking for
                </p>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Repetitive admin. Slow lead response. Messy handoffs. Manual
                  reporting. Enquiry leakage. Underused data. The first system
                  should be small enough to build and important enough to
                  measure.
                </p>
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
