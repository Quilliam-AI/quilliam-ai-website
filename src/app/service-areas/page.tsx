import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { DotGridPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { CompaniesHouseLink } from "@/components/shared/legal-links";

export const metadata: Metadata = {
  title: "Where We Work — Cornwall, UK & Remote",
  description:
    "Quilliam AI delivers outcome-led AI implementation for owner-led UK businesses nationwide. Based in Cornwall, on-site across the South West and London plus remote delivery UK-wide.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Where We Work — Cornwall, UK & Remote | Quilliam AI",
    description:
      "Based in Cornwall, outcome-led AI implementation for owner-led UK businesses nationwide.",
    url: "/service-areas",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Where We Work — Cornwall, UK & Remote | Quilliam AI",
    description:
      "Cornwall-based. Outcome-led AI implementation for owner-led UK businesses nationwide.",
  },
};

const regions = [
  {
    name: "Cornwall & South West",
    description:
      "Our home base. On-site kick-offs and Handover Days delivered in-person across Cornwall, Devon, Bristol, and the wider South West. Shortest journey to us — easiest to pop in.",
    highlight: true,
  },
  {
    name: "London & South East",
    description:
      "Regular in-person visits to London for kick-offs, voice-capture sessions, and go-live handovers. Great connectivity, easy day trips from Cornwall by train.",
    highlight: false,
  },
  {
    name: "Midlands & Thames Valley",
    description:
      "Birmingham, Oxford, Cambridge, Reading, and beyond. On-site for kick-offs and Handover Days, remote for the build weeks in between.",
    highlight: false,
  },
  {
    name: "North & Scotland",
    description:
      "Manchester, Leeds, Edinburgh, Glasgow. Remote-first delivery with on-site visits for kick-off and handover if it helps.",
    highlight: false,
  },
  {
    name: "Wales & Northern Ireland",
    description:
      "Cardiff, Belfast, and across Wales and Northern Ireland. Full remote delivery for every offer on the ladder.",
    highlight: false,
  },
  {
    name: "Remote — anywhere in the UK",
    description:
      "Most of the work ships remotely over video, shared docs, and Slack. Same output, zero travel overhead for you.",
    highlight: false,
  },
];

const deliveryMethods = [
  {
    title: "In-person",
    description:
      "Available across Cornwall, the South West, and London as standard. Good for kick-offs, workflow mapping, team training, and handover when your team takes the keys.",
  },
  {
    title: "Remote",
    description:
      "Default mode for businesses outside the South West. Mapping, build, launch, training, and optimisation delivered over video, shared docs, and Slack. Same output, zero travel overhead.",
  },
  {
    title: "Hybrid",
    description:
      "The most common shape. On-site kick-off, remote build, on-site handover. Best of both.",
  },
];

function ServiceAreasJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/service-areas#service-areas`,
    name: "Outcome-led AI implementation — UK-wide & remote",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region.name,
    })),
    description:
      "Quilliam AI delivers outcome-led AI implementation for owner-led UK businesses nationwide — strategy, systems, and team training tied to measurable business outcomes. Based in Cornwall with on-site delivery across the South West and London plus full remote delivery UK-wide.",
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
        description="Quilliam AI delivers outcome-led AI implementation for owner-led UK businesses nationwide. Cornwall-based, delivering on-site across the South West and London plus full remote delivery UK-wide."
        datePublished="2026-04-11"
        dateModified="2026-05-01"
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
              <span className="text-emerald-400">Shipping everywhere.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-stone-400 leading-relaxed max-w-[56ch]">
              Quilliam AI Ltd is based in Cornwall, UK (Companies House{" "}
              <CompaniesHouseLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors">
                {siteConfig.companyNumber}
              </CompaniesHouseLink>
              ). Outcome-led AI implementation delivered on-site across the
              South West and London, remotely for businesses anywhere else in
              the UK.
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
                        Home base
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
                Wherever you are, we can ship
              </h2>
              <p className="mt-4 text-base text-stone-400 leading-relaxed max-w-[52ch] mx-auto">
                Start with an AI Opportunity Mapping Call. We find the first
                system worth building and the metric it should move.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/book">
                    Map my first AI system
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
