import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredEngagement } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

const workflowCases = [
  {
    title: "VetVision AI",
    label: "Regulated healthcare spin-out",
    outcome: "Onboarding handoff and founder admin reduced",
    nodes: ["Website form", "Check details", "Create CRM record", "Send welcome pack", "Team review"],
    note: "Public case study details can be expanded when you provide the final VetVision numbers.",
  },
  {
    title: "Owner-led services",
    label: "Lead response workflow",
    outcome: "New enquiries triaged before the owner opens the inbox",
    nodes: ["New enquiry", "Classify intent", "Draft reply", "Hold for approval", "Log follow-up"],
    note: "A practical first system for teams where enquiries arrive faster than staff can respond.",
  },
  {
    title: "Monthly reporting",
    label: "Admin and reporting workflow",
    outcome: "Copy-paste reporting turned into a checked draft",
    nodes: ["Pull data", "Summarise changes", "Flag gaps", "Draft report", "Owner sign-off"],
    note: "Useful where the business already has the data but loses time preparing it every month.",
  },
] as const;

function WorkflowScreenshot({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="rounded-2xl bg-[#f7f3ea] p-4 ring-1 ring-stone-200">
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-stone-500">
          n8n workflow map
        </span>
      </div>
      <div className="mt-5 flex min-h-[190px] items-center overflow-x-auto pb-2">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center">
            <div className="w-[128px] rounded-xl border border-stone-200 bg-white p-3 shadow-[0_14px_35px_-32px_rgba(68,64,60,0.6)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-700">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold leading-snug text-stone-900">
                {node}
              </p>
              <p className="mt-2 text-[11px] text-stone-500">
                {index === nodes.length - 1 ? "human check" : "automation step"}
              </p>
            </div>
            {index < nodes.length - 1 && (
              <div className="mx-2 h-px w-8 bg-emerald-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustrySection() {
  return (
    <section id="example" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1fr] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-3">
                Workflow receipts
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight text-balance">
                Case-study style proof, not abstract AI promises.
              </h2>
            </div>
            <p className="text-base text-stone-600 leading-relaxed max-w-[62ch]">
              Owner-operators do not need to see another AI diagram. They need
              to see the kind of workflow that would remove admin from a real
              week. These cards make the automation concrete and give us a
              clean place to add the VetVision details when you are ready.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6">
          {workflowCases.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 * i}>
              <article className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-6 rounded-[2rem] border border-stone-200 bg-[#fbfaf7] p-5 md:p-6 shadow-[0_24px_80px_-68px_rgba(68,64,60,0.55)]">
                <div className="flex flex-col justify-between p-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-stone-600">
                      {item.outcome}
                    </p>
                  </div>
                  <div className="mt-8 rounded-2xl bg-white p-4 ring-1 ring-stone-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 text-emerald-700" />
                      <p className="text-sm leading-relaxed text-stone-600">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
                <WorkflowScreenshot nodes={item.nodes} />
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} className="mt-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/book">
                Map my first AI system
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link href="/#services">See the offer ladder</Link>
            </Button>
          </div>
        </FadeIn>

        <p className="sr-only">
          {featuredEngagement.hero.description}
        </p>
      </div>
    </section>
  );
}
