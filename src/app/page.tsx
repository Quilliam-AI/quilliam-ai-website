import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { SprintProcess } from "@/components/home/sprint-process";
import { ServicesCards } from "@/components/home/services-cards";
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
    name: "How to get an AI Audit from Quilliam AI",
    description:
      "A focused conversation where we listen to your business, figure out whether AI training, implementation, or both would help you most, and give you a clear, practical recommendation. No commitment.",
    totalTime: "PT1H",
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
        name="AI Education and Implementation for UK Businesses | Quilliam AI"
        description="Quilliam AI is a UK AI agency that teaches your team how to use AI properly and builds the automations, agents, and tools that save you hours every week. Based in Cornwall, working UK-wide."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
      />
      <HomeJsonLd />
      <Hero />
      <TrustBar />
      <SprintProcess />
      <ServicesCards />
      <AboutPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
