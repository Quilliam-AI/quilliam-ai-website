"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitPattern } from "@/components/shared/pattern-overlay";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950">
      <CircuitPattern className="text-emerald-400" />
      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
          {/* Left: content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-20 lg:pt-0 lg:pb-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40 w-fit">
              <Zap size={13} className="fill-emerald-400 text-emerald-400" />
              Free AI Impact Sprint
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-tighter leading-[1.08] text-white">
              Your Business Runs
              <br />
              on Your Time.
              <span className="block text-emerald-400 mt-2">
                We Give You Hours Back.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch]">
              We help UK small businesses use AI to automate the boring stuff,
              win more customers, and stop getting left behind. No jargon. No
              fluff. Just results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
              >
                <Link href="/contact">
                  Book Your Free Sprint
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-8 text-base border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white"
              >
                <Link href="/quiz">Take the AI Quiz</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <span className="block text-2xl font-semibold text-white font-mono tabular-nums">
                  10+
                </span>
                <span className="text-stone-500">hours saved weekly</span>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <span className="block text-2xl font-semibold text-white font-mono tabular-nums">
                  {"<"}2m
                </span>
                <span className="text-stone-500">response time</span>
              </div>
              <div className="w-px h-10 bg-stone-800 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="block text-2xl font-semibold text-white">
                  Cornwall
                </span>
                <span className="text-stone-500">based, UK-wide</span>
              </div>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://picsum.photos/seed/quilliam-hero/800/1000"
              alt="Business owner working with AI tools on laptop in a modern workspace"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            {/* Gradient fade into the dark left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-12 left-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] px-6 py-4">
              <p className="text-xs text-stone-400 uppercase tracking-widest">
                K2 Gym, Newquay
              </p>
              <p className="mt-1 text-2xl font-semibold font-mono text-white">
                12+ hrs
              </p>
              <p className="text-sm text-emerald-400">saved every week</p>
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="relative h-64 lg:hidden">
            <Image
              src="https://picsum.photos/seed/quilliam-hero/800/400"
              alt="Business owner working with AI tools"
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
