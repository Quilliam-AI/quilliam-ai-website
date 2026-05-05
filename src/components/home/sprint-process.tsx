import Image from "next/image";
import { sprintSteps } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

const IMAGES = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
];

export function SprintProcess() {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-3">
              From conversation to working system
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight text-balance">
              Map → baseline → build → optimise.
            </h2>
            <p className="mt-4 text-base text-stone-600 leading-relaxed">
              The funnel is deliberately narrow. We find one system worth
              building, agree how success will be measured, ship it, then train
              the team to run it without dependency.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric grid: large featured card + three stacked smaller cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Step 1 — Featured large card */}
          <FadeIn delay={0.1} className="md:col-span-7">
            <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-colors h-full shadow-[0_24px_80px_-65px_rgba(68,64,60,0.55)]">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={IMAGES[0]}
                  alt={sprintSteps[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
                <span className="absolute top-5 left-5 text-6xl font-bold text-white/25 tabular-nums">
                  {sprintSteps[0].number}
                </span>
                <span className="absolute top-5 right-5 inline-flex items-center rounded-full bg-emerald-900/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-800/40">
                  Step 1 · opportunity mapping
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                  {sprintSteps[0].title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-[48ch]">
                  {sprintSteps[0].description}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Steps 2, 3, 4 — Stacked in right column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {sprintSteps.slice(1).map((step, i) => (
              <FadeIn key={step.number} delay={0.2 + i * 0.1} className="flex-1">
                <div className="group relative rounded-[1.5rem] overflow-hidden bg-white border border-stone-200 transition-colors h-full shadow-[0_18px_60px_-52px_rgba(68,64,60,0.45)]">
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={IMAGES[i + 1]}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
                    <span className="absolute top-3 left-4 text-4xl font-bold text-white/25 tabular-nums">
                      {step.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-stone-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
