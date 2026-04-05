import Link from "next/link";
import { DotGridPattern } from "@/components/shared/pattern-overlay";

/**
 * Reusable section wrapper for legal page content blocks.
 * Adds consistent spacing and heading styles.
 */
export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl mb-4">{title}</h2>
      {children}
    </div>
  );
}

/**
 * Hero header for legal pages (Privacy Policy, Terms of Service).
 */
export function LegalHero({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative bg-stone-950 pt-32 pb-16 overflow-hidden">
      <DotGridPattern className="text-emerald-400 opacity-30" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-stone-400 text-lg">
          Last updated: {lastUpdated}
        </p>
      </div>
    </section>
  );
}

/**
 * Content wrapper for legal pages. Provides prose styling and a back-to-home link.
 */
export function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-stone-950 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="max-w-none text-stone-300 [&_h2]:text-white [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_a]:text-emerald-400 [&_a:hover]:text-emerald-300 [&_a]:transition-colors [&_strong]:text-white [&_strong]:font-semibold">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800">
          <Link
            href="/"
            className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
