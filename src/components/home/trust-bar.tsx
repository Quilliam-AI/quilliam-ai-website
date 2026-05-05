import { Gauge, GraduationCap, PoundSterling, Target } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";

const trustItems = [
  {
    icon: Target,
    label: "Outcome-led",
    detail: "Metrics agreed before build",
    accent: true,
  },
  {
    icon: PoundSterling,
    label: "Fixed setup fee",
    detail: "Scope and price up front",
    accent: false,
  },
  {
    icon: Gauge,
    label: "Measured impact",
    detail: "Hours, response, backlog, reporting",
    accent: false,
  },
  {
    icon: GraduationCap,
    label: "Team handoff",
    detail: "Training, runbooks, no lock-in",
    accent: false,
  },
];

export function TrustBar() {
  return (
    <section className="py-5 bg-white border-y border-stone-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <item.icon
                    size={15}
                    className={
                      item.accent
                        ? "text-emerald-300"
                        : "text-emerald-700"
                    }
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                    <p className="text-sm font-medium text-stone-900 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-stone-500 leading-tight">
                    {item.detail}
                  </p>
                </div>
                {i < trustItems.length - 1 && (
                    <div className="hidden lg:block w-px h-8 bg-stone-200 ml-7" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
