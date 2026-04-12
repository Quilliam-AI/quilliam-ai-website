import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";
import { getWhatsAppUrl } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950">
      <CircuitPattern className="text-emerald-400" />

      {/* Atmospheric emerald glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
          {/* Left: content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-16 lg:pt-28 lg:pb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40 w-fit">
              <Zap size={13} className="fill-emerald-400 text-emerald-400" />
              AI Education + Implementation
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tighter leading-[1.08] text-white">
              We teach AI.
              <br />
              <span className="text-emerald-400">
                We build with AI.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-stone-400 leading-relaxed max-w-[56ch]">
              A UK AI agency. We train your team to use AI properly in their
              daily work, and we build the automations, agents, and tools that
              save you hours every week. Do one. Do the other. Do both.
            </p>

            <FadeIn delay={0.45} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
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
                  className="rounded-full h-12 px-8 text-base text-white"
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
                  href={getWhatsAppUrl("Hi Levi, I'd like to chat about whether training or implementation is right for my team.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 underline underline-offset-4 hover:text-white transition-colors"
                >
                  Message on WhatsApp
                </a>{" "}
                and we&apos;ll help you work it out.
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.55} className="mt-10">
              <div className="flex items-center gap-10">
                <div>
                  <span className="block text-3xl font-semibold text-white font-mono tabular-nums">
                    2
                  </span>
                  <span className="text-stone-500 text-xs uppercase tracking-widest">
                    sides, one agency
                  </span>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <span className="block text-3xl font-semibold text-white font-mono tabular-nums">
                    100%
                  </span>
                  <span className="text-stone-500 text-xs uppercase tracking-widest">
                    handoff-first
                  </span>
                </div>
                <div className="w-px h-12 bg-stone-800 hidden sm:block" />
                <div className="hidden sm:block">
                  <span className="block text-3xl font-semibold text-white">
                    Cornwall
                  </span>
                  <span className="text-stone-500 text-xs uppercase tracking-widest">
                    working UK &amp; remote
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: hero image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://picsum.photos/seed/quilliam-ai-hero/800/1000"
              alt="AI education and implementation session in progress"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            {/* Gradient fade into the dark left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

            {/* Floating stat card — liquid glass */}
            <FadeIn delay={0.6} direction="left" className="absolute bottom-12 left-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] px-6 py-4">
                <p className="text-xs text-stone-400 uppercase tracking-widest">
                  Two Halves of One Job
                </p>
                <p className="mt-1 text-2xl font-semibold font-mono text-white">
                  Teach + Build
                </p>
                <p className="text-sm text-emerald-400">under one agency</p>
              </div>
            </FadeIn>
          </div>

          {/* Mobile hero image */}
          <div className="relative h-64 lg:hidden">
            <Image
              src="https://picsum.photos/seed/quilliam-ai-hero/800/400"
              alt="AI education and implementation session in progress"
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
  );
}
