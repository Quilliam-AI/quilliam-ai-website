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
          The page you are looking for does not exist or has been moved. Head
          back to our homepage or book a free AI Audit.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]"
          >
            <Link href="/">
              Back to Home
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-12 px-8 text-base text-white"
          >
            <Link href="/book">Book a Free AI Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
