import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { siteConfig } from "@/lib/content";
import { CompaniesHouseLink } from "@/components/shared/legal-links";

export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[820px] mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              About Levi Quilliam
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
              Who&apos;s building Quilliam AI?
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <figure className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10">
            <blockquote className="text-lg md:text-xl text-stone-800 leading-relaxed tracking-tight">
              &ldquo;I built Quilliam AI to be the partner I wish my clients had —
              one human who maps the outcome, builds the system, and trains the
              team. Same person, start to finish. Open stack, fixed price, no
              lock-in.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-white shadow-sm flex-shrink-0">
                <Image
                  src={siteConfig.founderImage}
                  alt="Levi Quilliam, founder of Quilliam AI"
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-950">Levi Quilliam</p>
                <p className="text-xs text-stone-500">Founder, Quilliam AI</p>
              </div>
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-base text-stone-500 leading-relaxed max-w-[64ch] mx-auto text-center">
            Economics graduate, ex-Deloitte (UK tax), eight-plus years shipping
            software, most recently building AI-first products for UK and
            Middle East businesses. Founded Quilliam AI Ltd, registered at
            Companies House as company number{" "}
            <CompaniesHouseLink className="underline decoration-stone-300 underline-offset-2 hover:text-stone-900 transition-colors" />{" "}
            and incorporated on 2026-04-11 to deliver outcome-led AI
            implementation for owner-led businesses — strategy, systems, and
            team training measured against real business outcomes.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline-light">
              <Link href="/about">
                More about Levi
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
