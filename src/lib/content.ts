export const siteConfig = {
  name: "Quilliam AI",
  legalName: "Quilliam AI Ltd",
  tagline: "AI education and implementation",
  description:
    "Quilliam AI is a UK AI agency. We teach your team how to use AI properly, and we build the automations, agents, and tools that save you hours every week. Based in Cornwall, working UK-wide and remote.",
  url: "https://quilliam.ai",
  whatsapp: "447593121621",
  phone: "+447593121621",
  phoneDisplay: "07593 121 621",
  email: "levi@quilliam.ai",
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
  // Founder photo path — add the image to /public and set this path (e.g. "/founder.jpg")
  founderImage: "" as string,
} as const;

/** Build a WhatsApp click-to-chat URL with a pre-filled message. */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { name: "Services", href: "/#services" },
  { name: "How It Works", href: "/#process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const serviceLinks = [
  { name: "AI Education", href: "/services/ai-training" },
  { name: "AI Implementation", href: "/services/ai-automation" },
  { name: "Digital Services", href: "/services/digital-services" },
] as const;

export const services = [
  {
    slug: "ai-training",
    title: "AI Education",
    subtitle: "Training, workshops, knowledge systems",
    description:
      "Hands-on workshops for you and your team. Practical AI skills your people can use the next day — not theory, not slides. Plus AI knowledge systems (Claude Code + Obsidian \"Company Brain\") that compound over time so your team gets more productive every month.",
    features: [
      "In-person or remote workshops",
      "Role-tailored training, not generic slides",
      "Covers ChatGPT, Claude, and the tools that matter",
      "Optional knowledge-system setup for ongoing use",
    ],
    outcome: "Your team using AI confidently in their actual work",
  },
  {
    slug: "ai-automation",
    title: "AI Implementation",
    subtitle: "Automation, agents, tools built for you",
    description:
      "We build the AI systems that run while you work. Custom automations, AI agents, workflow integrations, and tools tailored to your business. You tell us the problem, we ship the solution — then we maintain it so you never have to think about it.",
    features: [
      "Custom AI automations and agents",
      "n8n workflows and API integrations",
      "ChatGPT / Claude custom tools for your team",
      "Ongoing support, monitoring, and maintenance",
    ],
    outcome: "Hours back every week on work that runs itself",
  },
  {
    slug: "digital-services",
    title: "Digital Services",
    subtitle: "Websites, brand, content",
    description:
      "Everything else your business needs online: websites, SEO, Google Business Profile, content production. The digital foundation that supports your AI work — because a brilliant AI system behind a broken website still loses customers.",
    features: [
      "Professional websites with SEO built in",
      "Local search and Google Business Profile",
      "Content production and brand consistency",
      "Hosting and ongoing maintenance",
    ],
    outcome: "A professional online presence that works alongside your AI",
  },
] as const;

export const sprintSteps = [
  {
    number: "01",
    title: "We Listen",
    description:
      "A focused session where we understand your business, your team, and where you want AI to help. No jargon. No sales pitch. One clear conversation.",
  },
  {
    number: "02",
    title: "We Teach or Build",
    description:
      "We recommend education, implementation, or both — whatever fits. If it's training, we run it tailored to your team. If it's building, we ship the first version fast.",
  },
  {
    number: "03",
    title: "You Run With It",
    description:
      "You get skills and systems you can actually use. We document everything, hand it over, and provide ongoing support when you need it. No lock-in. No dependency.",
  },
] as const;

