export const siteConfig = {
  name: "Quilliam AI",
  legalName: "Quilliam AI Ltd",
  // The H1 is set in hero.tsx. This short line is used in OG images,
  // metadata, and footer surfaces.
  tagline: "Outcome-led AI implementation. Built, measured, owned.",
  description:
    "Quilliam AI installs AI systems inside owner-led UK businesses, tied to measurable outcomes like hours saved, faster lead response, reduced admin backlog, and cleaner reporting. Strategy, systems, and training. Fixed setup fees, open stack, no lock-in.",
  url: "https://quilliam.ai",
  whatsapp: "447593121621",
  phone: "+447593121621",
  phoneDisplay: "07593 121 621",
  email: "levi@quilliam.ai",
  // Cal link — used as a soft secondary CTA. Note: cal.eu (Cal.com EU
  // instance), not cal.com.
  calLink: "https://cal.eu/levi-quilliam/discovery",
  location: "Cornwall, UK",
  // Registered office of Quilliam AI Ltd (Companies House)
  registeredOffice: {
    street: "25 Red Cove Close",
    locality: "St. Eval",
    region: "Wadebridge",
    postalCode: "PL27 7GB",
    country: "GB",
  },
  // Social/profile links for schema.org sameAs — add URLs only when the profiles exist and are public
  socialLinks: [] as string[],
  // Companies House registration — Quilliam AI Ltd, incorporated 2026-04-11
  companyNumber: "17151006" as string,
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/17151006",
  // ICO data protection registration — Quilliam AI Ltd, registered 2026-04-28
  icoRegistrationNumber: "ZC134964" as string,
  icoRegistrationUrl: "https://ico.org.uk/ESDWebPages/Entry/ZC134964",
  // Founder photo path (Levi). Used in hero, about-preview, and about page.
  founderImage: "/founder-levi.jpeg" as string,
} as const;

/** Build a WhatsApp click-to-chat URL with a pre-filled message. */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { name: "Outcomes", href: "/#outcomes" },
  { name: "Workflow", href: "/#automation" },
  { name: "Method", href: "/#process" },
  { name: "Offers", href: "/#services" },
  { name: "About", href: "/about" },
] as const;

export const serviceLinks = [
  { name: "AI Opportunity Mapping Call", href: "/book" },
  { name: "Outcome Sprint", href: "/#services" },
  { name: "Fixed AI System Build", href: "/#services" },
  { name: "Monthly Optimisation", href: "/#services" },
] as const;

export const stePillars = [
  {
    letter: "01",
    title: "Strategy",
    subtitle: "Pick the outcome before the tools",
    description:
      "We start with the business result, not a model demo. The first system is chosen against a simple commercial test: will this save time, speed up response, clear backlog, improve conversion, or make reporting cleaner?",
    bullets: [
      "Opportunity map scored on value and delivery risk",
      "One or two metrics agreed before build",
      "Clear first system, not a generic AI roadmap",
    ],
  },
  {
    letter: "02",
    title: "Systems",
    subtitle: "Build the workflow that pays its way",
    description:
      "The work turns into something live: an agent, automation, internal tool, reporting flow, or customer-facing workflow. It runs on your stack, with a human approval gate where the risk calls for one.",
    bullets: [
      "Fixed setup/build fee agreed up front",
      "Open stack: Next.js, n8n, Claude, APIs",
      "Documented, handoff-ready, no proprietary lock-in",
    ],
  },
  {
    letter: "03",
    title: "Training",
    subtitle: "Make adoption part of the build",
    description:
      "AI only pays back when the team uses it. We train the people who will run the system, write the runbooks, and keep measuring what changed after launch.",
    bullets: [
      "Live training mapped to the workflow",
      "Runbooks your team can actually follow",
      "Monthly optimisation if the system earns it",
    ],
  },
] as const;

export const services = [
  {
    slug: "ai-opportunity-mapping",
    title: "AI Opportunity Mapping Call",
    subtitle: "Free first step",
    price: "Free",
    duration: "30 minutes",
    description:
      "A focused call to find the first AI system worth building. We look at where time leaks, where leads slow down, where admin piles up, and what metric would make implementation worth doing.",
    features: [
      "Map one or two high-friction workflows",
      "Identify the most likely first AI system",
      "Agree what success would need to look like",
      "Leave with a clear next step, even if that is not us",
    ],
    outcome:
      "A ranked first opportunity and a sensible view of whether AI implementation is worth pursuing now.",
  },
  {
    slug: "outcome-sprint",
    title: "Outcome Sprint",
    subtitle: "Baseline, scope, first build",
    price: "£3k-£10k",
    duration: "2-4 weeks",
    description:
      "A fixed-fee sprint to map the workflow, agree the baseline, and build the first useful system. Good for owner-led businesses that want proof through working software rather than another strategy document.",
    features: [
      "Baseline agreed before build",
      "One or two success metrics tracked",
      "Working agent, automation, or internal tool",
      "Optional performance bonus if the target is beaten",
    ],
    outcome:
      "A live AI system tied to a measurable business outcome: hours saved, faster response, reduced backlog, or cleaner reporting.",
  },
  {
    slug: "fixed-ai-system-build",
    title: "Fixed AI System Build",
    subtitle: "One named deliverable",
    price: "Fixed quote",
    duration: "4-16 weeks",
    description:
      "A larger fixed-scope build for a specific operational result: lead handling, inbox triage, CRM workflow, reporting system, content engine, onboarding flow, or AI-native website.",
    features: [
      "Named deliverable, fixed scope, fixed fee",
      "Your stack underneath, no black-box platform",
      "Human approval gates where judgment matters",
      "Documentation, source, and handoff included",
    ],
    outcome:
      "A production-ready AI system your team can own, run, and improve.",
  },
  {
    slug: "monthly-optimisation",
    title: "Monthly Optimisation",
    subtitle: "Improve what is live",
    price: "Monthly retainer",
    duration: "After launch",
    description:
      "Once a system is live, we keep it useful. We review adoption, tune prompts and workflows, add the next integration, and report against the metrics agreed before the build.",
    features: [
      "Monthly performance and adoption review",
      "Small improvements shipped continuously",
      "Training refreshes as the workflow changes",
      "Next opportunity selected from the live backlog",
    ],
    outcome:
      "The system keeps paying its way instead of becoming another abandoned tool.",
  },
] as const;

