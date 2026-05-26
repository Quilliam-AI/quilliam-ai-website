import type { Metadata } from "next";
import { FocusedServicePage } from "@/components/services/focused-service-page";

export const metadata: Metadata = {
  title: "AI Automation Cornwall",
  description:
    "Cornwall AI automation services for businesses that need practical AI workflows, supervised agents, and team handoff. Based in Cornwall, working UK-wide.",
  alternates: { canonical: "/ai-automation-cornwall" },
  openGraph: {
    title: "AI Automation Cornwall | Quilliam AI",
    description:
      "Cornwall-based AI automation for businesses that want useful workflows, supervised agents, and clear handoff.",
    url: "/ai-automation-cornwall",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Cornwall | Quilliam AI",
    description:
      "Cornwall-based AI automation services for practical workflows and agents.",
  },
};

export default function AiAutomationCornwallPage() {
  return (
    <FocusedServicePage
      path="/ai-automation-cornwall"
      breadcrumb="AI Automation Cornwall"
      title="AI Automation Cornwall"
      description="Quilliam AI provides Cornwall AI automation services for businesses that need practical AI workflows, supervised agents, and adoption support."
      eyebrow="Cornwall AI automation"
      h1="AI automation for Cornwall businesses"
      accent="built around real work."
      intro="Quilliam AI is based near Newquay and works across Cornwall, the South West, and the wider UK. We help businesses move from scattered AI experiments to useful workflows that fit the way the team already works."
      definition="AI automation in Cornwall means using AI to improve repeated business work without losing local context or human control. Quilliam AI helps teams in Cornwall map admin, lead follow-up, reporting, document handling, customer replies, and internal knowledge work, then builds supervised workflows or agents around the tools already in use. The service suits businesses in places like Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge, and the wider South West that want practical implementation from someone close enough for workshops when useful. Every build is handoff-first: your team gets documentation, training, approval gates, and clear ownership so the automation can be trusted after launch."
      serviceType="AI automation Cornwall"
      areaServed={{ "@type": "AdministrativeArea", name: "Cornwall" }}
      bestFor={[
        "Cornwall and South West businesses with repeated admin, lead follow-up, reporting, document handling, or customer support work.",
        "Founder-led teams in Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge, and nearby areas that want a senior person close to the operational detail.",
        "Tourism, trades, professional services, agencies, gyms, clinics, farms, and local operators that need practical systems rather than AI theatre.",
        "Businesses that prefer local discovery or training sessions but still want remote-friendly implementation.",
        "Teams that want practical AI implementation and training from the same partner.",
      ]}
      outcomes={[
        "A clear AI opportunity map showing what is worth building first and what should wait.",
        "Working automations, agents, workflows, or internal tools built around your existing systems, including email, CRM, documents, spreadsheets, forms, and calendars.",
        "Approval gates, logging, fallback paths, and owner handoff so the system can be trusted.",
        "Hands-on training and documentation so the team knows how to use, review, and improve what has been built.",
        "A practical rollout plan for in-person workshops, remote delivery, or a blend of both depending on the team.",
      ]}
      process={[
        {
          title: "Local or remote discovery",
          description:
            "We use the format that fits the work: an in-person Cornwall workshop, remote call, async workflow review, or a mix.",
        },
        {
          title: "Build what matters",
          description:
            "We focus on workflows where AI can save time, improve quality, make money, or remove operational drag for the actual team doing the work.",
        },
        {
          title: "Train and hand off",
          description:
            "We leave your people with the system, the context, and the confidence to keep using it.",
        },
      ]}
      faq={[
        {
          question: "Do you only work with Cornwall businesses?",
          answer:
            "No. Quilliam AI is based in Cornwall and works UK-wide. Cornwall and South West businesses can use in-person sessions where useful, but most delivery can happen remotely.",
        },
        {
          question: "Can you come to our office?",
          answer:
            "Yes, where it makes sense for discovery, training, or rollout. Ongoing implementation work is usually faster and more cost-effective remotely.",
        },
        {
          question: "What kind of Cornwall businesses are a good fit?",
          answer:
            "Any Cornwall business with repeated admin, customer follow-up, reporting, document handling, knowledge work, or operational handoffs can be a fit. The industry matters less than whether there is real work worth improving.",
        },
        {
          question: "Do you build with n8n and existing business tools?",
          answer:
            "Yes. Where it fits the job, we use tools like n8n, APIs, forms, spreadsheets, CRM systems, email, documents, and AI models such as Claude or ChatGPT. The build depends on the workflow, not on forcing one stack into every business.",
        },
      ]}
      relatedLinks={[
        {
          href: "/service-areas",
          label: "Where we work",
          description: "Cornwall-based, UK-wide and remote delivery.",
        },
        {
          href: "/ai-consultant-uk",
          label: "AI consultant UK",
          description: "Broader UK AI consulting and implementation support.",
        },
        {
          href: "/contact",
          label: "Ask about Cornwall delivery",
          description: "Check whether in-person or remote delivery fits.",
        },
      ]}
    />
  );
}
