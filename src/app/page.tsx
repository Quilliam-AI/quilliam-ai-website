import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { SprintProcess } from "@/components/home/sprint-process";
import { ServicesCards } from "@/components/home/services-cards";
import { IndustrySection } from "@/components/home/industry-tabs";
import { AboutPreview } from "@/components/home/about-preview";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/shared/cta-section";
import { siteConfig, faqs, sprintSteps } from "@/lib/content";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";

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

  const howToSchema = {
    "@type": "HowTo",
    "@id": `${siteConfig.url}/#howto`,
    name: "How to get a free AI Audit from Quilliam Digital",
    description:
      "A focused session where we find your biggest time-waster and build an AI solution for it. Free. No commitment.",
    totalTime: "PT2H",
    step: sprintSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [faqSchema, howToSchema],
        }),
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        path="/"
        name="AI Solutions for UK Small Businesses | Quilliam Digital"
        description="Quilliam Digital helps UK small businesses save time and win more customers with AI automation, training, and digital services. Based in Cornwall, serving businesses UK-wide."
        datePublished="2025-03-01"
        dateModified="2026-04-05"
      />
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
