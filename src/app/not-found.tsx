import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[82dvh] items-center justify-center overflow-hidden bg-ink px-6 text-paper">
      <div className="site-grid absolute inset-0 opacity-35" />
      <div className="noise absolute inset-0 opacity-70" />

      <FadeIn className="relative max-w-2xl text-center">
        <p className="text-8xl font-bold tracking-tight text-signal/30">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          This page is outside the workflow.
        </h1>
        <p className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-paper/64">
          The page does not exist or has moved. Head home, or book an AI Gap
          Opportunity session if you were trying to start a conversation.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="text-sm font-bold tracking-normal normal-case"
          >
            <Link href="/">
              Back home
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="max-w-full whitespace-normal text-center leading-tight tracking-normal text-paper normal-case sm:whitespace-nowrap"
          >
            <Link href="/book?intent=opportunity">
              Find Where AI Can Help My Business
            </Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
