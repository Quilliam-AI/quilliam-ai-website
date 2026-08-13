import type { Metadata } from "next";
import { FocusedServicePage } from "@/components/services/focused-service-page";

export const metadata: Metadata = {
  title: "AI Consultant UK",
  description:
    "UK AI consulting for businesses requiring process assessment, workflow implementation, staff training and documented handover.",
  alternates: { canonical: "/ai-consultant-uk" },
  openGraph: {
    title: "AI Consultant UK | Quilliam AI",
    description:
      "UK AI consulting covering workflow design, implementation, staff training and documented handover.",
    url: "/ai-consultant-uk",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultant UK | Quilliam AI",
    description:
      "AI consulting, workflow implementation and supervised agents for UK businesses.",
  },
};

export default function AiConsultantUkPage() {
  return (
    <FocusedServicePage
      path="/ai-consultant-uk"
      breadcrumb="AI Consultant UK"
      title="AI Consultant UK"
      description="Quilliam AI provides AI assessment, implementation and training services to businesses throughout the UK."
      eyebrow="AI consultant UK"
      h1="AI consulting for UK businesses."
      accent="Defined and accountable."
      intro="Quilliam AI reviews current processes, identifies suitable uses of AI, implements the agreed system and trains the staff responsible for operating it."
      definition="An AI consultant assesses whether AI is suitable for a defined business process and sets out the proposed scope, controls, responsibilities and measures of success. Quilliam AI works with businesses throughout the United Kingdom, including remote teams in London, Manchester, Birmingham, Bristol, Edinburgh, Cardiff, Belfast and Cornwall. Typical processes include lead follow-up, support triage, reporting, document handling, research, internal knowledge and administrative handovers. Where implementation is justified, Quilliam AI designs the workflow, builds the agreed automation or supervised agent, tests it against representative cases and trains the responsible staff. Each engagement includes agreed documentation and handover requirements so that the client can operate and review the system after release."
      serviceType="AI consulting"
      areaServed={{ "@type": "Country", name: "United Kingdom" }}
      bestFor={[
        "Business owners seeking an evidence-based assessment of suitable AI uses.",
        "Operations teams with recurring administration, reporting, customer follow-up, triage or knowledge-management delays.",
        "Teams requiring common rules, reusable workflows and accountable ownership for existing AI tools.",
        "UK businesses seeking direct delivery by the principal consultant.",
        "Remote, hybrid and multi-site teams requiring documented processes and staff training.",
      ]}
      outcomes={[
        "A prioritised assessment of processes where AI may reduce time, cost or inconsistent output.",
        "A recommendation covering implementation, a supervised agent, staff training, data preparation or deferral.",
        "Implementation of agreed AI workflows, agents, knowledge systems, n8n automations, API integrations or internal tools.",
        "Documented controls, training and handover for the staff responsible after release.",
      ]}
      process={[
        {
          title: "Assess the process",
          description:
            "We review the current process against the available tools, data, budget, risk and staff requirements.",
        },
        {
          title: "Define the scope",
          description:
            "We select the first process and define the required context, actions, approvals, owners and success measures.",
        },
        {
          title: "Implement and hand over",
          description:
            "We implement the system, test representative cases, train users and document its operation, review and maintenance requirements.",
        },
      ]}
      faq={[
        {
          question: "What does an AI consultant do?",
          answer:
            "An AI consultant assesses suitable uses of AI, defines the proposed system and its controls, and advises on implementation and staff adoption. Quilliam AI can also implement and hand over the agreed system.",
        },
        {
          question: "Do you provide implementation as well as advice?",
          answer:
            "Yes. Where there is an agreed business case, we implement AI workflows, supervised agents, knowledge systems and internal tools.",
        },
        {
          question: "Can you work with small businesses?",
          answer:
            "Yes. We work with small and growing businesses where owner dependencies, recurring administration or missed follow-up create a measurable issue.",
        },
      ]}
      relatedLinks={[
        {
          href: "/ai-automation-cornwall",
          label: "AI automation Cornwall",
          description: "AI workflow and automation services based in Cornwall.",
        },
        {
          href: "/service-areas",
          label: "Where we work",
          description: "Remote and in-person delivery from Cornwall throughout the UK.",
        },
        {
          href: "/about",
          label: "About Levi",
          description: "Professional background and delivery principles.",
        },
      ]}
    />
  );
}
