import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";

export function LegalSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalHero({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 pb-14 pt-28 text-paper md:pt-36">
      <div className="site-grid absolute inset-0 opacity-30" />
      <FadeIn className="relative mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
          Legal
        </p>
        <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-paper/55">Last updated: {lastUpdated}</p>
      </FadeIn>
    </section>
  );
}

export function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-ink px-6 pb-24 text-paper">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="border-t border-paper/10 pt-10 text-paper/72 [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-paper [&_li]:leading-relaxed [&_p]:mb-4 [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-paper [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14 border-t border-paper/10 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paper/70 transition-colors hover:text-signal"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
