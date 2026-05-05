import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  Cpu,
  Rocket,
  Waves,
  Mountain,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { NodeNetworkPattern } from "@/components/shared/pattern-overlay";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";
import {
  CompaniesHouseLink,
  IcoRegistrationLink,
} from "@/components/shared/legal-links";

export const metadata: Metadata = {
  title: "About Levi Quilliam — Founder of Quilliam AI",
  description:
    "Meet Levi Quilliam, founder of Quilliam AI Ltd. Economics graduate, ex-Deloitte UK tax, 8+ years shipping software. Based in Cornwall, outcome-led AI implementation for owner-led UK businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Levi Quilliam — Founder of Quilliam AI",
    description:
      "Economics graduate, ex-Deloitte UK tax, 8+ years shipping software. Outcome-led AI implementation for owner-led UK businesses.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About Levi Quilliam — Founder of Quilliam AI",
    description:
      "Economics graduate, ex-Deloitte, 8+ years shipping software. Outcome-led AI implementation for owner-led UK businesses.",
  },
};

const journey = [
  {
    icon: GraduationCap,
    period: "University",
    title: "Economics + Computer Science",
    description:
      "Bachelor's in Economics. Graduate Certificate in Computer Science. The combination taught me to think about systems — how businesses actually work, and how technology can make them work better.",
  },
  {
    icon: Building2,
    period: "Deloitte",
    title: "Turnaround & restructuring",
    description:
      "Years at Deloitte UK in tax — taking apart how owner-led businesses actually operate, figuring out what was structurally working and what wasn't. Spent enough time inside small firms across professional services, healthcare, and operating businesses to know how the work really flows, where the time leaks, and what moves the needle for an owner-operator with no spare bandwidth.",
  },
  {
    icon: Cpu,
    period: "AgriTech → SaaS",
    title: "Shipping AI-first products",
    description:
      "Moved into tech — first at Halter, the smart-collar AgriTech company that's since become a unicorn off the back of a Peter Thiel / Founders Fund-led round, then a software startup building AI-first products for businesses across the UK and Middle East. Eight years writing code, shipping products, watching AI reshape how operational work gets done from the inside.",
  },
  {
    icon: Rocket,
    period: "Now",
    title: "Quilliam AI Ltd",
    description: (
      <>
        Incorporated 2026-04-11. Companies House{" "}
        <CompaniesHouseLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors" />.
        ICO registered under{" "}
        <IcoRegistrationLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors" />.
        Outcome-led AI implementation for owner-led UK businesses — strategy,
        systems, and team training measured against real business outcomes.
        Productised, fixed-price, handoff-first. Open-source stack, no lock-in.
      </>
    ),
  },
];

const qualifications = [
  { key: "economics", label: "BSc Economics" },
  { key: "computer-science", label: "Grad. Cert. Computer Science" },
  { key: "shipping", label: "8+ Years Shipping Software" },
  { key: "deloitte", label: "Ex-Deloitte" },
  { key: "halter", label: "Ex-Halter (Thiel-backed unicorn)" },
  {
    key: "company",
    label: (
      <>
        Quilliam AI Ltd · Co. No.{" "}
        <CompaniesHouseLink className="underline decoration-emerald-700 underline-offset-2 hover:text-emerald-300 transition-colors">
          {siteConfig.companyNumber}
        </CompaniesHouseLink>
      </>
    ),
  },
  {
    key: "ico",
    label: (
      <>
        ICO registration{" "}
        <IcoRegistrationLink className="underline decoration-emerald-700 underline-offset-2 hover:text-emerald-300 transition-colors">
          {siteConfig.icoRegistrationNumber}
        </IcoRegistrationLink>
      </>
    ),
  },
];

const cornwallFacts = [
  { icon: Waves, label: "5 min from the best surf in the UK" },
  { icon: Mountain, label: "Climbing, hiking, coasteering" },
  { icon: MapPin, label: "Cornwall-based, working UK-wide + remote" },
];

