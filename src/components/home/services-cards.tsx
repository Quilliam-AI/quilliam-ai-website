import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gauge, Hammer, Map, Repeat2, Target } from "lucide-react";
import { services } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";
import { TrackClick } from "@/components/shared/track-click";

// Icons are keyed to slug so that re-ordering offers doesn't break the mapping
const ICONS: Record<string, typeof Target> = {
  "ai-opportunity-mapping": Map,
  "outcome-sprint": Gauge,
  "fixed-ai-system-build": Hammer,
  "monthly-optimisation": Repeat2,
};

const IMAGES: Record<string, string> = {
  "ai-opportunity-mapping": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "outcome-sprint": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  "fixed-ai-system-build": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "monthly-optimisation": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
};

export function ServicesCards() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#fbfaf7] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-3">
              Start where the risk is lowest
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight text-balance">
              Start small. Prove the system. Scale what works.
            </h2>
            <p className="mt-4 text-base text-stone-600 leading-relaxed max-w-[64ch]">
              The first conversion is not a generic report. It is a mapping
              call that finds the first AI system worth building. From there,
              implementation is fixed-scope, measured, and designed for your
              team to own.
            </p>
          </div>
        </FadeIn>

        {/* Zig-zag layout on desktop */}
        <div className="mt-14 space-y-6">
          {services.map((service, i) => {
            const Icon = ICONS[service.slug] ?? Target;
            const isReversed = i % 2 === 1;

            return (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <div className="group block">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-colors shadow-[0_24px_80px_-65px_rgba(68,64,60,0.55)] ${
                      isReversed ? "md:direction-rtl" : ""
                    }`}
                  >
                    {/* Image side */}
                    <div
                      className={`relative h-56 md:h-auto overflow-hidden ${
                        isReversed ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={IMAGES[service.slug] ?? IMAGES["ai-opportunity-mapping"]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-${
                          isReversed ? "l" : "r"
                        } from-transparent to-white/45`}
                      />
                    </div>

                    {/* Content side */}
                    <div
                      className={`p-8 md:p-12 flex flex-col justify-center ${
                        isReversed ? "md:order-1 direction-ltr" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                          <Icon
                            size={18}
                            className="text-emerald-700"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-stone-500">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                        {service.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
                          {service.price}
                        </span>
                        <span className="text-xs text-stone-500">
                          {service.duration}
                        </span>
                      </div>

                      <p className="mt-4 text-sm text-stone-600 leading-relaxed max-w-[52ch]">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs text-stone-600 flex items-start gap-2"
                          >
                            <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <TrackClick event="service_card_clicked" properties={{ service: service.slug }}>
                        <Link
                          href="/book"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:gap-3 transition-all py-3"
                        >
                          Map this opportunity
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </TrackClick>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
