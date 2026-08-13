export const siteConfig = {
  name: "Quilliam AI",
  legalName: "Quilliam AI Ltd",
  tagline: "AI consulting, training and implementation for UK businesses",
  description:
    "Quilliam AI provides AI opportunity analysis, team training and implementation services to UK businesses.",
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
    title: "Assess current processes",
    description:
      "We review recurring administration, follow-up, customer enquiries, reporting and handovers to identify measurable cost or delay.",
    output: "AI opportunity assessment",
  },
  {
    number: "02",
    title: "Define the first project",
    description:
      "We select a suitable process and agree the scope, responsibilities, controls and success measures before implementation.",
    output: "Defined project scope",
  },
  {
    number: "03",
    title: "Implement and test",
    description:
      "We integrate the workflow with the agreed tools and data, then test it against representative examples before release.",
    output: "Tested AI workflow",
  },
  {
    number: "04",
    title: "Train and hand over",
    description:
      "We train the relevant staff to operate the system, review its output and follow the agreed maintenance process.",
    output: "Training and handover documents",
  },
] as const;

export const services = [
  {
    id: "opportunity",
    title: "AI Opportunity Analysis",
    kicker: "For owners",
    description:
      "We assess where AI can improve a business process and recommend the appropriate first action.",
    outcomes: [
      "A prioritised list of AI opportunities",
      "A recommendation to train, implement or defer",
      "Defined risks, controls and owners",
      "A proposed scope for the first project",
    ],
  },
  {
    id: "adoption",
    title: "Team Training",
    kicker: "For staff",
    description:
      "We train staff to use AI in routine work, based on their roles, responsibilities and current processes.",
    outcomes: [
      "Role-specific training",
      "Prompt, policy and process guidance",
      "Rules for permitted and restricted use",
      "A consistent method for reviewing AI output",
    ],
  },
  {
    id: "agents",
    title: "AI Implementation",
    kicker: "For owners and operations teams",
    description:
      "We design and implement AI workflows, automations and internal tools for agreed business processes.",
    outcomes: [
      "Lead intake, qualification and follow-up",
      "Customer support triage and draft replies",
      "Research, reporting and briefing workflows",
      "Administration across email, documents, CRM and spreadsheets",
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
  "CRM data maintenance and next actions",
  "Document receipt and data extraction",
] as const;

export const fitSignals = [
  {
    title: "The process recurs",
    description:
      "The same type of email, decision, report, triage, update or handover occurs regularly.",
  },
  {
    title: "The process has defined rules",
    description:
      "Relevant examples, policies, constraints or decision patterns are available for review and testing.",
  },
  {
    title: "An accountable owner is appointed",
    description:
      "A named person can approve, test and maintain the workflow after release.",
  },
  {
    title: "The current cost is measurable",
    description:
      "Time, delay, missed follow-up or inconsistent quality can be measured against an agreed baseline.",
  },
] as const;

export const sprintSteps = bridgeSteps;

export const faqs = [
  {
    question: "What services does Quilliam AI provide?",
    answer:
      "Quilliam AI assesses suitable uses of AI, implements agreed workflows and tools, and trains the relevant staff to operate them.",
  },
  {
    question: "Do you provide advisory and implementation services?",
    answer:
      "We provide advisory and implementation services. A typical engagement may include process assessment, system design, implementation, controls, testing, training and documented handover.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with small and growing UK businesses where recurring administration, owner dependencies or manual follow-up present a defined opportunity. An internal AI team is not required.",
  },
  {
    question: "What is the typical delivery period for a pilot?",
    answer:
      "A focused workflow can often reach pilot stage within several weeks. Timing depends on scope, data access, system dependencies and the required controls. We confirm the delivery plan before work begins.",
  },
  {
    question: "What should we budget for AI work?",
    answer:
      "We quote against an agreed scope, taking account of the process, data, systems, risk and handover requirements. As general guidance, training usually starts from £500. Small implementation projects may cost approximately £2,000 to £3,000. Medium projects may range from £5,000 to £50,000. Larger programmes are usually above £50,000. We provide a written scope and fee before paid work begins.",
  },
  {
    question: "How do you control AI-related risk?",
    answer:
      "We agree controls according to the process and risk. These may include restricted permissions, limited data access, human approval, test cases, audit logs, fallback procedures and named owners.",
  },
  {
    question: "Where are you based?",
    answer:
      "Quilliam AI is based in Cornwall and works throughout the UK, including remote delivery. In-person assessment, training and implementation sessions are available where agreed.",
  },
] as const;
