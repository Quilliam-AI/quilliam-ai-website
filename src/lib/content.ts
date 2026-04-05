export const siteConfig = {
  name: "Quilliam Digital",
  tagline: "AI for Small Business",
  description:
    "We help UK small businesses use AI to save time, win more customers, and automate repetitive work. Based in Cornwall, working UK-wide. Book a free AI Audit.",
  url: "https://quilliamdigital.com",
  whatsapp: "447593121621",
  phone: "+447593121621",
  phoneDisplay: "07593 121 621",
  email: "levi@quilliamdigital.com",
  location: "Cornwall, UK",
  // Social/profile links for schema.org sameAs — add URLs only when the profiles exist and are public
  socialLinks: [
    "https://www.linkedin.com/company/quilliamdigital",
    "https://g.page/quilliamdigital",
  ],
} as const;

/** Build a WhatsApp click-to-chat URL with a pre-filled message. */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { name: "Services", href: "/#services" },
  { name: "How It Works", href: "/#process" },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/#about" },
] as const;

export const serviceLinks = [
  { name: "AI Training", href: "/services/ai-training" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Digital Services", href: "/services/digital-services" },
] as const;

export const services = [
  {
    slug: "ai-training",
    title: "AI Training",
    subtitle: "Free entry point",
    description:
      "Hands-on workshops for you and your team. Learn to use ChatGPT, Claude, and AI tools to write proposals, create content, and respond to customers in minutes.",
    features: [
      "In-person or remote sessions",
      "1-to-1 or group workshops",
      "No jargon, no fluff",
      "Covers ChatGPT, Claude, and industry tools",
    ],
    outcome: "Your team using AI confidently within one session",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Core service",
    description:
      "We build systems that run while you sleep. Automated quoting, AI receptionists, review management, invoicing, customer follow-ups. We audit, build, and maintain.",
    features: [
      "Workflow audit and optimisation",
      "Custom AI automations",
      "Ongoing support and maintenance",
      "Monthly reporting on time saved",
    ],
    outcome: "10+ hours saved per week on repetitive tasks",
  },
  {
    slug: "digital-services",
    title: "Digital Services",
    subtitle: "Full package",
    description:
      "Websites, SEO, Google Business Profile, booking systems. Your complete online presence, built and managed by people who understand your business.",
    features: [
      "Professional websites",
      "SEO and local search",
      "Google Business Profile management",
      "Booking systems and hosting",
    ],
    outcome: "Customers find you and book without you lifting a finger",
  },
] as const;

export const sprintSteps = [
  {
    number: "01",
    title: "We Audit",
    description:
      "We look at how your business actually runs. Where is the repetitive work? Where are you losing customers? Where is the bottleneck?",
  },
  {
    number: "02",
    title: "We Build",
    description:
      "We pick the highest-impact automation and set it up. Could be automated quoting, review follow-ups, or an AI receptionist.",
  },
  {
    number: "03",
    title: "You Win",
    description:
      "You get hours back. Your customers get faster responses. Your business runs smoother. And you understand exactly what happened.",
  },
] as const;

export const gymVertical = {
  slug: "gyms",
  industry: "Gyms & Fitness",
  hero: {
    title: "Your Gym Runs on Your Energy.",
    titleAccent: "AI Gives You More of It.",
    description:
      "Stop spending hours on member follow-ups, social media, and answering the same questions. We set up AI systems that handle the repetitive work so you can focus on your members.",
  },
  painPoints: [
    {
      problem: "I spend 2 hours a day on Instagram",
      solution:
        "AI generates posts from your phone photos and schedules them. 10 minutes instead of 2 hours.",
    },
    {
      problem: "Members ghost after the first month",
      solution:
        "Automated follow-up sequences when attendance drops. Personal, not spammy.",
    },
    {
      problem: "I answer the same questions 20 times a day",
      solution:
        "AI receptionist handles pricing, class times, and booking enquiries instantly.",
    },
  ],
  caseStudy: {
    business: "K2 Gym",
    location: "Newquay",
    owner: "Dirk Parker",
    quote:
      "I'd been reading about AI for months but by only using ChatGPT I couldn't see how others were getting these crazy results. Levi showed me in one session.",
    stats: {
      hoursSaved: "12+",
      responseTime: "Under 2 minutes",
      period: "per week",
    },
  },
} as const;

export const faqs = [
  {
    question: "What is the free AI Audit?",
    answer:
      "Quilliam Digital's free AI Audit is a focused 30-minute session where we look at how your business actually runs day-to-day and identify the specific tasks where AI and automation would save you the most time. We ask about your workflows, your team size, and where the bottlenecks are — then we show you exactly which tools and automations could help. For example, if you spend two hours a day answering the same customer questions, we might recommend an AI receptionist that handles those enquiries automatically. There is no commitment, no jargon, and no sales pitch. You walk away with a clear, practical recommendation you can act on immediately, whether or not you choose to work with us afterwards.",
  },
  {
    question: "What types of businesses does Quilliam Digital work with?",
    answer:
      "Quilliam Digital works with UK small businesses across a wide range of industries including gyms and fitness studios, trades and construction, hospitality and food service, professional services, retail, and health and wellbeing. Our sweet spot is businesses with 1 to 50 employees that rely on repetitive manual tasks — answering the same enquiries, chasing invoices, managing reviews, following up with leads, or manually posting to social media. If your team is spending hours on work that could be automated, we can almost certainly help. We have worked with gym owners in Cornwall, tradespeople across the South West, and professional services firms UK-wide. The free AI Audit is the best way to find out what is possible for your specific business.",
  },
  {
    question: "What results can I expect from working with Quilliam Digital?",
    answer:
      "Most Quilliam Digital clients save 10 or more hours per week on repetitive tasks after we implement their automations. That time saving comes from faster customer response times (under 2 minutes with an AI receptionist), automated follow-up sequences that bring back lapsed customers, review management that runs without you touching it, and quoting and invoicing that happens in seconds instead of hours. For example, K2 Gym in Newquay saved over 12 hours per week after their first session with us. The exact results depend on your business and which automations we implement, which is why we always start with a free AI Audit to identify your highest-impact opportunities before quoting anything.",
  },
  {
    question: "How is Quilliam Digital different from other AI consultancies?",
    answer:
      "Quilliam Digital focuses exclusively on small businesses with 1 to 50 employees. We are not an enterprise consultancy that charges thousands for a strategy document and then leaves you to figure out the implementation. We do the hands-on work: we audit your workflows, build the automations, train your team, and provide ongoing support. Every project starts with a free AI Audit so you see real value before spending anything. Automation packages start from £500, and most clients see return on investment within the first month. Because our founder Levi works directly with every client, you get senior expertise and personal attention rather than being handed off to a junior team member.",
  },
  {
    question: "What happens after the AI Audit?",
    answer:
      "After your free AI Audit with Quilliam Digital, we give you a clear recommendation on the single highest-impact automation or training for your business. If you want to go ahead, we provide a fixed-price quote with no hidden fees or surprises — automation packages start from £500 depending on complexity. Most automations are designed, built, and live within 1 to 2 weeks, so you see results quickly. We also provide hands-on training so your team understands how everything works and can use the new systems confidently. If you decide not to proceed, that is completely fine — you still walk away with actionable insights and specific recommendations you can implement yourself or come back to later.",
  },
] as const;
