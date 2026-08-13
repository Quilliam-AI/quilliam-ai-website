import type { Metadata } from "next";
import { FocusedServicePage } from "@/components/services/focused-service-page";

export const metadata: Metadata = {
  title: "AI Automation Cornwall",
  description:
    "AI automation services for Cornwall businesses, including defined workflows, supervised agents, staff training and documented handover.",
  alternates: { canonical: "/ai-automation-cornwall" },
  openGraph: {
    title: "AI Automation Cornwall | Quilliam AI",
    description:
      "Cornwall-based AI automation, supervised agents, staff training and documented handover.",
    url: "/ai-automation-cornwall",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Cornwall | Quilliam AI",
    description:
      "AI automation and supervised agent implementation from Cornwall.",
  },
};

export default function AiAutomationCornwallPage() {
  return (
    <FocusedServicePage
      path="/ai-automation-cornwall"
      breadcrumb="AI Automation Cornwall"
      title="AI Automation Cornwall"
      description="Quilliam AI provides AI workflow, automation and supervised agent implementation for businesses in Cornwall and throughout the UK."
      eyebrow="Cornwall AI automation"
      h1="AI automation for Cornwall businesses."
      accent="Defined controls and ownership."
      intro="Quilliam AI is based near Newquay and provides remote and in-person services across Cornwall, the South West and the wider United Kingdom. We assess and implement AI workflows around agreed business processes."
      definition="AI automation applies an AI model within a defined business process to classify information, prepare content, route work or update systems. Quilliam AI works with businesses in Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge and the wider South West. Typical projects cover recurring administration, lead follow-up, reporting, document handling, customer enquiries and internal knowledge. We review the current process, systems, data and risk before proposing an implementation. An agreed solution may use an automated workflow or a supervised agent connected to existing tools. Each project includes appropriate approval requirements, access restrictions, logging, fallback procedures, staff training and documented ownership. Remote delivery is available throughout the UK, with in-person sessions in Cornwall where agreed."
      serviceType="AI automation Cornwall"
      areaServed={{ "@type": "AdministrativeArea", name: "Cornwall" }}
      bestFor={[
        "Cornwall and South West businesses with recurring administration, lead follow-up, reporting, document handling or customer support work.",
        "Owner-led teams in Newquay, Truro, Falmouth, St Austell, Bodmin, Wadebridge and nearby areas requiring direct access to the principal consultant.",
        "Tourism, trades, professional services, agencies, gyms, clinics, farms and other local operators with a defined process for review.",
        "Businesses requiring local assessment or training sessions and remote implementation.",
        "Teams seeking AI implementation and staff training from one provider.",
      ]}
      outcomes={[
        "A prioritised assessment identifying the proposed first project and any required preparation.",
        "Implemented automations, agents, workflows or internal tools connected to agreed systems, which may include email, CRM, documents, spreadsheets, forms and calendars.",
        "Defined approval requirements, logs, fallback procedures and accountable ownership.",
        "Staff training and documentation covering operation, review and agreed improvement procedures.",
        "A delivery plan covering remote work, in-person sessions or a combination of both.",
      ]}
      process={[
        {
          title: "Initial assessment",
          description:
            "The initial assessment may use an in-person Cornwall workshop, a remote meeting, a documented process review or a combination of these methods.",
        },
        {
          title: "Define and implement",
          description:
            "We agree the process, scope, expected benefit, controls, responsibilities and acceptance criteria before implementation.",
        },
        {
          title: "Train and hand over",
          description:
            "We train the responsible staff and provide the agreed operating and handover documents.",
        },
      ]}
      faq={[
        {
          question: "Do you only work with Cornwall businesses?",
          answer:
            "Quilliam AI works with businesses throughout the UK. In-person sessions are available in Cornwall and the South West, and most services can be delivered remotely.",
        },
        {
          question: "Can you come to our office?",
          answer:
            "Yes. In-person sessions can be included for assessment, training or implementation where agreed. Ongoing technical work is usually delivered remotely.",
        },
        {
          question: "Which Cornwall businesses may be suitable?",
          answer:
            "The service may be suitable for a business with recurring administration, customer follow-up, reporting, document handling, knowledge work or operational handovers. Suitability depends on the process, data, risk and expected benefit.",
        },
        {
          question: "Do you build with n8n and existing business tools?",
          answer:
            "Yes. An implementation may use n8n, APIs, forms, spreadsheets, CRM systems, email, documents and AI models such as Claude or ChatGPT. The selected technology depends on the agreed process and requirements.",
        },
      ]}
      relatedLinks={[
        {
          href: "/service-areas",
          label: "Where we work",
          description: "Remote and in-person delivery from Cornwall throughout the UK.",
        },
        {
          href: "/ai-consultant-uk",
          label: "AI consultant UK",
          description: "AI assessment, implementation and training throughout the UK.",
        },
        {
          href: "/contact",
          label: "Cornwall delivery",
          description: "Discuss the appropriate balance of in-person and remote delivery.",
        },
      ]}
    />
  );
}
