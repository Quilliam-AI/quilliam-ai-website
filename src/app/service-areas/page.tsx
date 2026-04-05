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
  title: "Service Areas — Cornwall & UK-Wide",
  description:
    "Quilliam Digital provides AI automation, training, and digital services across the UK. Based in Cornwall, serving businesses in Devon, Somerset, Bristol, London, and nationwide.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas — Cornwall & UK-Wide | Quilliam Digital",
    description:
      "AI automation, training, and digital services across the UK. Based in Cornwall, serving businesses nationwide.",
    url: "/service-areas",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Service Areas — Cornwall & UK-Wide | Quilliam Digital",
    description:
      "AI automation, training, and digital services across the UK. Based in Cornwall, serving businesses nationwide.",
  },
};

const regions = [
  {
    name: "Cornwall",
    description:
      "Our home base. We work face-to-face with businesses across Cornwall — Truro, Falmouth, Penzance, Newquay, St Austell, Bodmin, and surrounding areas.",
    highlight: true,
  },
  {
    name: "Devon",
    description:
      "Regular in-person visits to Plymouth, Exeter, Torquay, and Barnstaple. Close enough for on-site workshops and meetings.",
    highlight: false,
  },
  {
    name: "Somerset & Dorset",
    description:
      "We support businesses in Taunton, Bath, Bournemouth, and Yeovil with a mix of on-site and remote delivery.",
    highlight: false,
  },
  {
    name: "Bristol & South West",
    description:
      "Bristol, Gloucester, Swindon, and the wider South West region. On-site available, remote always included.",
    highlight: false,
  },
  {
    name: "London & South East",
    description:
      "Remote-first delivery for London businesses, with periodic on-site visits for training workshops and setup.",
    highlight: false,
  },
  {
    name: "Midlands & North",
    description:
      "Birmingham, Manchester, Leeds, and beyond. All services delivered remotely with the same hands-on support.",
    highlight: false,
  },
  {
    name: "Wales & Scotland",
    description:
      "Cardiff, Edinburgh, Glasgow, and across Wales and Scotland. Full remote delivery with video calls and screen sharing.",
    highlight: false,
  },
  {
    name: "Northern Ireland",
    description:
      "Belfast and wider Northern Ireland. Remote AI automation and training delivered with full UK support.",
    highlight: false,
  },
];

const deliveryMethods = [
  {
    title: "In-Person",
    description:
      "Available across Cornwall, Devon, and the wider South West. Face-to-face workshops, audits, and setup sessions.",
  },
  {
    title: "Remote",
    description:
      "Video calls, screen sharing, and remote access for businesses anywhere in the UK. Same quality, no travel needed.",
  },
  {
    title: "Hybrid",
    description:
      "Initial setup in person, ongoing support remote. The best of both — most of our clients work this way.",
  },
];

function ServiceAreasJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/service-areas#service-areas`,
    name: "AI Automation & Digital Services — UK-Wide",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region.name,
    })),
    description:
      "Quilliam Digital provides AI automation, AI training, and digital services to small businesses across the United Kingdom. Based in Cornwall with nationwide remote delivery.",
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
        items={[{ name: "Service Areas", href: "/service-areas" }]}
      />
      <WebPageJsonLd
        path="/service-areas"
        name="Service Areas — Cornwall & UK-Wide | Quilliam Digital"
        description="Quilliam Digital provides AI automation, training, and digital services across the UK. Based in Cornwall, serving businesses nationwide."
        datePublished="2026-04-05"
        dateModified="2026-04-05"
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
              Where We Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white max-w-[18ch]">
              Based in Cornwall.{" "}
              <span className="text-emerald-400">Serving the UK.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-stone-400 leading-relaxed max-w-[56ch]">
              Quilliam Digital works with small businesses across the United
              Kingdom. We offer in-person delivery in the South West and
              full remote support nationwide — same quality, same results.
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
                Book a free AI Audit and find out how AI can save your
                business time. No commitment. No jargon.
              </p>
              <Link href="/book" className="mt-8 inline-block">
                <Button className="rounded-full h-12 px-8 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)] transition-all">
                  Book Your Free AI Audit
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
