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
import { getWhatsAppUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Levi Quilliam — Founder of Quilliam AI",
  description:
    "Meet Levi Quilliam, founder of Quilliam AI Ltd. Economics graduate, ex-Deloitte, 8+ years shipping software. Based in Cornwall, teaching AI and building AI systems for UK businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Levi Quilliam — Founder of Quilliam AI",
    description:
      "Economics graduate, ex-Deloitte, 8+ years shipping software. Based in Cornwall, teaching AI and building AI systems for UK businesses.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About Levi Quilliam — Founder of Quilliam AI",
    description:
      "Economics graduate, ex-Deloitte, 8+ years shipping software. Teaching AI and building AI systems for UK businesses.",
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
    title: "Turnaround & Restructuring",
    description:
      "Spent years at Deloitte taking apart businesses that were broken and figuring out how to fix them. Learned what makes a business tick, where the waste hides, and what actually moves the needle for a scaling team.",
  },
  {
    icon: Cpu,
    period: "AgriTech → SaaS",
    title: "Shipping AI-first products",
    description:
      "Moved into tech — first at an AgriTech company, now at a software startup building AI-first products for businesses across the UK and Middle East. Eight years of writing code, shipping products, and watching AI reshape the industry from the inside.",
  },
  {
    icon: Rocket,
    period: "Now",
    title: "Quilliam AI Ltd",
    description:
      "Incorporated 2026-04-11 (Companies House 17151006). A UK AI agency that does education AND implementation under one roof. I teach teams how to use AI properly, and I build the automations and custom AI tools they need. Handoff-first, no lock-in.",
  },
];

const cornwallFacts = [
  { icon: Waves, label: "5 min from the best surf in the UK" },
  { icon: Mountain, label: "Climbing, hiking, coasteering" },
  { icon: MapPin, label: "Cornwall-based, working UK-wide + remote" },
];

