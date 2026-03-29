import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { SprintProcess } from "@/components/home/sprint-process";
import { ServicesCards } from "@/components/home/services-cards";
import { IndustrySection } from "@/components/home/industry-tabs";
import { AboutPreview } from "@/components/home/about-preview";
import { CtaSection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SprintProcess />
      <ServicesCards />
      <IndustrySection />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