export default function AboutPage() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Levi, I saw your about page and I'd like to map the first AI system worth building for my business.",
  );

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <WebPageJsonLd
        path="/about"
        name="About Levi Quilliam — Founder of Quilliam AI"
        description="Levi Quilliam is the founder of Quilliam AI Ltd. Economics graduate, ex-Deloitte UK tax, 8+ years shipping software. Based in Cornwall, outcome-led AI implementation for owner-led UK businesses."
        datePublished="2026-04-11"
        dateModified="2026-05-01"
      />

      {/* ── Hero — asymmetric split ── */}
      <section className="relative overflow-hidden bg-stone-950">
        <NodeNetworkPattern className="text-emerald-400" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: content */}
            <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-28">
              <FadeIn delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-6">
                  About the founder
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
                  Outcome-led AI
                  <span className="block text-emerald-400">
                    implementation.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-6">
                <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[52ch]">
                  I&apos;m Levi Quilliam. Eight-plus years shipping software,
                  ex-Deloitte UK tax, currently building AI-first products
                  at a startup. I founded Quilliam AI to help owner-led UK
                  businesses install AI systems that save time, reduce admin,
                  and improve how the business runs. The same human maps the
                  outcome, builds the system, and trains the team.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="/book">
                      Map my first AI system
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </FadeIn>

              {/* Quick credentials */}
              <FadeIn delay={0.5} className="mt-10">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div>
                    <span className="block text-2xl font-semibold text-white font-mono tabular-nums">
                      8+
                    </span>
                    <span className="text-stone-500 text-xs uppercase tracking-widest">
                      years shipping software
                    </span>
                  </div>
                  <div className="w-px h-10 bg-stone-800 hidden sm:block" />
                  <div>
                    <span className="block text-2xl font-semibold text-white">
                      Ex-Deloitte
                    </span>
                    <span className="text-stone-500 text-xs uppercase tracking-widest">
                      turnaround &amp; restructuring
                    </span>
                  </div>
                  <div className="w-px h-10 bg-stone-800 hidden sm:block" />
                  <div>
                    <span className="block text-2xl font-semibold text-white">
                      Cornwall
                    </span>
                    <span className="text-stone-500 text-xs uppercase tracking-widest">
                      based, UK + remote
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: photo — desktop */}
            <div className="relative hidden lg:block">
              <Image
                src={siteConfig.founderImage}
                alt="Levi Quilliam, founder of Quilliam AI"
                fill
                className="object-cover object-top"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
            </div>

            {/* Photo — mobile */}
            <div className="relative h-72 sm:h-80 lg:hidden">
              <Image
                src={siteConfig.founderImage}
                alt="Levi Quilliam, founder of Quilliam AI"
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin story — full-width narrative ── */}
      <section className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              The short version
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              Why I started Quilliam AI
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 space-y-6">
            <p className="text-base text-stone-400 leading-relaxed">
              Studied economics. Worked at Deloitte UK in tax — taking apart
              how owner-led businesses actually operate, figuring out what
              was structurally working and what wasn&apos;t. Spent enough
              time inside small firms across professional services,
              healthcare, and operating businesses to know exactly where
              the hours leak: enquiries sitting in an inbox, decisions
              waiting on the owner, repetitive admin nobody enjoys, lapsed
              customers no one chased. That time gave me two things: a
              tribe of owner-operators I understand, and a very clear view
              of the work AI should be doing so owners don&apos;t have to.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              I moved into tech because I&apos;d always been passionate about
              it — I&apos;d been coding for years on the side. Eventually that
              became the main thing. I worked at Halter — the smart-collar
              AgriTech company that&apos;s since crossed unicorn status off
              the back of a Peter Thiel / Founders Fund-led round — then
              joined a software startup where we build AI-first products for
              businesses across the UK and Middle East. I see every day how
              fast this technology is moving, and how much of the operational
              and decision work that eats an owner&apos;s week is now
              automatable — with a human approval gate.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              The gap I kept seeing:{" "}
              <span className="text-white font-medium">
                owner-led businesses know AI matters, but every AI pitch they
                get is either snake oil, or a no-code chatbot bolted onto a
                generic strategy deck that nobody actually adopts.
              </span>{" "}
              The actual opportunity is more practical: pick one business
              outcome, build the AI system that could move it, train the team,
              then measure whether it paid back. That&apos;s Quilliam AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Journey timeline ── */}
      <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              The journey
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              From consulting to shipping
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((step, i) => (
              <FadeIn key={step.period} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-stone-950 border border-stone-800/60 h-full transition-colors hover:border-stone-700">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/50 flex items-center justify-center transition-colors group-hover:border-emerald-800/60">
                      <step.icon
                        size={18}
                        className="text-emerald-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest">
                      {step.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I believe — conviction section ── */}
      <section className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                  What I believe
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
                  Productised, fixed-price,
                  <span className="block text-emerald-400 mt-1">
                    handoff-first. No exceptions.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="text-base text-stone-400 leading-relaxed">
                  Every paid build has a named scope, fixed setup fee, and
                  success metric agreed in writing before work begins. No vague
                  transformation theatre. Fixed-price productised offers keep
                  incentives aligned: I get paid to ship useful systems, not to
                  bill hours.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  Every engagement is built for handoff. Industry-standard
                  open-source tools (Next.js, Sanity, n8n). Documented runbooks.
                  Full source and CMS in your name. No bespoke frameworks only
                  I can maintain. No lock-in. If I vanish tomorrow, another
                  agency can pick it up in an afternoon.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  And: fix before flourish. Broken contact links, stale schema,
                  404s — fixed before anything glossy goes on top. Polishing a
                  landing page that has a 404 on the pricing link is a waste of
                  everyone&apos;s time.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How I work — methodology ── */}
      <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              How I work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              Business first. Technology second.
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-base text-stone-400 leading-relaxed">
                My time at Deloitte taught me something most tech people
                never learn: understand the business before you touch the
                technology. I don&apos;t show up with a product to sell. I
                show up with questions: what does a missed enquiry actually
                cost you? Which of your clients drifted last quarter — and
                why? Where is the time going? Once that&apos;s clear, the
                technology part is straightforward.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base text-stone-400 leading-relaxed">
                Engagements are productised and fixed-price. Most first
                implementation sprints sit between £3k and £10k depending on
                scope and integrations. Larger system builds are quoted as one
                named deliverable. After launch, some clients add monthly
                optimisation so the system keeps improving against the agreed
                metric.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-stone-400 leading-relaxed">
                I work directly on every engagement. You won&apos;t get
                handed off to a junior team member. You won&apos;t get a
                project manager who emails you updates. The same human sets
                the strategy, builds the systems, and trains the team — and
                genuinely cares whether your business actually adopts what
                we build.
              </p>
            </FadeIn>
          </div>

          {/* Qualifications strip */}
          <FadeIn delay={0.25} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {qualifications.map((qual) => (
                <span
                  key={qual.key}
                  className="rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40"
                >
                  {qual.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Cornwall — personal touch ── */}
      <section className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                  Why Cornwall
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
                  Five minutes from some of the best surf in the UK.
                </h2>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-6">
                <p className="text-base text-stone-400 leading-relaxed max-w-[56ch]">
                  I chose Cornwall because I love the outdoors — surfing,
                  climbing, hiking. Life is better when your morning commute
                  involves checking the swell forecast. Quilliam AI works
                  remotely with clients across the UK, with on-site visits
                  where it genuinely helps — kick-offs, training, Handover
                  Day.
                </p>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-6">
                <p className="text-base text-stone-400 leading-relaxed max-w-[56ch]">
                  If you run an owner-led UK business and you know AI is
                  going to reshape your work this year, let&apos;s talk. The
                  worst that happens is you walk away with a clearer view of
                  the first system worth building and the metric it should
                  move.
                </p>
              </FadeIn>

              {/* Cornwall fact chips */}
              <FadeIn delay={0.2} className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {cornwallFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center gap-2 text-sm text-stone-400"
                    >
                      <fact.icon
                        size={16}
                        className="text-emerald-400 shrink-0"
                        strokeWidth={1.5}
                      />
                      {fact.label}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2} direction="left">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                    alt="Cornwall coastline — home of Quilliam AI"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/30 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
              Map the first system.
              <br />
              Decide after.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5">
            <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[52ch] mx-auto">
              Start with an AI Opportunity Mapping Call. We look at what eats
              your week, find the first system worth building, and agree what
              would need to improve before any paid implementation begins.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/book">
                  Map my first AI system
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-8">
            <p className="text-xs text-stone-500">
              Quilliam AI Ltd · Company No.{" "}
              <CompaniesHouseLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors">
                {siteConfig.companyNumber}
              </CompaniesHouseLink>{" "}
              · ICO{" "}
              <IcoRegistrationLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors">
                {siteConfig.icoRegistrationNumber}
              </IcoRegistrationLink>{" "}
              · Cornwall, UK
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Citable paragraph for AI crawlers — sr-only */}
      <p className="sr-only">
        Levi Quilliam is the founder of Quilliam AI Ltd, a UK private limited
        company incorporated on 2026-04-11 (Companies House number{" "}
        {siteConfig.companyNumber}).
        Quilliam AI delivers outcome-led AI implementation for owner-led UK
        businesses — strategy, systems, and team training tied to measurable
        business outcomes. The implementation flow maps the opportunity, agrees
        the baseline, builds the first system, then trains and optimises
        against the metric. First implementation sprints usually sit between
        £3,000 and £10,000 depending on scope and integrations. Larger system
        builds are quoted as one named fixed-fee deliverable. Levi holds a
        Bachelor&apos;s degree in Economics and a
        Graduate Certificate in Computer Science. He has over eight years of
        programming experience, including work at Deloitte in UK tax, Halter
        (a smart-collar AgriTech company that has since reached unicorn
        valuation following a Peter Thiel / Founders Fund-led round), and a
        current role at a software startup building AI-first products for
        businesses across the UK and Middle East.
        Quilliam AI is productised, fixed-price, and handoff-first by
        default: industry-standard open-source tools (Next.js, Sanity, n8n,
        Claude), full documentation, and no lock-in.
      </p>
    </>
  );
}
