export const siteConfig = {
  name: "Quilliam AI",
  legalName: "Quilliam AI Ltd",
  tagline: "Practical AI consulting and implementation for UK businesses",
  description:
    "Quilliam AI helps UK businesses make sense of AI, build useful AI workflows, and train their teams to use them properly.",
  url: "https://quilliam.ai",
  whatsapp: "447593121621",
  phone: "+447593121621",
  phoneDisplay: "07593 121 621",
  email: "levi@quilliam.ai",
  location: "Cornwall, UK",
  registeredOffice: {
    street: "25 Red Cove Close",
    locality: "St. Eval",
    postalTown: "Wadebridge",
    region: "Cornwall",
    postalCode: "PL27 7GB",
    country: "GB",
  },
  socialLinks: [
    "https://maps.app.goo.gl/yfJuc3xMXfkRzHvu8",
    "https://find-and-update.company-information.service.gov.uk/company/17151006",
  ] as string[],
  founderSameAs: ["https://uk.linkedin.com/in/leviquilliam"] as string[],
  googleBusinessProfile: "https://maps.app.goo.gl/yfJuc3xMXfkRzHvu8",
  analytics: {
    googleAnalyticsMeasurementId:
      process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-JWEKS61V3E",
  },
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/17151006",
  companyNumber: "17151006" as string,
  founderImage: "/levi-headshot-circle.png" as string,
} as const;

/** Build a WhatsApp click-to-chat URL with a pre-filled message. */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/#workflows" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const proofLogos = [
  {
    name: "K2 Gym",
    href: "https://k2gymnewquay.co.uk/",
    logo: "/logos/k2-gym-logo.webp",
    width: 417,
    height: 438,
    className: "h-10",
  },
  {
    name: "XGX.ai",
    href: "https://xgx.ai/",
    logo: "/logos/xgx-ai.svg",
    width: 100,
    height: 21,
    className: "h-5 invert",
  },
  {
    name: "Deloitte",
    href: "https://www.deloitte.com/uk/en.html",
    logo: "/logos/deloitte.svg",
    width: 182,
    height: 34,
    className: "h-6",
  },
  {
    name: "Halter",
    href: "https://www.halterhq.com/",
    logo: "/logos/halter.svg",
    width: 150,
    height: 38,
    className: "h-6 invert",
  },
  {
    name: "VetVision AI",
    href: "https://www.vetvisionai.com/",
    logo: "/logos/vetvision-ai.svg",
    width: 193,
    height: 29,
    className: "h-6 md:h-7",
  },
] as const;

export const bridgeSteps = [
  {
    number: "01",
    title: "Find the work worth fixing",
    description:
      "We look at the repeated admin, slow follow-up, customer questions, reporting, and handoffs that already cost time or money.",
    output: "Plain-English AI map",
  },
  {
    number: "02",
    title: "Choose where AI helps",
    description:
      "We pick one useful workflow, decide what AI should do, and agree what should be left alone.",
    output: "Scoped build plan",
  },
  {
    number: "03",
    title: "Build it around your tools",
    description:
      "We connect the workflow to the tools and data your team already uses, then test it against real examples before rollout.",
    output: "Working workflow",
  },
  {
    number: "04",
    title: "Train your team to use it",
    description:
      "We show the people doing the work how to use the tools, check the output, and keep improving the system.",
    output: "Team training and handoff",
  },
] as const;

export const services = [
  {
    id: "opportunity",
    title: "AI Opportunity Analysis",
    kicker: "For owners",
    description:
      "We show you where AI can help, where it cannot, and what to do first without wasting money on random tools.",
    outcomes: [
      "Your best AI opportunities, ranked",
      "What to train, build, or leave alone",
      "Risks, controls, and ownership before work starts",
      "A clear first move instead of tool shopping",
    ],
  },
  {
    id: "adoption",
    title: "Team Training",
    kicker: "For staff",
    description:
      "We train your team to use AI properly in day-to-day work, using examples from their actual roles rather than generic prompt tips.",
    outcomes: [
      "Hands-on training for real roles",
      "Prompt, policy, and process playbooks",
      "Clear rules on what AI can and cannot do",
      "Confidence using AI without guessing",
    ],
  },
  {
    id: "agents",
    title: "AI Implementation",
    kicker: "For owners and operations",
    description:
      "We turn the best opportunities into working workflows, automations, and internal tools your team can own.",
    outcomes: [
      "Lead intake, qualification, and follow-up",
      "Customer support triage and draft replies",
      "Research, reporting, and briefing workflows",
      "Admin between email, docs, CRM, and spreadsheets",
    ],
  },
] as const;

export const agentUseCases = [
  "Inbound lead qualification",
  "Sales follow-up drafting",
  "Customer support triage",
  "Internal knowledge search",
  "Weekly operations reporting",
  "Research and briefing packs",
  "CRM hygiene and next actions",
  "Document intake and extraction",
] as const;

export const fitSignals = [
  {
    title: "You have repeated work",
    description:
      "The same kind of email, decision, report, triage, update, or handoff happens every week.",
  },
  {
    title: "The work has rules",
    description:
      "People use judgement, but there are examples, policies, constraints, or patterns the system can learn.",
  },
  {
    title: "Someone owns the outcome",
    description:
      "A real person can approve, test, improve, and be accountable for the workflow after launch.",
  },
  {
    title: "The cost is visible",
    description:
      "Slow admin, missed follow-ups, inconsistent quality, or overloaded founders are already creating pain.",
  },
] as const;

export const sprintSteps = bridgeSteps;

export const faqs = [
  {
    question: "What does Quilliam AI actually do?",
    answer:
      "We help UK businesses understand where AI is useful, build the workflows or tools that are worth building, and train the team so the work does not depend on one technical person.",
  },
  {
    question: "Do you only advise, or do you implement?",
    answer:
      "Both. Advice without implementation creates more notes. Implementation without clear thinking creates fragile demos. We map the workflow, build the system, add controls, train the team, and hand it over properly.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. Small and growing UK businesses are often a strong fit because repeated admin, owner bottlenecks, and manual follow-up are easy to see and valuable to fix. You do not need an internal AI team before starting.",
  },
  {
    question: "How quickly can we see something working?",
    answer:
      "A focused workflow can usually reach a usable pilot in weeks rather than months. The first build is deliberately narrow: prove the work, test it with real examples, then harden and expand what works.",
  },
  {
    question: "What should we budget for AI work?",
    answer:
      "We quote by scope because useful AI work depends on the workflow, data, systems, risk, and handoff needs. As a guide, training usually starts from £500. Small implementation projects can sit around £2,000-£3,000, medium projects can range from £5,000-£50,000, and larger programmes are usually £50,000+. Every paid engagement is scoped clearly before work starts.",
  },
  {
    question: "How do you stop AI going wrong?",
    answer:
      "We design for supervision. That means limited permissions, scoped access, human approval for risky actions, test examples, logs, fallback paths, and clear owners. The goal is useful help, not reckless automation.",
  },
  {
    question: "Where are you based?",
    answer:
      "Quilliam AI is based in Cornwall and works UK-wide and remote. In-person discovery, workshops, or rollout sessions are available where they genuinely help.",
  },
] as const;
