import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cpu,
  GraduationCap,
  MapPin,
  Radar,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { TrackClick } from "@/components/shared/track-click";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { proofLogos, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Levi Quilliam",
  description:
    "Levi Quilliam is the founder of Quilliam AI. His experience includes Deloitte and Halter. He provides AI implementation services from Cornwall throughout the UK.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Levi Quilliam | Quilliam AI",
    description:
      "Founder and principal consultant of Quilliam AI, providing AI workflow and supervised agent implementation for UK businesses.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Levi Quilliam | Quilliam AI",
    description:
      "AI workflow and supervised agent implementation from Cornwall throughout the UK.",
  },
};

const timeline = [
  {
    icon: GraduationCap,
    label: "Foundation",
    title: "Economics and computer science",
    text: "A Bachelor's degree in Economics and a Graduate Certificate in Computer Science, covering business decision-making and software systems.",
  },
  {
    icon: Building2,
    label: "Deloitte",
    title: "Turnaround and restructuring",
    text: "Experience in turnaround and restructuring, including operational constraints, cash, responsibilities, incentives and working practices.",
  },
  {
    icon: Cpu,
    label: "Tech",
    title: "Halter and technology delivery",
    text: "More than eight years of experience delivering software, AI tools, integrations, automation and product workflows.",
  },
  {
    icon: Radar,
    label: "Now",
    title: "Quilliam AI",
    text: "An AI consulting, training and implementation company serving UK businesses from Cornwall.",
  },
] as const;

function AboutPersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Levi Quilliam",
    description:
      "Levi Quilliam is the founder of Quilliam AI Ltd. He provides AI workflows, supervised agents, automations and staff training for UK businesses.",
    jobTitle: "Founder & Principal Consultant",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}${siteConfig.founderImage}`,
    sameAs: [...siteConfig.founderSameAs],
    knowsAbout: [
      "AI implementation",
      "AI education",
      "Supervised AI agents",
      "n8n workflows",
      "Claude",
      "ChatGPT",
      "Business operations",
      "Turnaround and restructuring",
      "Workflow automation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <WebPageJsonLd
        path="/about"
        name="About Levi Quilliam | Quilliam AI"
        description="Levi Quilliam is the founder of Quilliam AI, providing AI workflows, supervised agents and staff training for UK businesses."
        datePublished="2026-04-11"
        dateModified="2026-08-13"
      />
      <AboutPersonJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1220px] border-t border-paper/10 pt-14">
          <div className="max-w-[980px]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              About the founder
            </p>
            <h1 className="mt-6 max-w-[860px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              Levi Quilliam. Founder and principal consultant.
            </h1>
            <p className="mt-6 max-w-[70ch] text-base leading-relaxed text-paper/68 md:text-lg">
              Quilliam AI assesses business processes, defines suitable uses of
              AI, implements the agreed system and trains the staff responsible
              for operating it.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <Image
                src="/levi-headshot-circle.png"
                alt="Levi Quilliam, founder of Quilliam AI"
                width={88}
                height={88}
                sizes="88px"
                className="h-20 w-20 rounded-full object-cover ring-1 ring-paper/16"
              />
              <div>
                <p className="text-xl font-semibold text-paper">
                  Levi Quilliam
                </p>
                <p className="mt-1 text-sm leading-relaxed text-paper/55">
                  Founder, Quilliam AI
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-paper/62 md:text-lg">
              Levi&apos;s background includes economics, turnaround and
              restructuring at Deloitte, and more than eight years of software
              and AI product delivery. Relevant technologies include Claude,
              ChatGPT, n8n, embeddings, APIs, workflow engines and internal
              knowledge systems. Each engagement is assessed against the
              process, accountable owner, expected benefit and handover
              requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Building2, text: "Deloitte restructuring experience" },
                { icon: Cpu, text: "Halter technology experience" },
                { icon: MapPin, text: "Cornwall. Throughout the UK." },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/10 bg-paper/[0.035] px-3 py-2 text-sm text-paper/72"
                >
                  <item.icon size={16} className="text-signal" />
                  {item.text}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackClick
                event="cta_clicked"
                properties={{ cta_type: "book_opportunity", location: "about_hero" }}
              >
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
              </TrackClick>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm font-bold tracking-normal text-paper normal-case"
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="max-w-[780px]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
              Background
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Experience in restructuring and software delivery.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.title} className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <item.icon size={23} className="text-signal" />
                <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-paper/40">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-wire">
              Operating principles
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Defined scope, controls and documented handover.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper/65">
              Each system is designed around a stated business case, an
              accountable owner and agreed operating controls. We use
              established tools where suitable and provide documentation and
              training for the defined process.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Require a stated business case before implementation.",
              "Assign human approval according to the level of risk.",
              "Use established systems where they meet the requirements.",
              "Appoint an accountable owner for each process.",
              "Document operating limits, failure conditions and fallback procedures.",
              "Measure adoption against agreed criteria.",
            ].map((item) => (
              <div key={item} className="rounded-card flex gap-3 border border-paper/10 bg-paper/[0.025] p-4 text-sm leading-relaxed text-paper/70">
                <Wrench size={17} className="mt-0.5 shrink-0 text-amber-wire" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 border-t border-paper/10 pt-14 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Professional experience
            </p>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-paper/62">
              Experience in AI tools, software, operations and business
              recovery informs the assessment and scope of each engagement.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
            {proofLogos.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener"
                aria-label={`Visit ${company.name}`}
                className="grayscale transition hover:grayscale-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  sizes="180px"
                  className={`${company.className} w-auto opacity-70 hover:opacity-100`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            Work with Quilliam AI
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                href: "/ai-consultant-uk",
                title: "AI consultant UK",
                text: "AI assessment, implementation and training for UK businesses.",
              },
              {
                href: "/ai-automation-cornwall",
                title: "AI automation Cornwall",
                text: "AI workflow and automation services based in Cornwall.",
              },
              {
                href: "/service-areas",
                title: "Where we work",
                text: "Remote and in-person delivery from Cornwall throughout the UK.",
              },
            ].map((item) => (
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

      <section className="bg-signal px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <MapPin size={15} />
              Based in {siteConfig.location}
            </p>
            <h2 className="mt-5 max-w-[820px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              Discuss a proposed AI project or training requirement.
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline-light"
            className="max-w-full whitespace-normal bg-ink text-center leading-tight tracking-normal text-paper normal-case hover:bg-ink/90 sm:whitespace-nowrap"
          >
            <Link href="/book?intent=opportunity">
              Book Free AI Opportunity
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
