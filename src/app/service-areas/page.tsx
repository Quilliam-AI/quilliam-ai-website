import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Laptop, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Where We Work - Cornwall, UK and Remote",
  description:
    "Quilliam AI works with UK businesses nationwide. Based in Cornwall, delivering AI workflow and agent implementation remotely and in person where useful.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Where We Work - Cornwall, UK and Remote | Quilliam AI",
    description:
      "AI workflow and agent implementation for UK businesses. Cornwall-based, UK-wide and remote.",
    url: "/service-areas",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where We Work - Cornwall, UK and Remote | Quilliam AI",
    description:
      "Cornwall-based AI workflow and agent implementation for UK businesses.",
  },
};

const regions = [
  {
    name: "Cornwall and South West",
    description:
      "Our home base. Useful for discovery workshops, training, and local rollout sessions across Cornwall, Devon, Bristol, and the wider South West.",
  },
  {
    name: "London and South East",
    description:
      "Workshops and kick-offs available when in-person time improves alignment. Ongoing build work stays remote-first.",
  },
  {
    name: "Midlands, North, Scotland, Wales and Northern Ireland",
    description:
      "Full remote delivery for AI workflow mapping, agent builds, documentation, training, and adoption support.",
  },
] as const;

const delivery = [
  {
    icon: Laptop,
    title: "Remote-first",
    description:
      "Most workflow analysis, build work, testing, and handoff can happen quickly over video, shared docs, and async examples.",
  },
  {
    icon: Users,
    title: "In-person where it helps",
    description:
      "Discovery and adoption sessions can be run in person when a room full of people will move the work faster.",
  },
  {
    icon: MapPin,
    title: "Cornwall-based",
    description:
      "Local context for South West businesses, with the same remote-friendly delivery for teams across the UK.",
  },
] as const;

const areaLinks = [
  {
    href: "/ai-automation-cornwall",
    title: "AI automation in Cornwall",
    description:
      "Local implementation support for businesses in Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge, and the wider South West.",
  },
  {
    href: "/ai-consultant-uk",
    title: "AI consultant for UK businesses",
    description:
      "Remote-first AI consulting, workflow design, implementation, training, and handoff across the UK.",
  },
] as const;

function ServiceAreasJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/service-areas#service-areas`,
    name: "AI workflows and agents - UK-wide and remote",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region.name,
    })),
    description:
      "Quilliam AI provides AI workflow and supervised agent implementation to UK businesses nationwide. Based in Cornwall with remote-first delivery.",
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
        name="Where We Work - Cornwall, UK and Remote | Quilliam AI"
        description="Quilliam AI works with UK businesses nationwide. Based in Cornwall, delivering AI workflows and agents remotely and in person where useful."
        datePublished="2026-04-11"
        dateModified="2026-05-26"
      />
      <ServiceAreasJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <FadeIn className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Where we work
          </p>
          <h1 className="mt-6 max-w-[940px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
            Based in Cornwall. Built for UK-wide AI implementation.
          </h1>
          <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-paper/68 md:text-lg">
            AI workflow and agent projects do not need a room full of people
            every week. They need real examples, quick feedback, clear owners,
            and enough in-person time to build trust where it matters.
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
              className="text-sm font-bold tracking-normal text-paper normal-case"
            >
              <Link href="/contact">Ask about location</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-4 md:grid-cols-3">
          {delivery.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <item.icon size={24} className="text-signal" />
                <h2 className="mt-8 text-2xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/62">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <FadeIn direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
              Coverage
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Geography should not decide whether the workflow gets fixed.
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {regions.map((region, index) => (
              <FadeIn key={region.name} delay={index * 0.08} direction="left">
                <article className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                  <h3 className="text-2xl font-semibold tracking-tight text-paper">
                    {region.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/62 md:text-base">
                    {region.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Local and national pages
            </p>
          </FadeIn>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {areaLinks.map((item, index) => (
              <FadeIn key={item.href} delay={index * 0.08}>
                <Link
                  href={item.href}
                  className="rounded-card-lg group block border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-signal/35 hover:bg-signal/[0.035]"
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