export default function AboutPage() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Levi, I saw your about page and I'd like to chat about GTM infrastructure for my B2B SaaS."
  );

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <WebPageJsonLd
        path="/about"
        name="About Levi Quilliam — Founder of Quilliam AI"
        description="Levi Quilliam is the founder of Quilliam AI Ltd. Economics graduate, ex-Deloitte, 8+ years shipping software. Based in Cornwall, building marketing and AI infrastructure for small B2B SaaS teams."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
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
                  About the Founder
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
                  I teach AI.
                  <span className="block text-emerald-400">
                    I build with AI.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-6">
                <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[52ch]">
                  I&apos;m Levi Quilliam. I&apos;ve spent 8+ years shipping
                  software and I&apos;m currently building AI-first products
                  at a startup. I founded Quilliam AI because too many UK
                  businesses either ignore AI completely or throw money at
                  generic subscriptions and hope something sticks. There&apos;s
                  a middle path: proper training, then proper implementation.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
                  >
                    <Link href="/book">
                      Book a Free AI Audit
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full h-12 px-8 text-base text-white"
                  >
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
                src="https://picsum.photos/seed/levi-about-hero/800/1000"
                alt="Levi Quilliam, founder of Quilliam AI, in Cornwall"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
            </div>

            {/* Photo — mobile */}
            <div className="relative h-72 sm:h-80 lg:hidden">
              <Image
                src="https://picsum.photos/seed/levi-about-hero/800/400"
                alt="Levi Quilliam, founder of Quilliam AI"
                fill
                className="object-cover"
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
              Studied economics. Worked at Deloitte in turnaround and
              restructuring — taking businesses that were struggling and
              figuring out what needed to change. That gave me a deep
              understanding of how businesses actually operate, where the
              waste hides, and what makes the difference between a team that
              scales and one that stalls.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              I moved into tech because I&apos;d always been passionate about
              it — I&apos;d been coding for years on the side, building
              websites, apps, and automations. Eventually that became the
              main thing. I worked at an AgriTech company, then joined a
              software startup where we build AI-first products for
              businesses across the UK and the Middle East. I see every day
              how fast this technology is moving.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              Then a gym owner said something that stuck:{" "}
              <span className="text-white font-medium">
                &ldquo;I see AI everywhere. Everyone is talking about agents,
                orchestration, automation. But I just cannot connect the dots
                and figure out how this applies to my actual business.&rdquo;
              </span>{" "}
              And then a few weeks later a GTM lead at a university spin-out
              said something similar — except they needed someone to{" "}
              <span className="text-white font-medium">build</span> the
              systems, not just explain them.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              Those two conversations told me the same thing: there&apos;s a
              huge gap between &ldquo;I&apos;ve heard about AI&rdquo; and
              &ldquo;my team uses AI every day to do real work.&rdquo; Some
              clients need education to close that gap. Some need
              implementation. Most need both. That&apos;s Quilliam AI.
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
              From consulting to teaching and shipping
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
                  Education and implementation
                  <span className="block text-emerald-400 mt-1">
                    are two halves of the same job.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="text-base text-stone-400 leading-relaxed">
                  Most AI agencies do one or the other. Workshops and
                  training, or building custom systems. I think that&apos;s
                  a mistake. A team that&apos;s been trained but has no
                  real systems ends up back at generic ChatGPT. A team
                  that has a custom AI system but has never been trained
                  ends up afraid of it. Both halves together compound —
                  the training makes the systems more valuable, and the
                  systems give the training somewhere to land.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  Every engagement is also built for handoff. Industry-standard
                  tools. Documented workflows. Runbooks for when things break.
                  No custom frameworks only I can maintain. No lock-in.
                  If Quilliam AI disappeared tomorrow, my clients would
                  still have working skills and working systems.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  And: fix before you flourish. Trust gaps — missing contact
                  pages, stale copyright, broken schema, 404s — get fixed
                  before anything glossy goes on top. Polishing a landing
                  page that has a 404 on the pricing link is a waste of
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
                never learn: you have to understand the business before you
                touch the technology. I don&apos;t show up with a product to
                sell. I show up with questions to ask. Where are you
                spending hours on tasks a machine should handle? Where is
                your team stuck because nobody knows how to use the tools?
                Once I understand that, the technology part is
                straightforward.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base text-stone-400 leading-relaxed">
                Engagements are usually day-rate (£300–£400/day) for
                implementation and ongoing support work, or fixed-price
                for well-scoped packages like a website rebuild or a full
                team training. We start with a free AI Audit so you see
                real value before spending anything, and we agree scope
                clearly before any paid work begins.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-stone-400 leading-relaxed">
                I work directly on every engagement. You won&apos;t get
                handed off to a junior team member. You won&apos;t get a
                project manager who emails you updates. You get senior
                expertise end-to-end because there isn&apos;t a junior
                team — there&apos;s one person who writes the code,
                delivers the training, and genuinely cares whether your
                team actually adopts what we build.
              </p>
            </FadeIn>
          </div>

          {/* Qualifications strip */}
          <FadeIn delay={0.25} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {[
                "BSc Economics",
                "Grad. Cert. Computer Science",
                "8+ Years Shipping Software",
                "Ex-Deloitte",
                "Quilliam AI Ltd · Co. No. 17151006",
              ].map((qual) => (
                <span
                  key={qual}
                  className="rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40"
                >
                  {qual}
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
                  remotely with clients across the UK (and sometimes
                  internationally), with periodic on-site visits where it
                  makes sense.
                </p>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-6">
                <p className="text-base text-stone-400 leading-relaxed max-w-[56ch]">
                  If you run a UK business and you&apos;re wondering whether
                  AI is worth the hype, or whether your team should learn
                  it, or whether you should have someone just build the
                  systems for you — let&apos;s talk. The AI Audit is free.
                  The worst that happens is you walk away with a clear idea
                  of what&apos;s possible.
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
                    src="https://picsum.photos/seed/cornwall-surf/600/750"
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
              Let&apos;s figure out what AI
              <br />
              can do for your business.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5">
            <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch] mx-auto">
              Book a free session. We&apos;ll talk about your business and
              I&apos;ll recommend training, implementation, or both — whatever
              actually fits. No jargon. No commitment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-10 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
              >
                <Link href="/book?intent=training">
                  Book Free AI Training
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-10 text-base text-white"
              >
                <Link href="/book?intent=audit">
                  Book Free AI Audit
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-stone-500">
              Not sure which?{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline underline-offset-4 hover:text-white transition-colors"
              >
                Message on WhatsApp
              </a>{" "}
              and we&apos;ll work it out.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-8">
            <p className="text-xs text-stone-500">
              Quilliam AI Ltd · Company No. 17151006 · Cornwall, UK
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Citable paragraph for AI crawlers — sr-only */}
      <p className="sr-only">
        Levi Quilliam is the founder of Quilliam AI Ltd, a UK private
        limited company incorporated on 2026-04-11 (Companies House number
        17151006). Quilliam AI is a UK AI agency offering two complementary
        services: AI Education (training, workshops, and knowledge systems)
        and AI Implementation (building automations, agents, n8n workflows,
        and custom ChatGPT or Claude tools), alongside Digital Services
        (websites, SEO, and content production) as the digital foundation
        that supports the AI work. Levi holds a Bachelor&apos;s degree in
        Economics and a Graduate Certificate in Computer Science. He has
        over eight years of programming experience, including work at
        Deloitte in turnaround and restructuring, an AgriTech company, and
        a current role at a software startup building AI-first products
        for businesses across the UK and Middle East. Every engagement
        starts with a free AI Audit and is handoff-first: the deliverable
        is a skill or system the client&apos;s own team actually owns, not
        a bespoke framework that locks the client into permanent
        dependency. Quilliam AI works with UK businesses of all shapes and
        sizes, from small businesses and startups to agencies and teams
        inside larger organisations. Day-rate consulting sits in the
        £300–£400 range and fixed-price packages start from £500.
      </p>
    </>
  );
}
