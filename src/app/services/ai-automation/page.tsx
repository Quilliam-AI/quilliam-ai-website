import type { Metadata } from "next";
import {
  Wrench,
  Bot,
  Workflow,
  MessageSquare,
  Plug,
  FileText,
  Repeat,
  Zap,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { NodeNetworkPattern } from "@/components/shared/pattern-overlay";
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
  title: "AI Implementation — Automation, Agents & Custom Tools",
  description:
    "We build AI automations, agents, n8n workflows, and custom ChatGPT/Claude tools for UK businesses. From £300/day. Ongoing support and maintenance. AI Audit to start.",
  alternates: {
    canonical: "/services/ai-automation",
  },
  openGraph: {
    title: "AI Implementation — Automation, Agents & Custom Tools | Quilliam AI",
    description:
      "We build AI automations, agents, n8n workflows, and custom ChatGPT/Claude tools for UK businesses. Ongoing support and maintenance.",
    url: "/services/ai-automation",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "AI Implementation — Automation, Agents & Custom Tools | Quilliam AI",
    description:
      "We build AI automations, agents, n8n workflows, and custom ChatGPT/Claude tools for UK businesses.",
  },
};

const automationFaqs = [
  {
    question: "How much does AI implementation cost?",
    answer:
      "Day-rate consulting at £300–£400/day depending on scope and complexity, or fixed-price packages for well-scoped automations (typically starting around £500–£2,000 depending on what's being built). Simple workflows like review requests or follow-up emails are at the lower end. More complex systems like custom AI agents, multi-step n8n workflows, or AI receptionists are higher. Every engagement starts with an AI Audit and a clear, fixed quote — no surprises.",
  },
  {
    question: "How long does it take to build something?",
    answer:
      "Most automations are live within 1 to 2 weeks after your AI Audit. Simple workflows like automated review requests or customer follow-up emails can be running within a few days. More complex systems like AI receptionists, custom agents, or n8n onboarding pipelines typically take 2 weeks. We ship working v1s fast and iterate from there rather than disappearing for a month with a big promise.",
  },
  {
    question: "Do I need to maintain the automations myself?",
    answer:
      "No — we offer ongoing support and maintenance packages. If something breaks, an API changes, or the workflow needs adjusting, we handle it. That said, every implementation is documented so your team could maintain it themselves if they wanted to. We write runbooks. We use industry-standard tools. There is no lock-in and no bespoke framework. You own what we build even if you stop working with us.",
  },
  {
    question: "What if I'm not sure what to automate?",
    answer:
      "That is exactly what the AI Audit is for. We look at how your business actually runs, identify the biggest time-wasters, and recommend the highest-impact automation to start with. Most business owners are surprised by what can be automated — and more surprised by how much time they get back after the first few systems go live.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "n8n for workflow automation (self-hostable, no per-execution pricing, scales with you). Make and Zapier for simpler integrations where they fit. OpenAI, Anthropic, and Google for the AI layer. Direct API integrations where off-the-shelf tools don't cut it. Claude Code for building custom internal tools on top of a knowledge vault. Everything we pick is industry-standard, well-documented, and replaceable — no proprietary frameworks, no lock-in.",
  },
];

const automations = [
  {
    icon: MessageSquare,
    title: "AI Agents & Assistants",
    description:
      "Custom AI agents that answer enquiries, draft responses, summarise conversations, and automate decisions. Built on ChatGPT, Claude, or Gemini and tuned to your business voice and rules.",
    stat: "24/7 instant responses",
  },
  {
    icon: Workflow,
    title: "n8n Workflows",
    description:
      "Customer onboarding, lead routing, data enrichment, content pipelines, Slack notifications, invoice chasing, review management — whatever repetitive process is eating your week, automated end to end.",
    stat: "Self-hosted, no per-run fees",
  },
  {
    icon: Plug,
    title: "API & Tool Integrations",
    description:
      "Connect the tools you already use: CRM ↔ email, form ↔ database, Stripe ↔ accounting, Slack ↔ Linear. The boring plumbing that stops data falling through the cracks.",
    stat: "Stop the copy-paste",
  },
  {
    icon: FileText,
    title: "Custom GPTs & Claude Projects",
    description:
      "Role-specific AI tools your team can use without technical knowledge. A sales agent with your pricing rules. A content editor with your brand voice. A support assistant with your product docs.",
    stat: "No-code for the end user",
  },
  {
    icon: Repeat,
    title: "Follow-ups & Lifecycle",
    description:
      "Automated sequences that keep customers engaged. New lead? Welcome email. Lapsed customer? Nudge. Post-sale? Onboarding flow. All personalised via AI, all running without a human.",
    stat: "Set once, runs forever",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    description:
      "An AI receptionist that handles enquiries, answers FAQs, books appointments, and captures leads 24/7 via your website, WhatsApp, or phone. Customers get instant responses even when you're asleep.",
    stat: "Under 2 min response",
  },
];

