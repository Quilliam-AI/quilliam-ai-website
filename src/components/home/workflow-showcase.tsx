import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { HeroWorkflow } from "@/components/home/hero-workflow";
import { WorkflowAnnotation } from "@/components/home/workflow-annotation";

export function WorkflowShowcase() {
  return (
    <section id="automation" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <FadeIn className="lg:order-2">
            <div className="lg:max-w-[620px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-3">
                What a first build can look like
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight max-w-[13ch] text-balance">
                Workflows your team can see, approve, and run.
              </h2>
              <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed max-w-[52ch]">
                This is the kind of first system we look for: a workflow that
                removes admin, speeds up response, and keeps human judgment in
                the loop where it belongs.
              </p>
              <div className="mt-6 rounded-2xl bg-[#f8f5ef] p-5 ring-1 ring-stone-200">
                <p className="text-sm font-semibold text-stone-950">
                  Not a black box.
                </p>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  The automation is documented, visible, and handed over. Your
                  team knows what it does, where it stops, and when a human
                  signs off.
                </p>
              </div>
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

          <FadeIn delay={0.1} direction="right" className="lg:order-1">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[440px] rounded-[2rem] bg-[#f8f5ef] p-4 ring-1 ring-stone-200 shadow-[0_30px_80px_-62px_rgba(68,64,60,0.6)]">
                <WorkflowAnnotation side="right" />
                <HeroWorkflow />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
