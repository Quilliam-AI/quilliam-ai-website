import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { SprintProcess } from "@/components/home/sprint-process";
import { ServicesCards } from "@/components/home/services-cards";
import { IndustrySection } from "@/components/home/industry-tabs";
import { AboutPreview } from "@/components/home/about-preview";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/shared/cta-section";
import { siteConfig, faqs } from "@/lib/content";

function HomeJsonLd() {
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [faqSchema],
        }),
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <TrustBar />
      <SprintProcess />
      <ServicesCards />
      <IndustrySection />
      <AboutPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
