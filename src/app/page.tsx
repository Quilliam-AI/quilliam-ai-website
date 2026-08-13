import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/home/trust-bar";
import { FadeIn } from "@/components/shared/fade-in";
import { TrackClick } from "@/components/shared/track-click";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import {
  bridgeSteps,
  faqs,
  fitSignals,
  getWhatsAppUrl,
  services,
  siteConfig,
} from "@/lib/content";

const serviceIcons = {
  opportunity: SearchCheck,
  agents: Wrench,
  adoption: GraduationCap,
} satisfies Record<(typeof services)[number]["id"], LucideIcon>;

const problemCards = [
  {
    title: "Tool use is uncoordinated",
    text: "Staff use ChatGPT, Copilot, plugins and templates without a common process or agreed controls.",
  },
  {
    title: "Processes remain manual",
    text: "Lead management, reporting, support, document handling and administration still depend on copying information and individual memory.",
  },
  {
    title: "Responsibilities are unclear",
    text: "The business has not defined permitted use, approval requirements or responsibility for checking output.",
  },
  {
    title: "Benefits are unmeasured",
    text: "Proposed AI work has no agreed baseline for time, cost, quality or service improvement.",
  },
] as const;

const exampleWorkflows = [
  "An inbound enquiry is classified and a draft response is prepared for review.",
  "A support request is triaged, checked against policy and drafted for approval.",
  "A weekly report compiles the required notes, figures and commentary.",
  "Approved internal documents and messages are made available through a searchable knowledge system.",
] as const;

const vetVisionWork = [
  {
    title: "AI product positioning",
    text: "Revised the presentation of the camera-based animal welfare product for equine and dairy customers.",
  },
  {
    title: "Customer onboarding portal",
    text: "Developed a branded portal covering initial customer setup and implementation.",
  },
  {
    title: "Operations planning",
    text: "Documented the internal process for farm mapping, camera placement and replacement planning.",
  },
  {
    title: "Internal AI implementation",
    text: "Supported defined internal AI uses and improvements to operating processes.",
  },
] as const;

const vetVisionResults = [
  { value: "40 to 95", label: "Approximate change in the recorded SEO score" },
  { value: "AI product", label: "Revised presentation for equine and dairy welfare monitoring" },
  { value: "Live portal", label: "Branded onboarding and operations workflows released" },
  { value: "Increase", label: "Reported website visibility, visitor numbers and enquiries" },
] as const;
const heroCoastImage = "/fistral-hero-ai.avif";

const definitionLetter = [
  "Most UK businesses already have access to AI tools.",
  "The relevant commercial issue is whether those tools improve a defined business process.",
  "Quilliam AI reviews recurring work, system dependencies, data, risk and staff responsibilities.",
  "Each engagement begins with a specific process and an accountable owner.",
  "We design and implement the agreed system, apply appropriate controls and test it against representative examples.",
  "Training, documentation and handover requirements are included in the agreed scope.",
  "The intended result is a controlled system that your team can operate and review.",
] as const;

