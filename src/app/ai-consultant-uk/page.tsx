import type { Metadata } from "next";
import { FocusedServicePage } from "@/components/services/focused-service-page";

export const metadata: Metadata = {
  title: "AI Consultant UK",
  description:
    "Founder-led UK AI consulting for businesses that need practical AI advice, workflow implementation, and team adoption instead of more AI noise.",
  alternates: { canonical: "/ai-consultant-uk" },
  openGraph: {
    title: "AI Consultant UK | Quilliam AI",
    description:
      "Practical UK AI consulting tied to workflow design, implementation, and team handoff.",
    url: "/ai-consultant-uk",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultant UK | Quilliam AI",
    description:
      "Practical AI consulting for UK businesses that want usable workflows and agents.",
  },
};

export default function AiConsultantUkPage() {
  return (
    <FocusedServicePage
      path="/ai-consultant-uk"
      breadcrumb="AI Consultant UK"
      title="AI Consultant UK"
      description="Quilliam AI is a practical UK AI consultant helping businesses understand where AI is useful, build the first workflow, and train the team."
      eyebrow="AI consultant UK"
      h1="A practical AI consultant for UK businesses"
      accent="without the hype."
      intro="Quilliam AI helps UK businesses turn AI interest into working systems. We map the operating drag, design the workflow, build the useful bit, and train your team so the capability stays inside the business."
      definition="An AI consultant for UK businesses should help a team decide where AI is useful, what should be built, what needs human control, and how the organisation will own the result. Quilliam AI works with businesses across the UK, including remote teams in London, Manchester, Birmingham, Bristol, Edinburgh, Cardiff, Belfast, and Cornwall. The work starts with real operations: lead follow-up, support triage, reporting, document handling, research, internal knowledge, and admin handoffs. From there, Quilliam AI designs the workflow, builds supervised automations or agents, trains the users, and documents the handoff. The result is a practical system your team can run, not a strategy deck or a fragile demo."
      serviceType="AI consulting"
      areaServed={{ "@type": "Country", name: "United Kingdom" }}
      bestFor={[
        "Business owners who know AI should help but do not know where to start.",
        "Operators with repeated admin, reporting, customer follow-up, triage, or knowledge-work bottlenecks.",
        "Teams using AI tools individually but lacking shared rules, reusable workflows, or ownership.",
        "UK businesses that want founder-led implementation without a large-agency process.",
        "Remote, hybrid, and multi-site teams that need clear documentation and adoption support.",
      ]}
      outcomes={[
        "A plain-English map of the workflows where AI can save time, improve quality, or remove drag.",
        "A recommendation on whether to build a workflow, supervised agent, training programme, data foundation, or nothing yet.",
        "Implementation support for AI workflows, agents, knowledge systems, n8n automations, API integrations, and lightweight internal tools.",
        "Handoff materials, training, and controls so the team can run the system after launch.",
      ]}
      process={[
        {
          title: "Diagnose the gap",
          description:
            "We compare how work happens today with what AI can realistically do inside your tools, data, risk, budget, and team constraints.",
        },
        {
          title: "Scope the build",
          description:
            "We choose the workflow worth building first and define context, actions, approvals, owners, and success measures.",
        },
        {
          title: "Build and hand off",
          description:
            "We ship the system, test it against real examples, train the users, and document how it should be run, reviewed, and improved.",
        },
      ]}
      faq={[
        {
          question: "What does an AI consultant do?",
          answer:
            "A useful AI consultant helps a business decide where AI is worth using, what should be built, what risks need controlling, and how the team will adopt it. At Quilliam AI, consulting is tied directly to implementation and handoff.",
        },
        {
          question: "Do you only advise or do you build as well?",
          answer:
            "Both. We map the opportunity and then build practical AI workflows, supervised agents, knowledge systems, or internal tools when there is a clear business case.",
        },
        {
          question: "Can you work with small businesses?",
          answer:
            "Yes. Small and growing businesses are often a strong fit because owner bottlenecks, repeated admin, and missed follow-ups are visible and valuable to fix.",
        },
      ]}
      relatedLinks={[
        {
          href: "/ai-automation-cornwall",
          label: "AI automation Cornwall",
          description: "Local AI automation support from Cornwall.",
        },
        {
          href: "/service-areas",
          label: "Where we work",
          description: "UK-wide remote delivery with Cornwall roots.",
        },
        {
          href: "/about",
          label: "About Levi",
          description: "Founder background, experience, and working principles.",
        },
      ]}
    />
  );
}
