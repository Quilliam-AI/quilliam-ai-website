import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { DotGridPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Where We Work — Cornwall, UK & Remote",
  description:
    "Quilliam AI works with UK businesses nationwide. Based in Cornwall, delivering AI training, AI implementation, and digital services on-site in the South West and remotely UK-wide.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Where We Work — Cornwall, UK & Remote | Quilliam AI",
    description:
      "AI education and implementation for UK businesses. Cornwall-based, working UK-wide and remote.",
    url: "/service-areas",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Where We Work — Cornwall, UK & Remote | Quilliam AI",
    description:
      "Cornwall-based UK AI agency. AI training and implementation for businesses nationwide.",
  },
};

const regions = [
  {
    name: "Cornwall & South West",
    description:
      "Our home base. Training and implementation delivered in-person across Cornwall, Devon, Bristol, and the wider South West. On-site visits as often as you need them.",
    highlight: true,
  },
  {
    name: "London & South East",
    description:
      "Regular in-person visits to London for both training workshops and implementation work. Great connectivity, easy day trips from Cornwall.",
    highlight: false,
  },
  {
    name: "Midlands & Thames Valley",
    description:
      "Birmingham, Oxford, Cambridge, Reading, and beyond. On-site for workshops and kick-offs, remote for ongoing work.",
    highlight: false,
  },
  {
    name: "North & Scotland",
    description:
      "Manchester, Leeds, Edinburgh, Glasgow. Remote-first delivery with occasional on-site visits for team training or handoff sessions.",
    highlight: false,
  },
  {
    name: "Wales & Northern Ireland",
    description:
      "Cardiff, Belfast, and across Wales and Northern Ireland. Full remote delivery for both training and implementation work.",
    highlight: false,
  },
  {
    name: "Remote — anywhere in the UK",
    description:
      "Most of our work can be delivered remotely over video, shared docs, and async comms. Same quality, zero travel overhead for you.",
    highlight: false,
  },
];

const deliveryMethods = [
  {
    title: "In-Person",
    description:
      "Available across Cornwall, the South West, and London as standard. Ideal for team training workshops, kick-off sessions, and explicit handoff visits. We come to you.",
  },
  {
    title: "Remote",
    description:
      "Default mode for clients outside the South West. Full training and implementation delivered over video, shared docs, and async comms. Same output, zero travel overhead.",
  },
  {
    title: "Hybrid",
    description:
      "Most common arrangement. Kick-off or training on-site, ongoing implementation work remote. Best of both — and what most clients prefer.",
  },
];

function ServiceAreasJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/service-areas#service-areas`,
    name: "AI Education and Implementation — UK-wide & remote",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region.name,
    })),
    description:
      "Quilliam AI provides AI training, AI implementation, and digital services to UK businesses nationwide. Based in Cornwall with in-person delivery across the South West and London plus full remote delivery UK-wide.",
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
        name="Where We Work — Cornwall, UK & Remote | Quilliam AI"
        description="Quilliam AI works with UK businesses nationwide. Cornwall-based, delivering AI training, implementation, and digital services on-site and remote."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
      />
      <ServiceAreasJsonLd />

      <section className="relative bg-stone-950 overflow-hidden">
        <DotGridPattern className="text-emerald-400" />

        {/* Atmospheric glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/[0.06] rounded-full blur-[150px] pointer-events-none" />

        {/* Hero */}
        <div className="relative max-w-[1400px] mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Where we work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white max-w-[18ch]">
              Based in Cornwall.{" "}
              <span className="text-emerald-400">Working everywhere.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-stone-400 leading-relaxed max-w-[56ch]">
              Quilliam AI Ltd is based in Cornwall, UK (Companies House{" "}
              {siteConfig.companyNumber}). AI training, implementation, and
              digital services delivered in-person across the South West and
              London, and remotely for businesses anywhere else in the UK.
            </p>
          </FadeIn>
        </div>

        {/* Regions grid */}
        <div className="relative max-w-[1400px] mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region, i) => (
              <FadeIn key={region.name} delay={0.05 * i}>
                <div
                  className={`rounded-2xl p-6 border transition-colors h-full ${
                    region.highlight
                      ? "bg-emerald-900/20 border-emerald-800/40"
                      : "bg-stone-900 border-stone-800/60 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin
                      size={16}
                      className={
                        region.highlight
                          ? "text-emerald-400"
                          : "text-stone-500"
                      }
                      strokeWidth={1.5}
                    />
                    <h2 className="text-lg font-semibold tracking-tight text-white">
                      {region.name}
                    </h2>
                    {region.highlight && (
                      <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-400 bg-emerald-900/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
                        Home Base
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Delivery methods */}
        <div className="relative max-w-[1400px] mx-auto px-6 pb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent mb-16" />

          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-10">
              How we deliver
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deliveryMethods.map((method, i) => (
              <FadeIn key={method.title} delay={0.1 * i}>
                <div className="rounded-2xl bg-stone-900 border border-stone-800/60 p-6 h-full">
                  <h3 className="text-base font-semibold tracking-tight text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative max-w-[1400px] mx-auto px-6 pb-24 md:pb-32">
          <div className="h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent mb-16" />
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white">
                Wherever you are, we can help
              </h2>
              <p className="mt-4 text-base text-stone-400 leading-relaxed max-w-[48ch] mx-auto">
                Book an AI Audit and find out exactly what we would fix
                first. No commitment. No jargon.
              </p>
              <Link href="/book" className="mt-8 inline-block">
                <Button className="rounded-full h-12 px-8 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)] transition-all">
                  Book Your AI Audit
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
