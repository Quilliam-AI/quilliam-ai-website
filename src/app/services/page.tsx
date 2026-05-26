import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, SearchCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { services, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Services for UK Businesses",
  description:
    "AI opportunity analysis, team training, and implementation services for UK businesses. Handoff-first AI workflows, agents, and adoption support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Services for UK Businesses | Quilliam AI",
    description:
      "AI opportunity analysis, team training, and implementation services for UK businesses.",
    url: "/services",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services for UK Businesses | Quilliam AI",
    description:
      "AI opportunity analysis, team training, and implementation services for UK businesses.",
  },
};

const serviceIcons = {
  opportunity: SearchCheck,
  adoption: GraduationCap,
  agents: Wrench,
} as const;

const serviceLinks = [
  {
    href: "/ai-consultant-uk",
    title: "AI consultant UK",
    text: "Founder-led AI consulting, workflow design, implementation, and handoff for UK businesses.",
  },
  {
    href: "/ai-automation-cornwall",
    title: "AI automation Cornwall",
    text: "Cornwall-based AI automation for repeated admin, follow-up, reporting, and support work.",
  },
  {
    href: "/service-areas",
    title: "Where we work",
    text: "Based in Cornwall. Working UK-wide and remote, with in-person sessions where useful.",
  },
] as const;

function ServicesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/services#services`,
    name: "Quilliam AI services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteConfig.url}/services#${service.id}`,
        name: service.title,
        description: service.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }]} />
      <WebPageJsonLd
        path="/services"
        name="AI Services for UK Businesses | Quilliam AI"
        description="Quilliam AI provides AI opportunity analysis, team training, and AI implementation for UK businesses."
        datePublished="2026-05-26"
        dateModified="2026-05-26"
      />
      <ServicesJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Services
          </p>
          <h1 className="mt-6 max-w-[940px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
            AI education and implementation under one roof.
          </h1>
          <p className="mt-6 max-w-[74ch] text-base leading-relaxed text-paper/68 md:text-lg">
            Quilliam AI helps UK businesses work out where AI is useful, train
            the team to use it properly, and build the workflows or agents that
            are worth owning. Start with the part that matches your problem:
            clarity, adoption, or implementation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="max-w-full whitespace-normal text-center leading-tight tracking-normal normal-case sm:whitespace-nowrap"
            >
              <Link href="/book?intent=opportunity">
                Find Where AI Can Help My Business
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase tracking-[0.14em] text-paper"
            >
              <Link href="/book?intent=training">Book AI Training</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.id];

              return (
                <article
                  id={service.id}
                  key={service.id}
                  className="rounded-card-lg border border-ink/10 bg-white p-5"
                >
                  <Icon size={24} className="text-signal-strong" />
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
                    {service.kicker}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-ink/64 md:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-sm leading-relaxed text-ink/68"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              { label: "Day-rate consulting", value: "£300-£400/day" },
              { label: "Scoped implementation", value: "Packages from £500" },
              { label: "Engagement model", value: "No lock-in" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-card border border-ink/10 bg-white/70 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Service pages
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-signal/35 hover:bg-signal/[0.035]"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/62">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
