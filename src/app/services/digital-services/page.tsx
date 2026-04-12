import type { Metadata } from "next";
import {
  Globe,
  Search,
  MapPin,
  Calendar,
  Palette,
  Shield,
  FileText,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { DotGridPattern } from "@/components/shared/pattern-overlay";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import {
  ServiceJsonLd,
  ServiceHero,
  ProcessSteps,
  ServiceFaqSection,
  OtherServicesSection,
  ServiceCta,
} from "@/components/services/shared";

export const metadata: Metadata = {
  title: "Digital Services — Websites, SEO, Brand & Content",
  description:
    "Professional websites, SEO, Google Business Profile, and content production for UK businesses. The digital foundation that supports your AI work. From £500.",
  alternates: {
    canonical: "/services/digital-services",
  },
  openGraph: {
    title: "Digital Services — Websites, SEO, Brand & Content | Quilliam AI",
    description:
      "Professional websites, SEO, Google Business Profile, and content for UK businesses. The digital foundation that supports your AI work.",
    url: "/services/digital-services",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Services — Websites, SEO, Brand & Content | Quilliam AI",
    description:
      "Professional websites, SEO, Google Business Profile, and content for UK businesses.",
  },
};

const digitalFaqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website packages start from £500 for a professional, mobile-responsive site with SEO built in. More complex sites with booking systems, e-commerce, or custom features are priced accordingly. We give you a clear, fixed quote upfront — no surprises. We also offer website polish and conversion fixes on your existing site on a day-rate basis (£300–£400/day) if you don't need a full rebuild.",
  },
  {
    question: "Do you manage hosting and updates?",
    answer:
      "Yes. All our website packages include hosting, SSL certificates, security updates, and technical maintenance. You do not need to worry about anything technical. We handle it all.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "A standard business website takes 1 to 2 weeks from start to launch. More complex sites with booking systems, custom AI features, or integrations typically take 2 to 3 weeks. We keep you involved at every step so there are no surprises.",
  },
  {
    question: "Can you help with Google Business Profile and local SEO?",
    answer:
      "Absolutely. We set up, optimise, and manage your Google Business Profile so you show up in local search results. This includes photos, posts, review responses, and regular updates. For most local businesses, GBP is more important than the website itself — and the two work together to drive customers to you.",
  },
  {
    question: "Do you do content production too?",
    answer:
      "Yes. We produce articles, blog posts, landing page copy, and thought leadership grounded in your team's real expertise. We interview your subject experts and turn the transcripts into content that actually sounds like you — not generic AI slop. Real expertise is what makes content rank on Google and convert readers.",
  },
  {
    question: "How does this fit with your AI services?",
    answer:
      "Digital Services is the foundation that supports everything else. A brilliant AI automation behind a broken website still loses customers. A smart team trained on AI still needs a professional brand to sell to clients. Most of our clients do Digital Services alongside AI Education or AI Implementation because the two reinforce each other — the website drives customers to your AI systems, and the AI systems make your business run smoother.",
  },
];