export const sprintSteps = [
  {
    number: "01",
    title: "Map the outcome",
    description:
      "We identify the workflow where AI has a realistic chance of paying back: admin backlog, lead response time, reporting time, booking rate, handoff quality, or hours saved.",
  },
  {
    number: "02",
    title: "Agree the baseline",
    description:
      "Before anything gets built, we agree the current state and one or two metrics to track. No vague transformation claims. Just a clear before-and-after.",
  },
  {
    number: "03",
    title: "Build the first system",
    description:
      "We ship the agent, automation, tool, or workflow. Human approval stays in the loop where needed. The system is documented while it is built, not after everyone forgets how it works.",
  },
  {
    number: "04",
    title: "Train and optimise",
    description:
      "Your team learns how to run it, what to check, and when to escalate. After launch, optimisation focuses on adoption and the metric, not shiny extras.",
  },
] as const;

export const builtForVerticals = [
  { name: "Professional services", anchor: "professional-services" },
  { name: "Healthcare", anchor: "healthcare" },
  { name: "Hospitality", anchor: "hospitality" },
  { name: "Real estate", anchor: "real-estate" },
  { name: "Education", anchor: "education" },
  { name: "Local services", anchor: "local-services" },
  { name: "B2B teams", anchor: "b2b-teams" },
] as const;

export const featuredEngagement = {
  label: "Proof",
  industry: "University spin-out · regulated healthcare",
  hero: {
    title: "A regulated healthcare spin-out —",
    titleAccent: "site, content, and operations shipped in 13 weeks",
    description:
      "Brand consolidation, site rebuild, content engine, and onboarding automations. The useful lesson: AI work only mattered where it removed handoff drag and helped the founders run the business with less manual follow-up.",
  },
  workstreams: [
    {
      problem: "Two overlapping brands splitting trust",
      solution: "Consolidated into one coherent surface with clearer positioning and schema",
    },
    {
      problem: "Content engine dependent on founder bandwidth",
      solution: "SME interview workflow turned expertise into publishable articles",
    },
    {
      problem: "Manual onboarding eating the founders' week",
      solution: "Automated welcome, credential checks, and CRM handoff",
    },
  ],
  stats: {
    primary: "13 weeks",
    primaryLabel: "Start to live",
    secondary: "Fixed price",
    secondaryLabel: "Scope agreed up front",
  },
} as const;

export const faqs = [
  {
    question: "What does outcome-led AI implementation mean?",
    answer:
      "It means the build starts with a measurable business outcome, not a tool shopping list. We agree what should improve before implementation begins: hours saved, lead response time, booking rate, admin backlog, enquiry conversion, reporting time, or another metric that actually matters to the owner. Then we build the smallest useful AI system that can move that number.",
  },
  {
    question: "Is this performance-based AI implementation?",
    answer:
      "Not in the no-win-no-fee sense. That model gets messy because results depend on adoption, data access, team usage, decision speed, sales follow-up, and seasonality. The saner version is fixed setup/build fee, agreed baseline, one or two success metrics, and an optional performance bonus if the system beats the target.",
  },
  {
    question: "What happens on the AI Opportunity Mapping Call?",
    answer:
      "We talk through the work that eats your week, the systems you already use, and the business result you care about. The goal is to identify the first AI system worth building and what success would need to look like. You should leave with a clearer first move, even if the right answer is to wait.",
  },
  {
    question: "What kinds of AI systems do you build?",
    answer:
      "Lead response workflows, inbox triage, CRM handoffs, reporting systems, customer onboarding flows, content engines, internal tools, AI-native websites, and agent workflows with human approval. The shape depends on the metric. We are not trying to sell a platform; we are trying to remove friction from how the business runs.",
  },
  {
    question: "How much does implementation cost?",
    answer:
      "Most first implementation sprints sit between £3k and £10k, depending on scope and integrations. Larger fixed AI system builds are quoted separately. After launch, some clients add a monthly optimisation retainer so the system keeps improving against the agreed metric.",
  },
  {
    question: "How do you measure whether it worked?",
    answer:
      "We agree the baseline before the build. That might be how long a task takes now, how fast leads get a reply, how many enquiries are dropped, how much admin sits in backlog, or how long reporting takes. After launch, the system is reviewed against that measure and tuned based on real usage.",
  },
  {
    question: "Will my team be able to run it without you?",
    answer:
      "That is the point. We build handoff-first: open stack where possible, source and runbooks provided, and live training for the people who will use the workflow. We can stay involved monthly, but you should never be trapped inside a black-box vendor platform.",
  },
  {
    question: "Do you only work with one industry?",
    answer:
      "No. Quilliam AI is for owner-led UK businesses where decisions are close to the work and adoption can actually happen. The common thread is not sector; it is operational drag: too much admin, slow response, messy handoffs, underused data, and a team that needs practical AI systems rather than another abstract strategy session.",
  },
] as const;
