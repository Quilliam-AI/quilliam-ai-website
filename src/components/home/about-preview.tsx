import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";


export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeIn direction="left">
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
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15} direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
                About Levi Quilliam
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
                Who is behind
                <br />
                Quilliam Digital?
              </h2>
              <p className="mt-6 text-base text-stone-500 leading-relaxed max-w-[56ch]">
                Levi Quilliam is the founder of Quilliam Digital, an AI
                automation consultancy based in Cornwall that works with small
                businesses across the United Kingdom. After years of seeing
                talented business owners struggle to adopt AI tools, Levi
                started Quilliam Digital to bridge the gap between powerful AI
                technology and the practical needs of businesses with 1 to 50
                employees. His approach is hands-on and jargon-free: he sits
                down with each client, audits how their business actually
                operates, and identifies exactly which AI tools and automations
                will save them time and generate more revenue. Clients working
                with Levi have reported saving over 10 hours per week on
                repetitive tasks and achieving customer response times under
                2 minutes through AI-powered systems. As a BNI member and active
                participant in the Cornwall business community, Levi brings
                local knowledge and a genuine commitment to helping small
                businesses compete with larger rivals through smart automation.
              </p>

              <Button asChild variant="outline" className="mt-8 rounded-full">
                <Link href="/book">
                  Chat with Levi
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