export const featuredEngagement = {
  slug: "vetvision",
  label: "Example engagement",
  industry: "AI SaaS (University of Nottingham spin-out)",
  hero: {
    title: "Education and Implementation,",
    titleAccent: "In Parallel, On a Day-Rate.",
    description:
      "VetVision AI is one example of the work we do. It's a University of Nottingham spin-out building veterinary computer vision AI. Over a day-a-week engagement we're training their team on practical AI use, consolidating their brand, producing content grounded in their clinical expertise, and automating customer onboarding with n8n. Most clients use one or two of these workstreams — VetVision happens to use them all.",
  },
  workstreams: [
    {
      problem: "Team wanted to use AI day-to-day but didn't know where to start",
      solution:
        "Hands-on role-specific training. Founder, GTM, and engineering each got sessions tailored to their actual work — not a generic seminar.",
    },
    {
      problem: "Two overlapping brands diluting each other in the market",
      solution:
        "Consolidated Vet Vision AI + EquiConnect into one coherent brand surface — site, decks, outreach, social. One voice, one identity.",
    },
    {
      problem: "Customer onboarding eating the GTM lead's week",
      solution:
        "n8n workflows that take a signed contract to a live account without manual chasing. Documented so their team can maintain it.",
    },
  ],
  client: {
    business: "VetVision AI",
    location: "University of Nottingham spin-out",
    owner: "James, Head of GTM",
    quote:
      "Quilliam AI is the rare agency that does both sides — they trained our team on AI tools AND built the automations we needed. One engagement instead of three.",
    stats: {
      primary: "3",
      primaryLabel: "workstreams in parallel",
      secondary: "1 day/wk",
      secondaryLabel: "engagement cadence",
    },
  },
} as const;

export const faqs = [
  {
    question: "What is the free AI Audit?",
    answer:
      "Quilliam AI's free AI Audit is a focused session where we look at how your business actually runs, talk to you about where AI could help, and give you a clear, practical recommendation. We ask about your team, your workflows, and the tasks that eat the most time — then we show you exactly which AI tools, training, or automations would move the needle for you specifically. It's not a strategy deck, it's not a sales pitch, and there is no commitment to work with us afterwards. You walk away with a concrete plan you can act on, whether we end up working together or not. Most audits take 30 to 60 minutes and can be run in-person in Cornwall or remotely anywhere in the UK.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "Quilliam AI works with UK businesses of all shapes and sizes — small businesses, startups, agencies, charities, and teams inside larger organisations. What our clients have in common is not their industry or size, it's a genuine desire to use AI properly rather than either ignoring it or throwing money at generic ChatGPT subscriptions and hoping something sticks. We've worked with university spin-outs, fitness studios, professional services firms, and creative agencies. The through-line is that every engagement starts with understanding the business first and applying technology second, which is why the free AI Audit is always the right place to start.",
  },
  {
    question: "Do you do AI training, AI implementation, or both?",
    answer:
      "Both — and we encourage most clients to do both because they reinforce each other. AI Education means hands-on workshops and training where your team learns to use tools like ChatGPT, Claude, and custom agents in their actual work — no theory, no slides, just practical skills people can apply the next day. AI Implementation means we build the automations, agents, workflows, and custom tools your business needs — we do the work, you get the outcomes. Some clients come to us for training only because they want to build the skills internally; others come for implementation only because they want the systems without learning the details; most end up doing both in sequence or parallel. The free AI Audit is where we figure out which mix is right for you.",
  },
  {
    question: "How is Quilliam AI different from other AI agencies?",
    answer:
      "Two differences. First, we do education AND implementation under one roof, which most AI agencies don't — they either run workshops and leave, or they build systems and bill you forever. We believe teaching your team to use AI and building AI systems for your business are two halves of the same job, and doing both together is cheaper and more durable than doing them separately. Second, every engagement is handoff-first: the deliverable is not a report or a bespoke framework that only we can maintain, it's a skill or system your team actually owns. We use industry-standard tools and document everything as we go. If Quilliam AI disappeared tomorrow, our clients would still have working skills, working systems, and the ability to extend them.",
  },
  {
    question: "What happens after the AI Audit?",
    answer:
      "After your Quilliam AI Audit you get a clear recommendation on the highest-impact next step for your business — training, implementation, or a mix of the two — along with honest pricing (day-rate consulting, typically £300–£400 per day, with clear scoping for any fixed-price engagements). If you want to go ahead we can usually start within a couple of weeks, and most education engagements deliver their first session within the first visit while implementation engagements ship a first working version by visit two. Every engagement includes documentation and a handoff so your team can run with what we build. If you decide not to proceed that is completely fine — you still walk away with the plan and can come back when the timing is right.",
  },
] as const;
