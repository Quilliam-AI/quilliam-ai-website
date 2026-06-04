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
import { FadeIn } from "@/components/shared/fade-in";
import { TrackClick } from "@/components/shared/track-click";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { proofLogos, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Levi Quilliam",
  description:
    "Meet Levi Quilliam, founder of Quilliam AI. Ex-Deloitte, Halter, and XGX.AI. Based in Cornwall, building AI workflows and agents for UK businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Levi Quilliam | Quilliam AI",
    description:
      "Founder of Quilliam AI. Practical AI workflow and agent implementation for UK businesses.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Levi Quilliam | Quilliam AI",
    description:
      "Founder-led AI workflow and agent implementation from Cornwall, UK.",
  },
};

const timeline = [
  {
    icon: GraduationCap,
    label: "Foundation",
    title: "Economics plus computer science",
    text: "A Bachelor's degree in Economics plus a Graduate Certificate in Computer Science. The useful overlap: how businesses make decisions, where systems break, and how software can make work easier instead of noisier.",
  },
  {
    icon: Building2,
    label: "Deloitte",
    title: "Turnaround and restructuring",
    text: "Work in turnaround and restructuring, where constraints, cash, handoffs, incentives, and operating habits matter more than slogans.",
  },
  {
    icon: Cpu,
    label: "Tech",
    title: "Halter and XGX.AI",
    text: "Eight-plus years shipping practical software, AI tooling, integrations, automation, and product workflows that real teams can understand, trust, and keep using.",
  },
  {
    icon: Radar,
    label: "Now",
    title: "Quilliam AI",
    text: "A founder-led AI implementation company built to make AI clear, useful, and usable inside real UK businesses.",
  },
] as const;

function AboutPersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Levi Quilliam",
    description:
      "Levi Quilliam is the founder of Quilliam AI Ltd. He builds AI workflows, supervised agents, automations, and practical AI training for UK businesses.",
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
        description="Levi Quilliam is the founder of Quilliam AI, building practical AI workflows and supervised agents for UK businesses."
        datePublished="2026-04-11"
        dateModified="2026-05-26"
      />
      <AboutPersonJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <FadeIn className="relative mx-auto max-w-[1220px] border-t border-paper/10 pt-14">
          <div className="max-w-[980px]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              About the founder
            </p>
            <h1 className="mt-6 max-w-[860px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              I make AI practical for real business operations.
            </h1>
            <p className="mt-6 max-w-[70ch] text-base leading-relaxed text-paper/68 md:text-lg">
              I am Levi Quilliam, founder of Quilliam AI. The work is not to
              sell another AI tool. It is to understand where a business is
              stuck, design the workflow, build the useful agent layer, and
              hand it to the team in a way they can actually run.
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
              My background combines economics, turnaround and restructuring at
              Deloitte, and eight-plus years building software and AI-enabled
              products. The tools change quickly: Claude, ChatGPT, n8n,
              embeddings, APIs, workflow engines, and internal knowledge
              systems. The useful question stays the same: what work is stuck,
              who owns it, and what would make the team more capable after the
              handoff?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Building2, text: "Deloitte turnaround" },
                { icon: Cpu, text: "Halter and XGX.AI" },
                { icon: MapPin, text: "Cornwall. UK-wide." },
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
                    Find Where AI Can Help My Business
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
        </FadeIn>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <FadeIn className="max-w-[780px]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-wire">
              Background
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              The mix is business surgery plus software delivery.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeIn direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-wire">
              Operating principles
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Handoff-first, workflow-first, no AI theatre.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper/65">
              A useful system should make the client more capable, not more
              dependent. That means standard tools where possible, clear
              owners, visible controls, documentation, and training tied to the
              exact workflow being shipped.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Build only what has a business case.",
              "Keep humans in the loop where risk is real.",
              "Use the tools the team already understands.",
              "Train the owner, not just the operator.",
              "Document how the system fails, not just how it works.",
              "Optimise for adoption, not demo value.",
            ].map((item, index) => (
              <FadeIn key={item} delay={index * 0.05} direction="left">
                <div className="rounded-card flex gap-3 border border-paper/10 bg-paper/[0.025] p-4 text-sm leading-relaxed text-paper/70">
                  <Wrench size={17} className="mt-0.5 shrink-0 text-amber-wire" />
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080a08] px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 border-t border-paper/10 pt-14 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <FadeIn direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Proof points
            </p>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-paper/62">
              Experience across AI tooling, software, operations, and business
              recovery informs the way Quilliam AI scopes work.
            </p>
          </FadeIn>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
            {proofLogos.map((company, index) => (
              <FadeIn key={company.name} delay={index * 0.05} direction="left">
                <a
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${company.name}`}
                  className="block grayscale transition hover:grayscale-0"
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-paper md:py-20">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-10">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Work with Quilliam AI
            </p>
          </FadeIn>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                href: "/ai-consultant-uk",
                title: "AI consultant UK",
                text: "Practical consulting and implementation for UK businesses.",
              },
              {
                href: "/ai-automation-cornwall",
                title: "AI automation Cornwall",
                text: "Local workflow automation support from Cornwall.",
              },
              {
                href: "/service-areas",
                title: "Where we work",
                text: "Remote-first delivery across the UK, with in-person sessions where useful.",
              },
            ].map((item, index) => (
              <FadeIn key={item.href} delay={index * 0.08}>
                <Link
                  href={item.href}
                  className="rounded-card-lg block border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-signal/35 hover:bg-signal/[0.035]"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-paper">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-paper/62">
                    {item.text}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal px-6 py-20 text-ink md:py-28">
        <FadeIn className="mx-auto grid max-w-[1220px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <MapPin size={15} />
              Based in {siteConfig.location}
            </p>
            <h2 className="mt-5 max-w-[820px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              Bring me the workflow that keeps wasting time.
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline-light"
            className="max-w-full whitespace-normal bg-ink text-center leading-tight tracking-normal text-paper normal-case hover:bg-ink/90 sm:whitespace-nowrap"
          >
            <Link href="/book?intent=opportunity">
              Find Where AI Can Help My Business
              <ArrowRight size={18} />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
