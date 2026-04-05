import type { Metadata } from "next";
import {
  Globe,
  Search,
  MapPin,
  Calendar,
  Palette,
  Shield,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { DotGridPattern } from "@/components/shared/pattern-overlay";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
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
  title: "Digital Services for Small Businesses | Cornwall & UK-Wide",
  description:
    "Websites, SEO, Google Business Profile management, and booking systems for UK small businesses. Professional online presence built and managed for you. From £500.",
  alternates: {
    canonical: "/services/digital-services",
  },
  openGraph: {
    title: "Digital Services for Small Businesses | Quilliam Digital",
    description:
      "Websites, SEO, Google Business Profile management, and booking systems for UK small businesses. Professional online presence built and managed for you.",
    url: "/services/digital-services",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Services for Small Businesses | Quilliam Digital",
    description:
      "Websites, SEO, Google Business Profile management, and booking systems for UK small businesses.",
  },
};

const digitalFaqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website packages start from £500 for a professional, mobile-responsive site with SEO built in. More complex sites with booking systems, e-commerce, or custom features are priced accordingly. We give you a clear, fixed quote upfront.",
  },
  {
    question: "Do you manage hosting and updates?",
    answer:
      "Yes. All our website packages include hosting, SSL certificates, security updates, and technical maintenance. You do not need to worry about anything technical. We handle it all.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "A standard business website takes 1 to 2 weeks from start to launch. More complex sites with booking systems or custom features typically take 2 to 3 weeks. We keep you involved at every step so there are no surprises.",
  },
  {
    question: "Can you help with Google Business Profile?",
    answer:
      "Absolutely. We set up, optimise, and manage your Google Business Profile so you show up in local search results. This includes photos, posts, review responses, and regular updates. For most local businesses, GBP is more important than the website itself.",
  },
  {
    question: "What about SEO — can you help me rank on Google?",
    answer:
      "Yes. Every website we build has SEO fundamentals built in from day one: proper heading structure, meta tags, schema markup, fast loading speeds, and mobile responsiveness. We also offer ongoing SEO services for businesses that want to actively compete for local search rankings.",
  },
];

const digitalServices = [
  {
    icon: Palette,
    title: "Professional Websites",
    description:
      "Fast, mobile-responsive websites that look professional and convert visitors into customers. Built with modern technology, not WordPress templates. Every site is custom-designed for your brand.",
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
      "Get found on Google when people search for businesses like yours. We optimise your site and content for the keywords your customers actually use. Focused on local search for UK small businesses.",
    features: [
      "Keyword research for your industry",
      "On-page SEO optimisation",
      "Local search targeting",
      "Monthly performance reports",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Your Google Business Profile is often the first thing people see. We set it up properly, keep it updated, and help you get more reviews. For local businesses, this is the single most important digital asset.",
    features: [
      "Complete profile setup and optimisation",
      "Regular posts and photo updates",
      "Review management and response",
      "Local SEO integration",
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
  {
    icon: Globe,
    title: "Complete Online Presence",
    description:
      "Everything together: website, SEO, Google Business Profile, booking, and hosting. One point of contact for your entire digital presence. We build it, manage it, and report on it.",
    features: [
      "Website + SEO + GBP as one package",
      "Single point of contact",
      "Monthly reporting on all channels",
      "Ongoing improvements and updates",
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
      "We design and build everything: website, GBP, SEO, booking. You see drafts at every stage and nothing goes live without your approval.",
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
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in digital services for my business.");

  return (
    <>
      <ServiceJsonLd
        slug="digital-services"
        name="Digital Services for Small Businesses"
        description="Websites, SEO, Google Business Profile management, and booking systems for UK small businesses."
        serviceType="Digital Marketing"
        price="500"
        offerDescription="Digital services packages from £500"
        faqs={digitalFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "Digital Services", href: "/services/digital-services" }]} />

      <ServiceHero
        pattern={<DotGridPattern className="text-emerald-400" />}
        icon={Globe}
        badge="Digital Services"
        titleLine1="Digital Services for"
        titleLine2="UK Small Businesses"
        description="Your customers search online before they pick up the phone. If they cannot find you, they find your competitor. We build and manage your entire online presence: website, SEO, Google Business Profile, and booking systems. One team. One point of contact. Everything handled."
        ctaText="Get a Free Quote"
        whatsappHref={whatsappHref}
        trustBadges={["From £500", "Live in 1-2 weeks", "Hosting included"]}
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
                97% of people search online before visiting a local business. If your
                website is slow, your Google profile is empty, or you do not show up in
                local search results, you are losing customers to competitors who do.
              </p>
              <p className="mt-4 text-base text-stone-400 leading-relaxed">
                We do not just build websites. We build a complete digital presence that
                makes customers find you, trust you, and book with you. Every element
                works together: the website feeds into Google, Google drives bookings,
                bookings drive reviews, and reviews drive more customers.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { stat: "97%", label: "of people search online before visiting a local business" },
                  { stat: "46%", label: "of all Google searches have local intent" },
                  { stat: "76%", label: "of people who search nearby visit within a day" },
                  { stat: "88%", label: "of consumers trust online reviews as much as personal recommendations" },
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
        description="Book a free consultation. We will look at your current online presence and show you exactly what needs fixing."
        ctaText="Get a Free Quote"
        tagline="Based in Cornwall. Building for businesses across the UK."
        whatsappHref={whatsappHref}
      />
    </>
  );
}
