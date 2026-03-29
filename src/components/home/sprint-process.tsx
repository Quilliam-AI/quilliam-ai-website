import Image from "next/image";
import { sprintSteps } from "@/lib/content";

const IMAGES = [
  "https://picsum.photos/seed/audit-work/600/400",
  "https://picsum.photos/seed/build-auto/600/400",
  "https://picsum.photos/seed/win-results/600/400",
];

export function SprintProcess() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
            The AI Impact Sprint
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-950 leading-tight">
            How it works
          </h2>
          <p className="mt-4 text-base text-stone-500 leading-relaxed">
            A focused 2-hour session. We find your biggest time-waster and build
            an AI solution for it. Free. No commitment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sprintSteps.map((step, i) => (
            <div
              key={step.number}
              className="group relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/60 hover:border-stone-300 transition-colors"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={IMAGES[i]}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-50 to-transparent" />
                <span className="absolute top-4 left-4 text-5xl font-mono font-bold text-white/30">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
