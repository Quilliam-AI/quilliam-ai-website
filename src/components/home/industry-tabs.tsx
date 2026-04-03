import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gymVertical } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

export function IndustrySection() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Built for your industry
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
              AI that speaks your language
            </h2>
            <p className="mt-4 text-base text-stone-500 leading-relaxed">
              We don't do one-size-fits-all. Every business is different. Here is
              how AI works for yours.
            </p>
          </div>
        </FadeIn>

        {/* K2 Gym case study — large featured card */}
        <FadeIn delay={0.15} className="mt-14">
          <div className="rounded-2xl overflow-hidden bg-white border border-stone-200/60">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Photo side */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/k2-gym-newquay/800/600"
                  alt="K2 Gym Newquay interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-stone-700">
                    {gymVertical.industry}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-950 leading-tight">
                  {gymVertical.hero.title}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {gymVertical.hero.description}
                </p>

                {/* Pain points */}
                <div className="mt-8 space-y-3">
                  {gymVertical.painPoints.slice(0, 3).map((point) => (
                    <div key={point.problem} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-stone-800">
                          {point.problem}
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {point.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild className="mt-8 rounded-full w-fit">
                  <Link href="/industries/gyms">
                    See the full gym playbook
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Testimonial bar */}
            <div className="border-t border-stone-200/60 bg-stone-50 px-8 md:px-12 lg:px-14 py-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex items-start gap-3 flex-1">
                  <Quote
                    size={20}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <blockquote className="text-sm text-stone-600 italic leading-relaxed">
                    {gymVertical.caseStudy.quote}
                  </blockquote>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-stone-900">
                      {gymVertical.caseStudy.owner}
                    </p>
                    <p className="text-xs text-stone-400">
                      {gymVertical.caseStudy.business},{" "}
                      {gymVertical.caseStudy.location}
                    </p>
                  </div>
                  <div className="hidden md:flex gap-6">
                    <div>
                      <span className="text-xl font-semibold font-mono text-emerald-600 tabular-nums">
                        {gymVertical.caseStudy.stats.hoursSaved}
                      </span>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                        hrs saved
                      </p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold font-mono text-emerald-600">
                        {gymVertical.caseStudy.stats.responseTime}
                      </span>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                        response
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon verticals */}
        <FadeIn delay={0.3} className="mt-6">
          <div className="flex gap-3 flex-wrap">
            {["Tradespeople", "Health & Beauty", "Professional Services"].map(
              (v) => (
                <span
                  key={v}
                  className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs text-stone-400 border border-stone-200/60"
                >
                  {v} ... coming soon
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