const digitalServices = [
  {
    icon: Palette,
    title: "Professional Websites",
    description:
      "Fast, mobile-responsive websites that look professional and convert visitors into customers. Built with modern tech (Next.js, Tailwind), not WordPress templates. Every site is custom-designed for your brand.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive on all devices",
      "Fast loading speeds (under 1 second)",
      "SEO built in from day one",
    ],
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    description:
      "Get found on Google when people search for businesses like yours. We optimise your site and content for the keywords your customers actually use. Focused on local search plus AI Overview readiness (llms.txt, schema, citations).",
    features: [
      "Keyword research for your industry",
      "On-page SEO optimisation",
      "AI-crawler and llms.txt setup",
      "Monthly performance reports",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Your Google Business Profile is often the first thing people see. We set it up properly, keep it updated, and help you get more reviews. For local businesses this is the single most important digital asset.",
    features: [
      "Complete profile setup and optimisation",
      "Regular posts and photo updates",
      "Review management and response",
      "Local SEO integration",
    ],
  },
  {
    icon: FileText,
    title: "Content Production",
    description:
      "Articles, blog posts, landing pages, and thought leadership grounded in your team's real expertise. We interview your subject experts and produce content that sounds like them, not generic AI slop.",
    features: [
      "Subject-expert interviews → articles",
      "Editorial polish on your team's drafts",
      "SEO-aware content structure",
      "Publishing playbook for ongoing output",
    ],
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description:
      "Let customers book appointments, classes, or consultations directly from your website or Google profile. Automatic confirmations, reminders, and calendar syncing. No more phone tag.",
    features: [
      "Online booking from your website",
      "Automatic email and SMS confirmations",
      "Calendar sync with Google/Outlook",
      "No-show reduction with reminders",
    ],
  },
  {
    icon: Shield,
    title: "Hosting & Maintenance",
    description:
      "Reliable hosting, SSL certificates, security updates, and performance monitoring. We keep your site fast, secure, and online. You never need to think about the technical side.",
    features: [
      "99.9% uptime guarantee",
      "SSL certificate included",
      "Automatic security updates",
      "Regular performance monitoring",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, your customers, and your goals. What do you need? What are your competitors doing? Where are the opportunities?",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We design and build everything: website, GBP, SEO, content. You see drafts at every stage and nothing goes live without your approval.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We handle the technical launch: DNS, hosting, SSL, redirects, Google indexing, Analytics. You just share the link.",
  },
  {
    number: "04",
    title: "Manage & Grow",
    description:
      "We keep everything updated, secure, and performing. Monthly reports show what is working and where we can improve.",
  },
];

export default function DigitalServicesPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in digital services (website, SEO, content) for my business.");

  return (
    <>
      <ServiceJsonLd
        slug="digital-services"
        name="Digital Services — Websites, SEO, Brand & Content"
        description="Professional websites, SEO, Google Business Profile, and content production for UK businesses. The digital foundation that supports your AI work."
        serviceType="Digital Marketing"
        price="500"
        offerDescription="Website packages from £500; day-rate consulting from £300–£400/day"
        faqs={digitalFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "Digital Services", href: "/services/digital-services" }]} />
      <WebPageJsonLd
        path="/services/digital-services"
        name="Digital Services — Websites, SEO, Brand & Content | Quilliam AI"
        description="Professional websites, SEO, Google Business Profile management, and content production for UK businesses. The digital foundation that supports your AI work."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
      />

      <ServiceHero
        pattern={<DotGridPattern className="text-emerald-400" />}
        icon={Globe}
        badge="Digital Services"
        titleLine1="Your digital foundation,"
        titleLine2="built and maintained."
        description="A brilliant AI system behind a broken website still loses customers. Digital Services is the foundation that supports everything else: professional websites, SEO, Google Business Profile, content production, and hosting. One team. One point of contact. Everything handled — so you can focus on the AI work that moves the needle."
        ctaText="Get a Free Quote"
        whatsappHref={whatsappHref}
        trustBadges={["From £500", "Live in 1–2 weeks", "Hosting included"]}
      />

      {/* Services grid */}
      <section id="services" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              What we build
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              Everything your business needs online
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800/60 hover:border-stone-700 transition-colors h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/50 flex items-center justify-center mb-5">
                    <service.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-stone-500 flex items-start gap-2"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section id="why" className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                Why this matters
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
                Your customers are searching right now
              </h2>
              <p className="mt-6 text-base text-stone-400 leading-relaxed">
                97% of people search online before visiting a local business.
                If your website is slow, your Google profile is empty, or you
                do not show up in local search results, you&apos;re losing
                customers to competitors who do. And increasingly, people are
                also asking AI tools like ChatGPT and Google AI Overviews —
                which is why we set up llms.txt, schema markup, and AI-crawler
                readiness as standard on every site.
              </p>
              <p className="mt-4 text-base text-stone-400 leading-relaxed">
                We do not just build websites. We build a complete digital
                presence that makes customers find you, trust you, and book
                with you — on Google and increasingly on ChatGPT, Claude,
                and Perplexity too.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { stat: "97%", label: "of people search online before visiting a local business (Source: BrightLocal)" },
                  { stat: "46%", label: "of all Google searches have local intent (Source: GoGulf)" },
                  { stat: "76%", label: "of people who search nearby visit within a day (Source: Google)" },
                  { stat: "AI", label: "search is growing fast — llms.txt and schema are now table stakes" },
                ].map((item) => (
                  <div key={item.stat} className="flex items-start gap-4 p-5 rounded-xl bg-stone-900 border border-stone-800/60">
                    <span className="text-2xl font-bold text-emerald-400 font-mono shrink-0 w-16 text-right">
                      {item.stat}
                    </span>
                    <p className="text-sm text-stone-400 leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProcessSteps
        label="How we work"
        heading="From brief to live in 4 steps"
        steps={processSteps}
        sectionBg="bg-stone-900"
        cardBg="bg-stone-950"
      />

      <ServiceFaqSection heading="Digital Services Questions" faqs={digitalFaqs} />

      <OtherServicesSection
        currentSlug="digital-services"
        heading="Explore our other services"
      />

      <ServiceCta
        heading="Ready to get found online?"
        description="Book a free consultation. We'll look at your current online presence and show you exactly what needs fixing."
        ctaText="Get a Free Quote"
        tagline="Based in Cornwall. Building for businesses across the UK."
        whatsappHref={whatsappHref}
      />
    </>
  );
}
