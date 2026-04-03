import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Bot, Globe } from "lucide-react";
import { services } from "@/lib/content";
import { NodeNetworkPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";

const ICONS = [GraduationCap, Bot, Globe] as const;

const IMAGES = [
  "https://picsum.photos/seed/training-work/700/500",
  "https://picsum.photos/seed/automation-dash/700/500",
  "https://picsum.photos/seed/digital-web/700/500",
];

export function ServicesCards() {
  return (
    <section className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
      <NodeNetworkPattern className="text-emerald-400" />

      {/* Atmospheric glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
              Three ways we help
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed">
              From a free training session to full automation and digital
              services. Pick what fits.
            </p>
          </div>
        </FadeIn>

        {/* Zig-zag layout on desktop */}
        <div className="mt-14 space-y-6">
          {services.map((service, i) => {
            const Icon = ICONS[i];
            const isReversed = i % 2 === 1;

            return (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/60 hover:border-stone-700 transition-colors ${
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
                        src={IMAGES[i]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-${
                          isReversed ? "l" : "r"
                        } from-transparent to-stone-900/60`}
                      />
                    </div>

                    {/* Content side */}
                    <div
                      className={`p-8 md:p-12 flex flex-col justify-center ${
                        isReversed ? "md:order-1 direction-ltr" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center">
                          <Icon
                            size={18}
                            className="text-emerald-400"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-stone-500">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-stone-400 leading-relaxed max-w-[45ch]">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs text-stone-500 flex items-start gap-2"
                          >
                            <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
