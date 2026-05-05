import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitPattern } from "@/components/shared/pattern-overlay";

export default function NotFound() {
  return (
    <section className="relative min-h-[80dvh] flex items-center justify-center bg-stone-950 overflow-hidden">
      <CircuitPattern className="text-emerald-400" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative text-center px-6 max-w-lg">
        <p className="text-7xl font-bold font-mono text-emerald-500/30">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter text-white">
          Page not found
        </h1>
        <p className="mt-4 text-base text-stone-400 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Head back to our homepage or map your first AI opportunity.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Back to home
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/book">Map my first AI system</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
