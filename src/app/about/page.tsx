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

export const metadata: Metadata = {
  title: "About Levi Quilliam — Founder of Quilliam Digital",
  description:
    "Meet Levi Quilliam, founder of Quilliam Digital. Economics graduate, ex-Deloitte, 8+ years building software. Based in Cornwall, helping UK small businesses use AI to save time and win more customers.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Levi Quilliam — Founder of Quilliam Digital",
    description:
      "Economics graduate, ex-Deloitte, 8+ years building software. Based in Cornwall, helping UK small businesses use AI to save time and win more customers.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About Levi Quilliam — Founder of Quilliam Digital",
    description:
      "Economics graduate, ex-Deloitte, 8+ years building software. Based in Cornwall, helping UK small businesses use AI to save time and win more customers.",
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
      "Spent years at Deloitte taking apart businesses that were broken and figuring out how to fix them. Learned what makes a business tick, where the waste hides, and what actually moves the needle.",
  },
  {
    icon: Cpu,
    period: "AgriTech \u2192 Software Startup",
    title: "Building with AI, daily",
    description:
      "Moved into tech — first at an AgriTech company, now at a software startup building AI-first products for businesses across the UK and Middle East. Eight years of writing code, shipping products, and watching AI reshape the industry from the inside.",
  },
  {
    icon: Rocket,
    period: "Now",
    title: "Quilliam Digital",
    description:
      "Started after a gym owner said: \"I see AI everywhere — agents, orchestration, automation — but I cannot connect the dots to my actual business.\" That stuck. Now I help small business owners make that connection.",
  },
];

const cornwallFacts = [
  { icon: Waves, label: "5 min from the best surf in the UK" },
  { icon: Mountain, label: "Climbing, hiking, coasteering" },
  { icon: MapPin, label: "Cornwall-based, serving UK-wide" },
];

