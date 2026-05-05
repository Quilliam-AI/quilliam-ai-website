import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { TrackClick } from "@/components/shared/track-click";
import { getWhatsAppUrl } from "@/lib/content";

interface CtaSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
}

export function CtaSection({
  title = "Find the first AI system worth building.",
  description = "The AI Opportunity Mapping Call is free and focused. We look at what eats your week, where the business leaks time, and which first system could move a measurable outcome: hours saved, faster lead response, cleaner admin, or better reporting.",
  ctaText = "Map my first AI system",
}: CtaSectionProps) {
  const whatsappHref = getWhatsAppUrl(
    "Hi Levi, I run an owner-led business and I'd like to map the first AI system worth building.",
  );

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f5ef]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80"
          alt="A small business team working together around a table"
          fill
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#f8f5ef]/88" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight text-balance">
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-5">
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-[64ch] mx-auto">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackClick event="cta_clicked" properties={{ cta_type: "opportunity_mapping", location: "cta_section" }}>
              <Button asChild size="lg">
                <Link href="/book">
                  {ctaText}
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </TrackClick>
            <TrackClick event="contact_clicked" properties={{ method: "whatsapp", location: "cta_section" }}>
              <Button asChild variant="outline-light" size="lg">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </Button>
            </TrackClick>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-8">
          <p className="text-xs text-stone-500">
            Based in Cornwall. Working with owner-led UK businesses nationwide
            and remote.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
