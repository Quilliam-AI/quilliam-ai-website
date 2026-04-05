import type { Metadata } from "next";
import {
  Bot,
  Workflow,
  MessageSquare,
  Star,
  FileText,
  Clock,
  Zap,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { NodeNetworkPattern } from "@/components/shared/pattern-overlay";
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
  title: "AI Automation for Small Businesses | Cornwall & UK-Wide",
  description:
    "Custom AI automation for UK small businesses. Automated quoting, AI receptionists, review management, customer follow-ups. Packages from £500. Book a free AI Audit.",
  alternates: {
    canonical: "/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation for Small Businesses | Quilliam Digital",
    description:
      "Custom AI automation for UK small businesses. Automated quoting, AI receptionists, review management, customer follow-ups. Packages from £500.",
    url: "/services/ai-automation",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "AI Automation for Small Businesses | Quilliam Digital",
    description:
      "Custom AI automation for UK small businesses. Automated quoting, AI receptionists, review management, customer follow-ups. Packages from £500.",
  },
};

const automationFaqs = [
  {
    question: "How much does AI automation cost?",
    answer:
      "Automation packages start from £500 depending on complexity. Simple workflows like review requests or follow-up emails are at the lower end. More complex systems like AI receptionists or multi-step automations are higher. We give you a clear, fixed quote after your free AI Audit. No surprises.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most automations are live within 1 to 2 weeks after your AI Audit. Simple workflows like automated review requests can be running within days. More complex systems like AI receptionists typically take 2 weeks. We handle the entire setup.",
  },
  {
    question: "Do I need to maintain the automations myself?",
    answer:
      "No. We offer ongoing support and maintenance packages. If something breaks or needs adjusting, we handle it. You also get monthly reports showing how much time the automations are saving you.",
  },
  {
    question: "What if I am not sure what to automate?",
    answer:
      "That is exactly what the free AI Audit is for. We look at how your business actually runs, identify the biggest time-wasters, and recommend the highest-impact automation to start with. Most business owners are surprised by what can be automated.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "We build automations using Make, Zapier, n8n, and direct API integrations depending on what fits best. For AI features like chatbots and content generation, we use OpenAI, Anthropic, and other providers. Everything is chosen based on reliability and cost-effectiveness for your specific use case.",
  },
];

const automations = [
  {
    icon: MessageSquare,
    title: "AI Receptionist",
    description:
      "An AI-powered chatbot that handles enquiries, answers FAQs, books appointments, and captures leads 24/7. Your customers get instant responses even when you are asleep.",
    stat: "Under 2 min response time",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Automated review requests sent at the perfect moment after a positive interaction. Handles the follow-up so you never forget to ask. More 5-star reviews without lifting a finger.",
    stat: "3x more Google reviews",
  },
  {
    icon: FileText,
    title: "Automated Quoting",
    description:
      "Customers fill in a form. AI generates a professional quote based on your pricing rules and sends it within minutes. No more spreadsheets, no more delays.",
    stat: "Quotes in under 5 minutes",
  },
  {
    icon: Workflow,
    title: "Customer Follow-ups",
    description:
      "Automated sequences that keep customers engaged. New lead? They get a welcome email. Lapsed customer? They get a nudge. Missed appointment? They get a rebooking link.",
    stat: "40% more repeat business",
  },
  {
    icon: Clock,
    title: "Scheduling & Booking",
    description:
      "Customers book directly from your website, WhatsApp, or Google Business Profile. Automatic confirmations, reminders, and rescheduling. Zero admin from your side.",
    stat: "90% fewer no-shows",
  },
  {
    icon: Zap,
    title: "Custom Workflows",
    description:
      "Connect your existing tools and eliminate manual data entry. CRM to email. Form to invoice. Spreadsheet to report. If you are copying and pasting between apps, we can automate it.",
    stat: "10+ hours saved weekly",
  },
];

const processSteps = [
  {
    number: "01",
    title: "AI Audit",
    description:
      "We look at how your business actually runs. Where is the repetitive work? Where are you losing customers? Where is the bottleneck? This session is free.",
  },
  {
    number: "02",
    title: "Recommendation",
    description:
      "We identify the highest-impact automation for your business and give you a clear, fixed quote. No jargon. You will understand exactly what we are building and why.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "We build the automation, test it thoroughly, and make sure it works with your existing tools. You review everything before it goes live.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch the automation, train you on how to monitor it, and provide ongoing support. Monthly reports show you exactly how much time and money you are saving.",
  },
];

export default function AiAutomationPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in AI automation for my business.");

  return (
    <>
      <ServiceJsonLd
        slug="ai-automation"
        name="AI Automation for Small Businesses"
        description="Custom AI automation for UK small businesses. Automated quoting, AI receptionists, review management, customer follow-ups."
        serviceType="AI Automation"
        price="500"
        offerDescription="Automation packages from £500"
        faqs={automationFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "AI Automation", href: "/services/ai-automation" }]} />

      <ServiceHero
        pattern={<NodeNetworkPattern className="text-emerald-400" />}
        icon={Bot}
        badge="AI Automation"
        titleLine1="AI Automation for"
        titleLine2="UK Small Businesses"
        description="You are spending hours every week on tasks a machine could handle in seconds. We build AI-powered automations that handle quoting, customer follow-ups, review management, and more. You get hours back. Your customers get faster responses. Your business runs without you babysitting it."
        ctaText="Book a Free AI Audit"
        whatsappHref={whatsappHref}
        trustBadges={["From £500", "Live in 1-2 weeks", "Ongoing support"]}
      />

      {/* What we automate */}
      <section id="automations" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              What we automate
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              AI systems that work while you sleep
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed max-w-[56ch]">
              Every automation is custom-built for your business. Here are the most
              common ones we build for small businesses across the UK.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800/60 hover:border-stone-700 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/50 flex items-center justify-center">
                      <item.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-emerald-400/70">{item.stat}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        label="How it works"
        heading="From audit to automation in 4 steps"
        steps={processSteps}
      />

      <ServiceFaqSection heading="AI Automation Questions" faqs={automationFaqs} />

      <OtherServicesSection
        currentSlug="ai-automation"
        heading="Explore our other services"
      />

      <ServiceCta
        heading="Ready to automate your business?"
        description="Book a free AI Audit. We will find your biggest time-waster and show you exactly how to automate it."
        ctaText="Book a Free AI Audit"
        tagline="Based in Cornwall. Automating businesses across the UK."
        whatsappHref={whatsappHref}
      />
    </>
  );
}
