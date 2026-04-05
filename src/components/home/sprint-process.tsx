import Image from "next/image";
import { sprintSteps } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

const IMAGES = [
  "https://picsum.photos/seed/audit-work/800/600",
  "https://picsum.photos/seed/build-auto/600/400",
  "https://picsum.photos/seed/win-results/600/400",
];

export function SprintProcess() {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
      {/* Subtle emerald glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              The Free AI Audit
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
              How it works
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed">
              A focused 2-hour session. We find your biggest time-waster and
              build an AI solution for it. Free. No commitment.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric grid: large featured card + two stacked smaller cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Step 1 — Featured large card */}
          <FadeIn delay={0.1} className="md:col-span-7">
            <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/60 hover:border-stone-700 transition-colors h-full">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={IMAGES[0]}
                  alt={sprintSteps[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                <span className="absolute top-5 left-5 text-6xl font-mono font-bold text-white/15">
                  {sprintSteps[0].number}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {sprintSteps[0].title}
                </h3>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed max-w-[45ch]">
                  {sprintSteps[0].description}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Steps 2 + 3 — Stacked in right column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {sprintSteps.slice(1).map((step, i) => (
              <FadeIn key={step.number} delay={0.2 + i * 0.1} className="flex-1">
                <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/60 hover:border-stone-700 transition-colors h-full">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={IMAGES[i + 1]}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                    <span className="absolute top-4 left-4 text-5xl font-mono font-bold text-white/15">
                      {step.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">
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
