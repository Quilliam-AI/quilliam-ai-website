import type { Metadata } from "next";
import {
  GraduationCap,
  Users,
  Monitor,
  MessageCircle,
  Clock,
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { CircuitPattern } from "@/components/shared/pattern-overlay";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { FadeIn } from "@/components/shared/fade-in";
import {
  ServiceJsonLd,
  ServiceHero,
  ProcessSteps,
  ServiceFaqSection,
  OtherServicesSection,
  ServiceCta,
} from "@/components/services/shared";

export const metadata: Metadata = {
  title: "AI Education — Training, Workshops & Knowledge Systems",
  description:
    "Hands-on AI training and workshops for UK teams. Learn ChatGPT, Claude, and custom AI tools in your actual work. Optional Obsidian Company Brain setup. From £300/day. Free intro session.",
  alternates: {
    canonical: "/services/ai-training",
  },
  openGraph: {
    title: "AI Education — Training, Workshops & Knowledge Systems | Quilliam AI",
    description:
      "Hands-on AI training and workshops for UK teams. Learn ChatGPT, Claude, and custom tools in your actual work. Optional knowledge-system setup.",
    url: "/services/ai-training",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "AI Education — Training, Workshops & Knowledge Systems | Quilliam AI",
    description:
      "Hands-on AI training and workshops for UK teams. Learn ChatGPT, Claude, and custom tools in your actual work.",
  },
};

const trainingFaqs = [
  {
    question: "Is the intro AI training session really free?",
    answer:
      "Yes. Our introductory training session is completely free, runs for 30–60 minutes, and has no commitment attached. We believe the best way to show you what AI can do for your team is to demonstrate it using your actual work, live, in front of you. If you want to go further after that session we move to paid day-rate training at £300–£400/day, but most people get real value from the free intro alone.",
  },
  {
    question: "What should my team bring to the training?",
    answer:
      "Laptops or tablets, and real examples of tasks they do repeatedly. Customer emails they spend hours on, proposals they rewrite every week, reports they hate compiling, content they wish they had time to publish. We use your real work as the training material so your team leaves with skills they can apply the next day rather than generic examples from a seminar.",
  },
  {
    question: "Can you train my whole team or just individuals?",
    answer:
      "Both. We run 1-to-1 sessions for founders, managers, or specific roles, and group workshops for teams up to around 10 people. For larger groups we recommend splitting into role-based sessions (sales, operations, engineering, marketing) rather than training everyone together — the examples and tools are different for each, and tailoring the training is what makes it stick.",
  },
  {
    question: "Do I need any technical experience to benefit?",
    answer:
      "Not at all. Our training is designed for non-technical people and starts from the basics — we assume nothing. If you can send an email, you can use AI tools properly with an hour of tailored training. Technical people also benefit from our sessions because we cover the nuances of prompting, context management, and tool integration that most online tutorials skip.",
  },
  {
    question: "What is a \"Company Brain\" and is it part of training?",
    answer:
      "A Company Brain is an optional add-on: we set up an Obsidian vault as the single source of truth for your team's knowledge (meeting notes, decisions, playbooks, customer research), then configure Claude Code on top so anyone on the team can ask questions in natural language and get answers grounded in your actual company knowledge instead of generic internet responses. It's a concrete, compounding system — every meeting and every new doc makes it smarter. We include it in the AI Education service because once your team is trained, a Company Brain is the most valuable thing you can give them.",
  },
];

const whatYouLearn = [
  {
    icon: MessageCircle,
    title: "Use AI in your actual work",
    description:
      "Write proposals, emails, content, reports, and customer responses in a fraction of the time — using your own work as the training material.",
  },
  {
    icon: Monitor,
    title: "Pick the right tool for the job",
    description:
      "ChatGPT vs Claude vs Gemini vs the built-in AI in your existing tools. We cut through the noise and show you which to use when.",
  },
  {
    icon: Users,
    title: "Prompt like a pro",
    description:
      "The difference between a useless AI answer and a brilliant one is almost always how you asked. We teach the patterns that actually work.",
  },
  {
    icon: Clock,
    title: "Save hours every week",
    description:
      "Walk away with 3 to 5 real workflows you can use immediately. Most people save 5+ hours in their first week after training.",
  },
  {
    icon: BrainCircuit,
    title: "Optional: AI Knowledge Systems",
    description:
      "Obsidian + Claude Code \"Company Brain\" with per-role agents. Your team's knowledge becomes searchable and compounds over time.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing support",
    description:
      "Cheat sheets, prompt libraries, and a Slack or email channel for when you get stuck. Training doesn't stop when the session ends.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "We chat",
    description:
      "A quick call to understand your business, your team, and where you're currently spending the most time on tasks AI could help with.",
  },
  {
    number: "02",
    title: "We tailor",
    description:
      "We build the training around your real tasks. No generic slides. Every example comes from your industry and your actual workflow.",
  },
  {
    number: "03",
    title: "We train",
    description:
      "A hands-on session where you and your team work alongside us. By the end you'll have used AI tools to complete real tasks from your business.",
  },
  {
    number: "04",
    title: "You practise",
    description:
      "We leave you with a cheat sheet, a prompt library, and ongoing support. Optional Company Brain setup if you want knowledge systems too.",
  },
];

export default function AiTrainingPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in AI training for my team.");

  return (
    <>
      <ServiceJsonLd
        slug="ai-training"
        name="AI Education — Training, Workshops & Knowledge Systems"
        description="Hands-on AI training and workshops for UK teams. Learn ChatGPT, Claude, and custom AI tools in your actual work. Optional Obsidian Company Brain setup."
        serviceType="AI Training"
        price="0"
        offerDescription="Free introductory session; paid training from £300–£400/day"
        faqs={trainingFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "AI Education", href: "/services/ai-training" }]} />
      <WebPageJsonLd
        path="/services/ai-training"
        name="AI Education — Training, Workshops & Knowledge Systems | Quilliam AI"
        description="Hands-on AI training and workshops for UK teams. Learn ChatGPT, Claude, and custom tools in your actual work. Optional Company Brain setup. Free intro session."
        datePublished="2026-04-11"
        dateModified="2026-04-11"
      />

      <ServiceHero
        pattern={<CircuitPattern className="text-emerald-400" />}
        icon={GraduationCap}
        badge="AI Education"
        titleLine1="Teach your team"
        titleLine2="to use AI properly."
        description="Most teams know AI matters but have no idea where to start. Our hands-on workshops show you and your team exactly how to use ChatGPT, Claude, and the right custom tools in your actual daily work. No slides. No theory. Just practical skills you can use the same day. Optional Obsidian Company Brain setup if you want a knowledge system that compounds over time."
        ctaText="Book a Free Session"
        whatsappHref={whatsappHref}
        trustBadges={["Free intro session", "In-person or remote", "Role-tailored"]}
      />

      {/* What you will learn */}
      <section id="learn" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              What you&apos;ll learn
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              Practical AI skills for real work
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouLearn.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800/60 hover:border-stone-700 transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/50 flex items-center justify-center mb-5">
                    <item.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        label="How it works"
        heading="From booking to AI-confident in 4 steps"
        steps={processSteps}
      />

      {/* Who it is for */}
      <section id="audience" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                Who this is for
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
                Any team that wants AI to actually stick
              </h2>
              <p className="mt-6 text-base text-stone-400 leading-relaxed">
                You do not need to be technical. You do not need to know what
                a &ldquo;prompt&rdquo; is. If you can send an email, you can
                use AI properly with an hour of tailored training. Our sessions
                are built for real people doing real work, not for developers
                who already know their way around an API.
              </p>
              <p className="mt-4 text-base text-stone-400 leading-relaxed">
                We&apos;ve trained founders, ops managers, gym owners,
                accountants, consultants, GTM leads, and creative directors.
                The tools are largely the same. The applications are specific
                to your team.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  "Teams who keep hearing about AI but don't know where to start",
                  "Managers tired of repetitive admin and content work",
                  "Businesses who tried ChatGPT once and thought it wasn't useful",
                  "Teams already using AI but wanting to get real value from it",
                  "Founders who want to roll AI out across the whole team at once",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-stone-950 border border-stone-800/60">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tools we cover */}
      <section id="tools" className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Tools we cover
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              The AI tools that actually matter
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed max-w-[56ch]">
              We do not waste time on niche tools nobody uses. We focus on
              the platforms that deliver the most value for your team right
              now — and we show you how to pick between them based on the
              task.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "ChatGPT",
                use: "Writing, drafting, customer replies, quick research",
                detail: "The most versatile everyday AI tool. We show you how to use it for tasks that actually matter to your work.",
              },
              {
                name: "Claude",
                use: "Long documents, analysis, nuanced writing, planning",
                detail: "Better than ChatGPT for complex thinking, longer content, and work where tone and precision matter. We cover when to use each tool.",
              },
              {
                name: "Tailored agents + tools",
                use: "Custom workflows, knowledge systems, role-specific agents",
                detail: "Claude Code, per-role agents, the Obsidian Company Brain, and any industry-specific tools that match your team's work.",
              },
            ].map((tool, i) => (
              <FadeIn key={tool.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800/60 h-full">
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                  <p className="mt-2 text-xs text-emerald-400 uppercase tracking-wider">
                    {tool.use}
                  </p>
                  <p className="mt-4 text-sm text-stone-400 leading-relaxed">
                    {tool.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ServiceFaqSection heading="AI Education Questions" faqs={trainingFaqs} />

      <OtherServicesSection
        currentSlug="ai-training"
        heading="After training, ready to build?"
        sectionBg="bg-stone-950"
        cardBg="bg-stone-900"
      />

      <ServiceCta
        heading="Ready to train your team on AI?"
        description="Book a free session. We'll show you what AI can do for your team in 30–60 minutes, using your actual work. No commitment."
        ctaText="Book a Free Session"
        tagline="Based in Cornwall. Training teams across the UK and remote."
        whatsappHref={whatsappHref}
        sectionBg="bg-stone-900"
      />
    </>
  );
}
