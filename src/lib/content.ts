export const siteConfig = {
  name: "Quilliam Digital",
  tagline: "AI for Small Business",
  description:
    "We help UK small businesses use AI to save time, win more customers, and stop getting left behind.",
  url: "https://quilliamdigital.com",
  whatsapp: "447593121621",
  email: "levi@quilliamdigital.com",
  location: "Cornwall, UK",
} as const;

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries/gyms" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
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
    {
      problem: "I never ask for reviews",
      solution:
        "Automated review requests at the perfect moment. More 5-star Google reviews without asking.",
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
  demo: {
    title: "Try the AI Receptionist",
    description:
      "This is a live demo of what we built for K2 Gym. Ask about membership, classes, or booking.",
  },
} as const;
