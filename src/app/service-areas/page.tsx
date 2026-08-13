import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Laptop, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Where We Work | Cornwall and the UK",
  description:
    "Quilliam AI is based in Cornwall and provides AI assessment, training and implementation services remotely and in person throughout the UK.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Where We Work | Cornwall and the UK | Quilliam AI",
    description:
      "AI assessment, training and implementation from Cornwall throughout the UK.",
    url: "/service-areas",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where We Work | Cornwall and the UK | Quilliam AI",
    description:
      "AI assessment, training and implementation from Cornwall throughout the UK.",
  },
};

const regions = [
  {
    name: "Cornwall and South West",
    description:
      "Assessment workshops, training and implementation sessions are available across Cornwall, Devon, Bristol and the wider South West.",
  },
  {
    name: "London and South East",
    description:
      "In-person assessment and commencement meetings are available by agreement. Ongoing implementation is generally delivered remotely.",
  },
  {
    name: "Midlands, North, Scotland, Wales and Northern Ireland",
    description:
      "Remote delivery is available for process assessment, implementation, documentation, training and adoption support.",
  },
] as const;

const delivery = [
  {
    icon: Laptop,
    title: "Remote delivery",
    description:
      "Process assessment, implementation, testing and handover can be completed through meetings, shared documents and supplied test cases.",
  },
  {
    icon: Users,
    title: "In-person sessions",
    description:
      "Assessment, training and implementation sessions can be held in person where agreed in the scope.",
  },
  {
    icon: MapPin,
    title: "Cornwall-based",
    description:
      "Local delivery is available to South West businesses, with remote delivery for teams throughout the UK.",
  },
] as const;

const areaLinks = [
  {
    href: "/ai-automation-cornwall",
    title: "AI automation in Cornwall",
    description:
      "AI workflow and automation services for businesses in Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge and the wider South West.",
  },
  {
    href: "/ai-consultant-uk",
    title: "AI consultant for UK businesses",
    description:
      "AI assessment, workflow design, implementation, training and documented handover throughout the UK.",
  },
] as const;

function ServiceAreasJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/service-areas#service-areas`,
    name: "AI workflows and agents throughout the UK",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region.name,
    })),
    description:
      "Quilliam AI provides AI workflow and supervised agent implementation to UK businesses from its base in Cornwall.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Where We Work", href: "/service-areas" }]}
      />
      <WebPageJsonLd
        path="/service-areas"
        name="Where We Work | Cornwall and the UK | Quilliam AI"
        description="Quilliam AI provides AI assessment, training and implementation services from Cornwall throughout the UK."
        datePublished="2026-04-11"
        dateModified="2026-08-13"
      />
      <ServiceAreasJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Where we work
          </p>
          <h1 className="mt-6 max-w-[940px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
            Based in Cornwall. Providing AI services throughout the UK.
          </h1>
          <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-paper/68 md:text-lg">
            Delivery may be remote, in person or a combination of both. The
            agreed format depends on the process, participants, systems and
            training requirements.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="max-w-full whitespace-normal text-center leading-tight tracking-normal normal-case sm:whitespace-nowrap"
            >
              <Link href="/book?intent=opportunity">
                Book Free AI Opportunity
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-sm font-bold tracking-normal text-paper normal-case"
            >
              <Link href="/contact">Discuss delivery location</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-4 md:grid-cols-3">
          {delivery.map((item) => (
            <article key={item.title} className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
              <item.icon size={24} className="text-signal" />
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-paper">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-paper/62">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
              Coverage
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Service coverage across the United Kingdom.
            </h2>
          </div>
          <div className="space-y-4">
            {regions.map((region) => (
              <article key={region.name} className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <h3 className="text-2xl font-semibold tracking-tight text-paper">
                  {region.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/62 md:text-base">
                  {region.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Related service pages
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {areaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card-lg group border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-signal/35 hover:bg-signal/[0.035]"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/62">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                  Read more
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
