import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <Image
              src="https://picsum.photos/seed/levi-portrait/600/800"
              alt="Levi, founder of Quilliam Digital"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              About Levi
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-950 leading-tight">
              The bridge between
              <br />
              you and AI
            </h2>
            <p className="mt-6 text-base text-stone-500 leading-relaxed max-w-[48ch]">
              I started Quilliam Digital because I kept meeting brilliant
              business owners who knew they should be using AI but had no idea
              where to start.
            </p>
            <p className="mt-4 text-base text-stone-500 leading-relaxed max-w-[48ch]">
              I'm not a consultant who talks in jargon. I'm the person who sits
              down with you, looks at how your business actually works, and shows
              you exactly which AI tools will save you time and make you money.
            </p>
            <p className="mt-4 text-sm text-stone-400 italic">
              Based in Cornwall. Working with small businesses across the UK.
            </p>

            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link href="/about">
                More about Levi
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
