import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotGridPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Ready to see what AI can do for your business?",
  description = "Start with a free AI Audit. We'll listen, figure out whether training, implementation, or both is the right fit, and give you a clear recommendation. No commitment. No jargon.",
}: CtaSectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-stone-950">
      <DotGridPattern className="text-emerald-400" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/cornwall-coast/1600/800"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/95 to-stone-950/80" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-5">
          <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[52ch] mx-auto">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-12 px-10 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
            >
              <Link href="/book?intent=training">
                Book Free AI Training
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-12 px-10 text-base text-white"
            >
              <Link href="/book?intent=audit">
                Book Free AI Audit
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-8">
          <p className="text-xs text-stone-500">
            Based in Cornwall. Working with UK businesses nationwide and remote.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