const processSteps = [
  {
    number: "01",
    title: "AI Audit",
    description:
      "We look at how your business actually runs. Where's the repetitive work? Where are you losing customers? Where's the bottleneck? No commitment.",
  },
  {
    number: "02",
    title: "Recommendation",
    description:
      "We identify the highest-impact automation for your business and give you a clear, fixed quote or day-rate estimate. You understand exactly what we're building and why.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "We build, test, and make sure it works with your existing tools. You review everything before it goes live. Runbook documented as we go so your team knows how it works.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch, train you on how to monitor it, and provide ongoing support. Monthly check-ins show you exactly how much time and money you're saving.",
  },
];

export default function AiAutomationPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in AI implementation for my business.");

  return (
    <>
      <ServiceJsonLd
        slug="ai-automation"
        name="AI Implementation — Automation, Agents & Custom Tools"
        description="We build AI automations, agents, n8n workflows, and custom ChatGPT/Claude tools for UK businesses. Day-rate consulting with ongoing support."
        serviceType="AI Implementation"
        price="300"
        offerDescription="Day-rate from £300–£400/day; fixed-price packages from £500"
        faqs={automationFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "AI Implementation", href: "/services/ai-automation" }]} />
      <WebPageJsonLd
        path="/services/ai-automation"
        name="AI Implementation — Automation, Agents & Custom Tools | Quilliam AI"
        description="Custom AI automations, agents, n8n workflows, and tailored ChatGPT/Claude tools built for UK businesses by Quilliam AI. AI Audit to start."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
      />

      <ServiceHero
        pattern={<NodeNetworkPattern className="text-emerald-400" />}
        icon={Wrench}
        badge="AI Implementation"
        titleLine1="We build the AI systems"
        titleLine2="that save you hours."
        description="You tell us the problem, we ship the solution. Custom AI automations, agents, n8n workflows, API integrations, and bespoke ChatGPT or Claude tools — all tailored to how your business actually runs. You stop doing the repetitive work. Your customers get faster responses. Your business runs smoother while you focus on what matters."
        ctaText="Book Your AI Audit"
        whatsappHref={whatsappHref}
        trustBadges={["From £300/day", "Live in 1–2 weeks", "Ongoing support"]}
      />

      {/* What we build */}
      <section id="automations" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              What we build
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              AI systems that run while you work
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed max-w-[56ch]">
              Every implementation is custom-built for your business. Here
              are the most common systems we build for UK businesses today.
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

          <FadeIn delay={0.5} className="mt-10">
            <div className="flex items-center justify-center gap-2 text-sm text-stone-500">
              <Zap size={14} className="text-emerald-400" />
              Don&apos;t see what you need? We build custom — just ask.
            </div>
          </FadeIn>
        </div>
      </section>

      <ProcessSteps
        label="How it works"
        heading="From audit to live in 4 steps"
        steps={processSteps}
      />

      <ServiceFaqSection heading="AI Implementation Questions" faqs={automationFaqs} />

      <OtherServicesSection
        currentSlug="ai-automation"
        heading="Explore our other services"
      />

      <ServiceCta
        heading="Ready to let AI do the work for you?"
        description="Book your AI Audit. We'll find your highest-impact automation opportunity and show you exactly how to build it."
        ctaText="Book Your AI Audit"
        tagline="Based in Cornwall. Building for businesses across the UK."
        whatsappHref={whatsappHref}
      />
    </>
  );
}
