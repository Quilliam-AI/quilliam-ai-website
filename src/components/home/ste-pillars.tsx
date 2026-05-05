import { stePillars } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

export function StePillars() {
  return (
    <section
      id="system"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Strategy. Systems. Training.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
              The first system only works
              <br />
              <span className="text-emerald-600">if the team can run it.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-stone-500 leading-relaxed max-w-[58ch]">
              A useful AI engagement has to choose the right outcome, ship the
              workflow, and train the people who will own it. Miss one, and the
              project turns into theatre.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stePillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.1 + i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10 transition-all hover:border-emerald-200 hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(5,150,105,0.15)]">
                {/* Letter mark */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-5xl md:text-6xl font-semibold tabular-nums text-emerald-600/80 leading-none">
                    {pillar.letter}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone-500">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {pillar.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-stone-700"
                    >
                      <span className="mt-2 inline-block w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
