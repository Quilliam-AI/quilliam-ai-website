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
      "A free, focused session where we look at how your business actually runs, find your biggest time-waster, and show you how AI can fix it. No commitment, no jargon — just a practical demonstration of what AI can do for your specific business.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with UK small businesses across a range of industries including gyms, trades, hospitality, professional services, and retail. If you have a team of 1 to 50 people and spend time on repetitive tasks, we can almost certainly help. Our AI Audit is the best way to find out what's possible for your specific business.",
  },
  {
    question: "What results can I expect from working with Quilliam Digital?",
    answer:
      "Most clients save 10 or more hours per week on repetitive tasks after implementation. That includes faster customer response times, automated follow-ups, review management, and quoting. The exact results depend on your business, which is why we start with a free AI Audit to identify your highest-impact opportunities.",
  },
  {
    question: "How is Quilliam Digital different from other AI consultancies?",
    answer:
      "We focus exclusively on small businesses with 1 to 50 employees. We don't sell generic enterprise software or charge thousands for a strategy document. We build practical, working automations and train you to use AI tools yourself. Everything starts with a free AI Audit so you can see the value before spending anything.",
  },
  {
    question: "What happens after the AI Audit?",
    answer:
      "After your AI Audit, we give you a clear recommendation on the highest-impact automation or training for your business. If you want to go ahead, we provide a fixed-price quote with no surprises. Most automations are live within 1 to 2 weeks. If you decide not to proceed, you still walk away with actionable insights you can use immediately.",
  },
] as const;
