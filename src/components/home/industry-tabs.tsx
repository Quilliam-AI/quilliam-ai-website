import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredEngagement } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

export function IndustrySection() {
  return (
    <section id="example" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              {featuredEngagement.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
              What does a Quilliam AI engagement look like in practice?
            </h2>
            <p className="mt-4 text-base text-stone-500 leading-relaxed">
              Most engagements are smaller than this — clients usually pick one
              service, not three. But VetVision AI shows what&apos;s possible
              when education and implementation run in parallel.
            </p>
          </div>
        </FadeIn>

        {/* Featured engagement — large featured card */}
        <FadeIn delay={0.15} className="mt-14">
          <div className="rounded-2xl overflow-hidden bg-white border border-stone-200/60">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Photo side */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/vetvision-ai/800/600"
                  alt="VetVision AI — example Quilliam AI engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-stone-700">
                    {featuredEngagement.industry}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-stone-950 leading-tight">
                  {featuredEngagement.hero.title}{" "}
                  <span className="text-emerald-600">
                    {featuredEngagement.hero.titleAccent}
                  </span>
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {featuredEngagement.hero.description}
                </p>

                {/* Workstreams */}
                <div className="mt-8 space-y-3">
                  {featuredEngagement.workstreams.map((stream) => (
                    <div key={stream.problem} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-stone-800">
                          {stream.problem}
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {stream.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild className="mt-8 rounded-full w-fit">
                  <Link href="/book">
                    Talk to us about your business
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
                    {featuredEngagement.client.quote}
                  </blockquote>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-stone-900">
                      {featuredEngagement.client.owner}
                    </p>
                    <p className="text-xs text-stone-400">
                      {featuredEngagement.client.business} ·{" "}
                      {featuredEngagement.client.location}
                    </p>
                  </div>
                  <div className="hidden md:flex gap-6">
                    <div>
                      <span className="text-xl font-semibold font-mono text-emerald-600 tabular-nums">
                        {featuredEngagement.client.stats.primary}
                      </span>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                        {featuredEngagement.client.stats.primaryLabel}
                      </p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold font-mono text-emerald-600">
                        {featuredEngagement.client.stats.secondary}
                      </span>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                        {featuredEngagement.client.stats.secondaryLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
