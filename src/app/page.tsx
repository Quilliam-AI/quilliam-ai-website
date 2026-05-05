import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { OutcomeModel } from "@/components/home/outcome-model";
import { WorkflowShowcase } from "@/components/home/workflow-showcase";
import { StePillars } from "@/components/home/ste-pillars";
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
    name: "How Quilliam AI turns an AI opportunity into a live system",
    description:
      "The outcome-led implementation flow: map the opportunity, agree the baseline, build the first system, then train and optimise against the metric.",
    totalTime: "P2W",
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
        name="Outcome-led AI implementation for owner-led businesses | Quilliam AI"
        description="Quilliam AI installs AI systems inside owner-led UK businesses, tied to measurable outcomes: hours saved, faster lead response, reduced admin backlog, and cleaner reporting."
        datePublished="2026-04-11"
        dateModified="2026-05-03"
      />
      <HomeJsonLd />
      <Hero />
      <TrustBar />
      <OutcomeModel />
      <WorkflowShowcase />
      <StePillars />
      <SprintProcess />
      <ServicesCards />
      <IndustrySection />
      <AboutPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
