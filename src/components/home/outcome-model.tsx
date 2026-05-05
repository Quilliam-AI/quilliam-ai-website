import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  PoundSterling,
  Repeat2,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";

const model = [
  {
    icon: PoundSterling,
    title: "Fixed setup fee",
    description:
      "Scope and price are agreed before build. No open-ended day-rate drift.",
  },
  {
    icon: Target,
    title: "Baseline first",
    description:
      "We agree the current state before implementation: time, backlog, speed, conversion, or reporting.",
  },
  {
    icon: Gauge,
    title: "Measured outcome",
    description:
      "One or two metrics define whether the system paid back in the real business.",
  },
  {
    icon: Repeat2,
    title: "Optimise after launch",
    description:
      "If the first system earns it, monthly optimisation keeps adoption and results moving.",
  },
] as const;

const metrics = [
  "Hours saved",
  "Lead response time",
  "Booking rate",
  "Admin backlog",
  "Enquiry conversion",
  "Reporting time",
] as const;

export function OutcomeModel() {
  return (
    <section id="outcomes" className="relative overflow-hidden bg-[#fbfaf7] py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div className="max-w-[620px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-3">
                How we make AI feel useful
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight text-balance">
                AI systems your team
                <br />
                <span className="text-emerald-700">can actually use.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-stone-600 leading-relaxed max-w-[58ch]">
                The owner normally has the problem in their head. The team has
                the workaround. We bring those together, pick one measurable
                outcome, and build the first workflow around how the business
                already runs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/book">
                    Map my first AI system
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline-light" size="lg">
                  <Link href="/#services">See offers</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 md:p-6 shadow-[0_30px_80px_-60px_rgba(68,64,60,0.55)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {model.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-stone-200 bg-[#fbfaf7] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50">
                        <item.icon size={16} className="text-emerald-700" strokeWidth={1.6} />
                      </span>
                      <h3 className="text-sm font-semibold text-stone-950">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-800">
                  Metrics we can tie work to
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs text-stone-700"
                    >
                      <CheckCircle2 size={12} className="text-emerald-700" />
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
