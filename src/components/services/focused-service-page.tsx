import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { TrackClick } from "@/components/shared/track-click";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { siteConfig } from "@/lib/content";

export interface FocusedServicePageProps {
  path: string;
  breadcrumb: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  accent: string;
  intro: string;
  definition: string;
  bestFor: string[];
  outcomes: string[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  areaServed: {
    "@type": "Country" | "AdministrativeArea";
    name: string;
  };
  relatedLinks?: { href: string; label: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  serviceType: string;
}

function PageJsonLd({
  path,
  title,
  description,
  serviceType,
  areaServed,
  faq,
}: Pick<
  FocusedServicePageProps,
  "path" | "title" | "description" | "serviceType" | "areaServed" | "faq"
>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}${path}#service`,
        name: title,
        description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed,
        serviceType,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}${path}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
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

export function FocusedServicePage({
  path,
  breadcrumb,
  title,
  description,
  eyebrow,
  h1,
  accent,
  intro,
  definition,
  bestFor,
  outcomes,
  process,
  faq,
  areaServed,
  relatedLinks = [
    {
      href: "/service-areas",
      label: "Where we work",
      description: "Remote and in-person delivery from Cornwall throughout the UK.",
    },
    {
      href: "/ai-consultant-uk",
      label: "AI consultant UK",
      description: "AI assessment, implementation and training for UK businesses.",
    },
    {
      href: "/ai-automation-cornwall",
      label: "AI automation Cornwall",
      description: "AI workflow and automation services based in Cornwall.",
    },
  ],
  ctaLabel = "Book Free AI Opportunity",
  ctaHref = "/book?intent=opportunity",
  serviceType,
}: FocusedServicePageProps) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: breadcrumb, href: path }]} />
      <WebPageJsonLd
        path={path}
        name={title}
        description={description}
        datePublished="2026-05-09"
        dateModified="2026-08-13"
      />
      <PageJsonLd
        path={path}
        title={title}
        description={description}
        serviceType={serviceType}
        areaServed={areaServed}
        faq={faq}
      />

      <section className="relative overflow-hidden bg-paper px-6 pt-28 text-ink md:pt-36">
        <div className="absolute inset-x-0 top-0 h-1 bg-signal" />
        <div className="relative mx-auto grid max-w-[1220px] gap-10 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-[920px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              {h1} <span className="text-signal-strong">{accent}</span>
            </h1>
          </div>
          <div>
            <p className="max-w-[68ch] text-base leading-relaxed text-ink/68 md:text-lg">
              {intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackClick
                event="cta_clicked"
                properties={{ cta_type: "book_opportunity", location: path }}
              >
                <Button
                  asChild
                  size="lg"
                  className="max-w-full whitespace-normal text-center leading-tight tracking-normal normal-case sm:whitespace-nowrap"
                >
                  <Link href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </TrackClick>
              <Button
                asChild
                variant="outline-light"
                size="lg"
                className="border-ink/25 text-sm font-bold tracking-normal text-ink normal-case hover:bg-ink hover:text-paper"
              >
                <Link href="/#method">Review the delivery process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-14 text-ink md:py-16">
        <div className="mx-auto max-w-[1220px] border-y border-ink/10 py-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
            Definition
          </p>
          <p className="mt-5 max-w-[78ch] text-lg font-medium leading-relaxed text-ink/74 md:text-xl">
            {definition}
          </p>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
              Suitable for
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Suitable circumstances for AI implementation.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bestFor.map((item) => (
              <div key={item} className="rounded-card border border-paper/10 bg-paper/[0.025] p-4 text-sm leading-relaxed text-paper/68">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
                Deliverables
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Defined deliverables, responsibilities and controls.
              </h2>
            </div>
            <div className="space-y-4">
              {outcomes.map((item, index) => (
                <article
                  key={item}
                  className="rounded-card grid gap-4 border border-paper/10 bg-paper/[0.025] p-4 md:grid-cols-[3rem_1fr]"
                >
                  <span className="text-sm font-bold tracking-tight text-signal/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[78ch] text-base leading-relaxed text-paper/70">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-wire">
            Delivery
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <span className="text-sm font-bold tracking-tight text-amber-wire/85">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-8 text-2xl font-semibold tracking-tight text-paper">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/62">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 border-t border-paper/10 pt-14 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              FAQ
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Service information.
            </h2>
          </div>
          <div className="divide-y divide-paper/10 border-y border-paper/10">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-paper">
                  {item.question}
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-paper/15 text-signal transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-paper/62">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
            Related
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card-lg group border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-cyan-wire/40 hover:bg-cyan-wire/[0.035]"
              >
                <span className="text-lg font-semibold tracking-tight text-paper">
                  {item.label}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-paper/58">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/5 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/70">
              <ShieldCheck size={16} />
              Documented handover
            </div>
            <h2 className="mt-5 max-w-[820px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              Confirm the scope before committing to implementation.
            </h2>
          </div>
          <TrackClick
            event="cta_clicked"
            properties={{ cta_type: "book_opportunity", location: `${path}_final` }}
          >
            <Button
              asChild
              size="lg"
              variant="outline-light"
              className="max-w-full whitespace-normal bg-ink text-center leading-tight tracking-normal text-paper normal-case hover:bg-ink/90 sm:whitespace-nowrap"
            >
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </TrackClick>
        </div>
      </section>
    </>
  );
}
