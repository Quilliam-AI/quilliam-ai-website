import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, GraduationCap, Bot, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { siteConfig, services } from "@/lib/content";

/* ------------------------------------------------------------------ */
/*  ServiceJsonLd                                                      */
/* ------------------------------------------------------------------ */

interface ServiceJsonLdProps {
  slug: string;
  name: string;
  description: string;
  serviceType: string;
  price: string;
  offerDescription: string;
  faqs: { question: string; answer: string }[];
}

export function ServiceJsonLd({
  slug,
  name,
  description,
  serviceType,
  price,
  offerDescription,
  faqs,
}: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/services/${slug}#service`,
        name,
        description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType,
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "GBP",
          description: offerDescription,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/services/${slug}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  ServiceHero                                                        */
/* ------------------------------------------------------------------ */

interface ServiceHeroProps {
  pattern: React.ReactNode;
  icon: LucideIcon;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  whatsappHref: string;
  trustBadges: string[];
}

export function ServiceHero({
  pattern,
  icon: Icon,
  badge,
  titleLine1,
  titleLine2,
  description,
  ctaText,
  whatsappHref,
  trustBadges,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-950">
      {pattern}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center">
                <Icon size={18} className="text-emerald-400" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                {badge}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
              {titleLine1}
              <span className="block text-emerald-400">{titleLine2}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-6">
            <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[56ch]">
              {description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
              >
                <Link href="/book">
                  {ctaText}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-8 text-base text-white"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-10">
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span className="text-sm text-stone-400">{badge}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ProcessSteps                                                       */
/* ------------------------------------------------------------------ */

interface ProcessStepsProps {
  label: string;
  heading: string;
  steps: { number: string; title: string; description: string }[];
  sectionBg?: string;
  cardBg?: string;
}

export function ProcessSteps({
  label,
  heading,
  steps,
  sectionBg = "bg-stone-950",
  cardBg = "bg-stone-900",
}: ProcessStepsProps) {
  return (
    <section id="process" className={`relative py-20 md:py-28 ${sectionBg} overflow-hidden`}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
            {heading}
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className={`relative p-8 rounded-2xl ${cardBg} border border-stone-800/60 h-full`}>
                <span className="text-5xl font-bold text-emerald-500/20 font-mono">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ServiceFaqSection                                                  */
/* ------------------------------------------------------------------ */

interface ServiceFaqSectionProps {
  heading: string;
  faqs: { question: string; answer: string }[];
}

export function ServiceFaqSection({ heading, faqs }: ServiceFaqSectionProps) {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
            {heading}
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <details className="group rounded-2xl bg-stone-900 border border-stone-800/60 hover:border-stone-700 transition-colors overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-medium text-white [&::-webkit-details-marker]:hidden list-none">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-stone-500 group-open:rotate-45 transition-transform duration-200 text-lg">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-stone-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  OtherServices                                                      */
/* ------------------------------------------------------------------ */

const serviceIcons: Record<string, LucideIcon> = {
  "ai-training": GraduationCap,
  "ai-automation": Bot,
  "digital-services": Globe,
};

const allServices = services.map((s) => ({
  slug: s.slug,
  icon: serviceIcons[s.slug] ?? Globe,
  title: s.title,
  description: s.description,
}));

interface OtherServicesSectionProps {
  currentSlug: string;
  heading: string;
  sectionBg?: string;
  cardBg?: string;
}

export function OtherServicesSection({
  currentSlug,
  heading,
  sectionBg = "bg-stone-900",
  cardBg = "bg-stone-950",
}: OtherServicesSectionProps) {
  const others = allServices.filter((s) => s.slug !== currentSlug);

  return (
    <section className={`relative py-20 md:py-28 ${sectionBg} overflow-hidden`}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Other services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
            {heading}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((service, i) => (
            <FadeIn key={service.slug} delay={(i + 1) * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className={`group flex items-start gap-5 p-8 rounded-2xl ${cardBg} border border-stone-800/60 hover:border-emerald-800/60 transition-colors h-full`}
              >
                <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center shrink-0">
                  <service.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ServiceCta                                                         */
/* ------------------------------------------------------------------ */

interface ServiceCtaProps {
  heading: string;
  description: string;
  ctaText: string;
  tagline: string;
  whatsappHref: string;
  sectionBg?: string;
}

export function ServiceCta({
  heading,
  description,
  ctaText,
  tagline,
  whatsappHref,
  sectionBg = "bg-stone-950",
}: ServiceCtaProps) {
  return (
    <section className={`relative py-24 md:py-32 ${sectionBg} overflow-hidden`}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
            {heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-5">
          <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch] mx-auto">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-12 px-10 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
            >
              <Link href="/book">
                {ctaText}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-12 px-10 text-base text-white"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-8">
          <p className="text-xs text-stone-500">
            {tagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