function HomeJsonLd() {
  const serviceSchema = services.map((service) => ({
    "@type": "Service",
    "@id": `${siteConfig.url}/#${service.id}`,
    name: service.title,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "United Kingdom",
    description: service.description,
    serviceType: service.title,
  }));

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [...serviceSchema, faqSchema],
        }),
      }}
    />
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-paper/55" : "text-ink/50"
      }`}
    >
      {children}
    </p>
  );
}

function CtaRow({ location }: { location: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <TrackClick
        event="cta_clicked"
        properties={{ cta_type: "book_opportunity", location }}
      >
        <Button
          asChild
          size="lg"
          className="max-w-full whitespace-normal px-5 text-center text-sm font-bold leading-tight tracking-normal normal-case sm:whitespace-nowrap md:px-8"
        >
          <Link href="/book?intent=opportunity">
            Book Free AI Opportunity
            <ArrowRight size={18} />
          </Link>
        </Button>
      </TrackClick>
      <TrackClick
        event="cta_clicked"
        properties={{ cta_type: "book_training", location }}
      >
        <Button
          asChild
          variant="outline-light"
          size="lg"
          className="border-ink/25 bg-transparent text-sm font-bold tracking-normal text-ink normal-case hover:bg-ink hover:text-paper"
        >
          <Link href="/book?intent=training">Book Free AI Training</Link>
        </Button>
      </TrackClick>
    </div>
  );
}

function HeroCoastImage() {
  return (
    <aside className="rounded-card-xl relative min-h-[420px] overflow-hidden bg-ink shadow-[24px_24px_0_0_rgba(18,16,12,0.08)] md:min-h-[560px] lg:min-h-[620px]">
      <Image
        src={heroCoastImage}
        alt="Elevated view across Fistral Beach in Newquay, Cornwall"
        fill
        preload
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/16 to-paper/8" />
      <p className="absolute left-6 top-6 hidden border-0 bg-transparent p-0 text-xs font-bold uppercase tracking-[0.16em] text-paper shadow-none backdrop-blur-none sm:block">
        Fistral Beach, Newquay
      </p>
      <div className="absolute inset-x-5 bottom-5 rounded-card-lg border border-paper/16 bg-ink/54 p-5 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/58">
          Based in Cornwall. Available throughout the UK.
        </p>
        <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold leading-none tracking-tight">
          AI systems for defined business processes.
        </h2>
      </div>
    </aside>
  );
}

function MethodCard({
  step,
  index,
}: {
  step: (typeof bridgeSteps)[number];
  index: number;
}) {
  return (
    <article className="border-t border-ink/15 py-6">
      <div className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
        <span className="inline-block bg-[linear-gradient(135deg,rgba(23,114,69,0.44)_0%,rgba(23,114,69,0.92)_45%,rgba(34,197,94,0.5)_100%)] bg-clip-text text-6xl font-extrabold leading-none tracking-tight text-transparent opacity-95 drop-shadow-[0_16px_34px_rgba(23,114,69,0.18)] [text-shadow:0_1px_0_rgba(255,255,255,0.36)] md:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ink/64">
            {step.description}
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-signal-strong">
            Output: {step.output}
          </p>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = serviceIcons[service.id];

  return (
    <article
      id={service.id}
      className="rounded-card-lg relative scroll-mt-28 bg-white p-5 shadow-[0_0_0_1px_rgba(18,16,12,0.1)] transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="absolute right-5 top-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-ink text-paper">
        <Icon size={21} />
      </span>
      <div className="pr-16">
        <p className="min-h-[2rem] text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
          {service.kicker}
        </p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink">
          {service.title}
        </h3>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink/64 md:text-base">
        {service.description}
      </p>
      <ul className="mt-8 space-y-3">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-ink/70">
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-signal-strong" />
            {outcome}
          </li>
        ))}
      </ul>
    </article>
  );
}

function DefinitionLetter() {
  return (
    <section
      id="definition"
      className="scroll-mt-24 bg-paper px-6 py-20 text-ink md:py-28"
    >
      <div className="mx-auto grid max-w-[1220px] gap-12 border-y border-ink/10 py-14 md:grid-cols-[0.36fr_0.64fr] md:py-20">
        <FadeIn className="md:sticky md:top-32 md:self-start">
          <SectionLabel>Scope and approach</SectionLabel>
          <div className="mt-5 h-px w-40 bg-signal" />
          <p className="mt-5 max-w-[24ch] text-sm font-medium leading-relaxed text-ink/52">
            Based in Cornwall. Working throughout the UK and remotely.
          </p>
        </FadeIn>

        <div className="max-w-[720px] space-y-8 text-2xl font-medium leading-[1.38] text-ink md:space-y-10 md:text-4xl md:leading-[1.34]">
          {definitionLetter.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 0.06}>
              <p
                className={
                  index === 0
                    ? "text-3xl md:text-5xl"
                    : "max-w-[24ch] text-ink/82 md:max-w-[25ch]"
                }
              >
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-paper px-6 py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1220px] gap-10 border-t border-ink/10 pt-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Frequently asked questions.
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-ink">
                {faq.question}
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/15 text-signal-strong transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-ink/62 md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        path="/"
        name="Quilliam AI | AI consulting, training and implementation"
        description={siteConfig.description}
        datePublished="2026-04-11"
        dateModified="2026-08-13"
      />
      <HomeJsonLd />

      <section className="relative overflow-hidden bg-paper text-ink">
        <div className="absolute inset-x-0 top-0 h-1 bg-signal" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-12 pt-28 md:pt-32 lg:min-h-[82dvh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="animate-appear-up">
            <h1 className="max-w-[940px] text-[3rem] font-semibold leading-[0.94] tracking-tight text-balance md:text-[5.25rem] lg:text-[5.85rem]">
              AI consulting and implementation for UK businesses.
            </h1>
            <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-ink/68 md:text-xl">
              Quilliam AI assesses where AI can improve a defined process,
              implements the agreed system and trains the relevant staff to
              operate it.
            </p>
            <div className="mt-8">
              <CtaRow location="hero" />
            </div>
          </div>

          <div className="mt-10 animate-appear-up lg:mt-0 lg:-translate-y-6 lg:pl-4">
            <HeroCoastImage />
          </div>
        </div>
      </section>

      <TrustBar />

      <DefinitionLetter />

      <section id="problem" className="scroll-mt-24 bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
                Effective AI use requires a defined process, appropriate
                controls and accountable ownership.
              </h2>
            </div>
            <p className="max-w-[68ch] text-base leading-relaxed text-paper/68 md:text-lg">
              Many teams already have access to AI tools. Business value
              depends on selecting an appropriate use, setting measurable
              objectives and integrating the system into normal operations.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {problemCards.map((item) => (
              <article key={item.title} className="rounded-card-lg border border-paper/10 bg-paper/[0.035] p-5">
                <h3 className="text-xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-paper/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="scroll-mt-24 bg-paper px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Assessment, implementation and training.
            </h2>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-ink/65 md:text-lg">
              Each engagement has a defined scope, stated deliverables and an
              agreed handover to the responsible team.
            </p>
          </div>
          <div>
            {bridgeSteps.map((step, index) => (
              <MethodCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#ebe3d4] px-6 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Services for assessment, training and implementation.
              </h2>
            </div>
            <p className="max-w-[64ch] text-base leading-relaxed text-ink/64 md:text-lg">
              Opportunity analysis identifies a suitable first project. Team
              training establishes consistent use. Implementation delivers an
              agreed workflow, automation or internal tool.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "/ai-consultant-uk", label: "AI consultant UK" },
              { href: "/ai-automation-cornwall", label: "AI automation Cornwall" },
              { href: "/service-areas", label: "Where we work" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/55 px-4 py-2 text-sm font-semibold text-ink/68 transition-colors hover:border-signal/35 hover:text-signal-strong"
              >
                {item.label}
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="scroll-mt-24 bg-paper px-6 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionLabel>Case study</SectionLabel>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                AI product, onboarding and operations support for VetVision AI.
              </h2>
              <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-ink/66 md:text-lg">
                VetVision AI is a University of Nottingham spin-out. Its camera
                systems monitor animal welfare in equine and dairy environments.
              </p>
            </div>
            <div className="rounded-card-lg border border-ink/10 bg-white/85 p-6 text-ink shadow-[0_0_0_1px_rgba(18,16,12,0.08)]">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
                    Client
                  </p>
                  <Image
                    src="/logos/vetvision-ai.svg"
                    alt="VetVision AI"
                    width={193}
                    height={29}
                    className="mt-3 h-8 w-auto [filter:grayscale(1)_invert(1)]"
                  />
                  <p className="mt-3 text-sm font-medium text-ink/42">
                    University of Nottingham spin-out
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-[74ch] text-lg leading-relaxed text-ink/66">
                Quilliam AI was engaged to improve product presentation,
                customer onboarding and operating processes. The work included
                search content, a branded onboarding portal, farm mapping,
                camera setup and defined internal AI implementation support.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {vetVisionResults.map((result) => (
                  <div key={result.label} className="border-t border-ink/10 pt-4">
                    <p className="text-4xl font-semibold leading-none tracking-tight text-signal-strong">
                      {result.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/58">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {vetVisionWork.map((item) => (
              <article key={item.title} className="rounded-card-lg border border-ink/10 bg-white p-5">
                <ClipboardCheck size={21} className="text-signal-strong" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionLabel light>Use cases</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Examples of suitable AI-assisted processes.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {exampleWorkflows.map((item) => (
              <div
                key={item}
                className="rounded-card flex gap-3 border border-paper/10 bg-paper/[0.035] p-4 text-sm leading-relaxed text-paper/70"
              >
                <ClipboardCheck size={18} className="mt-0.5 shrink-0 text-signal" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Suitability</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Suitable AI projects share four characteristics.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/65">
              The process should recur, operate within defined limits, have an
              accountable owner and carry a measurable current cost.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {fitSignals.map((signal) => (
              <article key={signal.title} className="rounded-card-lg border border-ink/10 bg-white p-5">
                <ShieldCheck size={22} className="text-signal-strong" />
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink">
                  {signal.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/62">
                  {signal.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="scroll-mt-24 bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1220px] border-t border-paper/10 pt-14">
          <div className="max-w-[980px]">
            <SectionLabel light>Principal consultant</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Experience in business restructuring, software and AI delivery.
            </h2>
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
              </div>
            </div>
            <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-paper/68 md:text-lg">
              Quilliam AI is led by Levi Quilliam. His experience includes
              turnaround and restructuring at Deloitte, followed by technology
              roles at Halter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Wrench, text: "Process assessment and implementation" },
                { icon: FileText, text: "Training and documented handover" },
                { icon: MessageSquareText, text: "Direct access to the principal consultant" },
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
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="bg-signal px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
              Initial assessment
            </p>
            <h2 className="mt-5 max-w-[900px] text-5xl font-semibold leading-[0.96] tracking-tight text-balance md:text-7xl">
              Discuss one defined process and receive an initial recommendation.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              asChild
              size="lg"
              variant="outline-light"
              className="max-w-full whitespace-normal bg-ink px-6 text-center leading-tight tracking-normal text-paper normal-case hover:bg-ink/90 sm:whitespace-nowrap md:h-14"
            >
              <Link href="/book?intent=opportunity">
                Book Free AI Opportunity
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline-light"
              className="border-ink/30 text-ink hover:bg-ink/10 md:h-14"
            >
              <a
                href={getWhatsAppUrl(
                  "Hi Levi, I want to talk about AI for my business.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
