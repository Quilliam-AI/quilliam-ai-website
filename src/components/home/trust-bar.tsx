import { GraduationCap, Wrench, MapPin, Shield } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";

const trustItems = [
  {
    icon: GraduationCap,
    label: "AI Education",
    detail: "Training, workshops, knowledge systems",
    accent: true,
  },
  {
    icon: Wrench,
    label: "AI Implementation",
    detail: "Automation, agents, custom tools",
    accent: false,
  },
  {
    icon: Shield,
    label: "Handoff-First",
    detail: "No lock-in, your team owns it",
    accent: false,
  },
  {
    icon: MapPin,
    label: "Cornwall Based",
    detail: "Working UK-wide and remote",
    accent: false,
  },
];

export function TrustBar() {
  return (
    <section className="py-6 bg-stone-900 border-y border-stone-800/60">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-800 border border-stone-700/50 flex items-center justify-center shrink-0">
                  <item.icon
                    size={15}
                    className={
                      item.accent
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-200 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-stone-500 leading-tight">
                    {item.detail}
                  </p>
                </div>
                {i < trustItems.length - 1 && (
                  <div className="hidden lg:block w-px h-8 bg-stone-800 ml-7" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
