import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";


export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="https://picsum.photos/seed/levi-portrait/600/800"
                alt="Levi Quilliam, founder of Quilliam AI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/20 to-transparent" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15} direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
                About Levi Quilliam
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
                Who is behind
                <br />
                Quilliam AI?
              </h2>
              <p className="mt-6 text-base text-stone-500 leading-relaxed max-w-[56ch]">
                Levi Quilliam is the founder of Quilliam AI, a UK AI agency
                that does education and implementation under one roof. An
                Economics graduate, ex-Deloitte in turnaround and
                restructuring, and eight-plus years shipping software — most
                recently building AI-first products at a startup serving the
                UK and Middle East. Levi founded Quilliam AI Ltd (Companies
                House 17151006) on 2026-04-11 to do two things really well:
                teach teams how to use AI properly, and build the
                automations, agents, and tools that save businesses hours
                every week. Every engagement starts with an AI Audit and
                is handoff-first — the deliverable is a skill or system your
                team actually owns, not a bespoke framework that locks you
                into needing us forever.
              </p>

              <Button asChild variant="outline-light" className="mt-8 rounded-full">
                <Link href="/about">
                  More About Levi
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