export default function AboutPage() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Levi, I saw your about page and I'd like to chat about AI for my business."
  );

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <WebPageJsonLd
        path="/about"
        name="About Levi Quilliam — Founder of Quilliam Digital"
        description="Levi Quilliam is the founder of Quilliam Digital. Economics graduate, ex-Deloitte, 8+ years building software. Based in Cornwall, helping UK small businesses use AI to save time and win more customers."
        datePublished="2026-04-05"
        dateModified="2026-04-05"
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
                  I help small businesses
                  <span className="block text-emerald-400">
                    stop overthinking AI.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-6">
                <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[52ch]">
                  I&apos;m Levi Quilliam. I&apos;ve spent 8+ years building
                  software and I&apos;m currently building AI-first products at
                  a startup. I founded Quilliam Digital because too many small
                  business owners are being left behind by the AI wave — not
                  because they&apos;re not smart enough, but because nobody is
                  showing them how it applies to their day-to-day.
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
                      years in software
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
                      based, UK-wide
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: photo — desktop */}
            <div className="relative hidden lg:block">
              <Image
                src="https://picsum.photos/seed/levi-about-hero/800/1000"
                alt="Levi Quilliam, founder of Quilliam Digital, in Cornwall"
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
                alt="Levi Quilliam, founder of Quilliam Digital"
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
              Why I started this
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 space-y-6">
            <p className="text-base text-stone-400 leading-relaxed">
              I grew up on a farm in the UK. Studied economics at university.
              Worked at Deloitte in turnaround and restructuring — taking
              businesses that were struggling and figuring out what needed to
              change. That gave me a deep understanding of how businesses
              actually operate, where the waste is, and what makes the
              difference between surviving and growing.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              I moved into tech because I&apos;d always been passionate about
              it — I&apos;d been coding for years on the side, building
              websites, apps, and automations. Eventually that became the main
              thing. I worked at an AgriTech company, then joined a software
              startup where we build AI-first products for businesses across the
              UK and the Middle East. I see every day how fast this technology
              is moving.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              Then I had a conversation that changed everything. A gym owner —
              sharp bloke, runs a great business — said to me:{" "}
              <span className="text-white font-medium">
                &ldquo;I see AI everywhere. Everyone is talking about agents,
                orchestration, automation. But I just cannot connect the dots and
                figure out how this applies to my actual business.&rdquo;
              </span>
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              That is a problem I can fix. And that&apos;s Quilliam Digital.
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
              From farm to founder
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
                  Most small businesses have already tried AI.
                  <span className="block text-emerald-400 mt-1">
                    They just tried it wrong.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="text-base text-stone-400 leading-relaxed">
                  I hear this constantly:{" "}
                  <span className="text-white font-medium">
                    &ldquo;I tried ChatGPT and it got things wrong, so I stopped
                    using it.&rdquo;
                  </span>{" "}
                  It blows my mind every time. That is like buying a van and
                  deciding transport does not work because you drove it into a
                  ditch on day one.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  AI has transformed the software industry in ways nobody
                  expected. Every day at my day job I see new capabilities that
                  genuinely shock me. But most small business owners are still
                  stuck on the &ldquo;it got things wrong&rdquo; moment from
                  2024 — and nobody is bridging that gap for them.
                </p>
                <p className="text-base text-stone-400 leading-relaxed">
                  It is only a matter of time before AI works its way into
                  every business. The ones who figure it out early will have a
                  massive advantage. I want to help small business owners be
                  those ones — not because they need to become technical, but
                  because they deserve a guide who actually understands both
                  the technology and the business.
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
                My time at Deloitte taught me something that most tech people
                never learn: you have to understand the business before you
                touch the technology. I do not show up with a product to sell.
                I show up with questions to ask.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base text-stone-400 leading-relaxed">
                Where are you spending hours on tasks a machine should handle?
                Where are you losing customers because you cannot respond fast
                enough? Where is the bottleneck that is stopping you from
                growing? Once I understand that, the technology part is
                straightforward.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-stone-400 leading-relaxed">
                I work directly with every client. You will not get handed off
                to a junior team member. You will not get a strategy document
                and a handshake. You will get practical, working automations
                and training that your team can actually use — built by
                someone who writes code for a living and genuinely loves
                watching businesses grow.
              </p>
            </FadeIn>
          </div>

          {/* Qualifications strip */}
          <FadeIn delay={0.25} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {[
                "BSc Economics",
                "Grad. Cert. Computer Science",
                "8+ Years Programming",
                "Ex-Deloitte",
                "BNI Member",
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
                  involves checking the swell forecast. But Cornwall also has a
                  brilliant small business community, and being here means I
                  can work face-to-face with local businesses while serving
                  clients UK-wide remotely.
                </p>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-6">
                <p className="text-base text-stone-400 leading-relaxed max-w-[56ch]">
                  Clients say I always have a big grin on my face. I will take
                  that. I genuinely love this work and I love seeing people
                  grow. If you are a small business owner wondering whether AI
                  is worth the hype — let&apos;s talk. The AI Audit is free.
                  The worst that happens is you walk away with a clear idea of
                  what is possible.
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
                    alt="Cornwall coastline — home of Quilliam Digital"
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
              Book a free AI Audit. I will look at how your business runs and
              show you the highest-impact opportunity. No jargon. No
              commitment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-10 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
              >
                <Link href="/book">
                  Book Your Free AI Audit
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-10 text-base text-white"
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
          <FadeIn delay={0.3} className="mt-8">
            <p className="text-xs text-stone-500">
              Based in Cornwall. Serving small businesses across the UK.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Citable paragraph for AI crawlers — sr-only */}
      <p className="sr-only">
        Levi Quilliam is the founder of Quilliam Digital, an AI automation
        agency based in Cornwall, UK. Levi holds a Bachelor&apos;s degree in
        Economics and a Graduate Certificate in Computer Science. He has over
        eight years of programming experience, including work at Deloitte in
        turnaround and restructuring, an AgriTech company, and a current role
        at a software startup building AI-first products for businesses across
        the UK and Middle East. Levi founded Quilliam Digital to help UK small
        businesses with 1 to 50 employees understand and implement practical
        AI solutions — from hands-on AI training workshops to custom workflow
        automation and complete digital services. He works directly with every
        client. Automation packages start from five hundred pounds, and every
        engagement begins with a free AI Audit.
      </p>
    </>
  );
}
