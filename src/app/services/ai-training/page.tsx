import type { Metadata } from "next";
import {
  GraduationCap,
  Users,
  Monitor,
  MessageCircle,
  Clock,
  CheckCircle2,
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
  title: "AI Training for Small Businesses | Cornwall & UK-Wide",
  description:
    "Free, hands-on AI training workshops for UK small businesses. Learn to use ChatGPT, Claude, and AI tools to save hours every week. In-person or remote. No jargon.",
  alternates: {
    canonical: "/services/ai-training",
  },
  openGraph: {
    title: "AI Training for Small Businesses | Quilliam Digital",
    description:
      "Free, hands-on AI training workshops for UK small businesses. Learn to use ChatGPT, Claude, and AI tools to save hours every week.",
    url: "/services/ai-training",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "AI Training for Small Businesses | Quilliam Digital",
    description:
      "Free, hands-on AI training workshops for UK small businesses. Learn to use ChatGPT, Claude, and AI tools to save hours every week.",
  },
};

const trainingFaqs = [
  {
    question: "Is the AI training really free?",
    answer:
      "Yes. Our introductory AI training sessions are completely free. We believe the best way to show you what AI can do is to demonstrate it in person. There is no obligation to buy anything afterwards.",
  },
  {
    question: "What do I need to bring to the training?",
    answer:
      "Just a laptop or tablet and examples of tasks you do repeatedly in your business. We will use your real work as the training material so you leave with skills you can use immediately.",
  },
  {
    question: "Can you train my whole team?",
    answer:
      "Absolutely. We run group workshops for teams of up to 10 people. We tailor the session to your industry and the tools your team actually uses day-to-day.",
  },
  {
    question: "Do I need any technical experience?",
    answer:
      "Not at all. Our training is designed for people who have never used AI tools before. We start from scratch and build up to practical, useful skills within a single session.",
  },
  {
    question: "How long is a training session?",
    answer:
      "A standard session runs for 60 to 90 minutes. That is enough time to cover the fundamentals and work through real examples from your business. We can extend for group workshops if needed.",
  },
];

const whatYouLearn = [
  {
    icon: MessageCircle,
    title: "Write better, faster",
    description:
      "Use AI to draft proposals, emails, social media posts, and customer responses in a fraction of the time.",
  },
  {
    icon: Monitor,
    title: "Automate the boring stuff",
    description:
      "Identify which tasks in your business AI can handle, from data entry to scheduling to follow-ups.",
  },
  {
    icon: Users,
    title: "Prompt like a pro",
    description:
      "Learn how to talk to AI tools effectively. The difference between a useless answer and a brilliant one is how you ask.",
  },
  {
    icon: Clock,
    title: "Save hours every week",
    description:
      "Walk away with 3 to 5 AI workflows you can use immediately. Most people save 5+ hours in their first week.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "We chat",
    description:
      "A quick call to understand your business, your team, and where you are currently spending the most time on repetitive work.",
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
      "A hands-on session where you and your team work alongside us. By the end, you will have used AI tools to complete real tasks from your business.",
  },
  {
    number: "04",
    title: "You practise",
    description:
      "We leave you with a cheat sheet and a list of prompts tailored to your work. Plus ongoing support if you get stuck.",
  },
];

export default function AiTrainingPage() {
  const whatsappHref = getWhatsAppUrl("Hi Levi, I'm interested in AI training for my business.");

  return (
    <>
      <ServiceJsonLd
        slug="ai-training"
        name="AI Training for Small Businesses"
        description="Free, hands-on AI training workshops for UK small businesses. Learn to use ChatGPT, Claude, and AI tools to save hours every week."
        serviceType="AI Training"
        price="0"
        offerDescription="Free introductory AI training session"
        faqs={trainingFaqs}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/#services" }, { name: "AI Training", href: "/services/ai-training" }]} />
      <WebPageJsonLd
        path="/services/ai-training"
        name="AI Training for Small Businesses | Cornwall & UK-Wide | Quilliam Digital"
        description="Practical AI training workshops for UK small business teams. Learn ChatGPT, automation tools, and AI strategy — no jargon, no fluff."
        datePublished="2025-03-01"
        dateModified="2026-04-05"
      />

      <ServiceHero
        pattern={<CircuitPattern className="text-emerald-400" />}
        icon={GraduationCap}
        badge="Free AI Training"
        titleLine1="AI Training for"
        titleLine2="UK Small Businesses"
        description="Most business owners know AI is important but have no idea where to start. Our free, hands-on workshops show you exactly how to use tools like ChatGPT and Claude to save hours every week. No slides. No theory. Just practical skills you can use the same day."
        ctaText="Book a Free Session"
        whatsappHref={whatsappHref}
        trustBadges={["Completely free", "In-person or remote", "No commitment"]}
      />

      {/* What you will learn */}
      <section id="learn" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              What you will learn
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              Practical AI skills for your business
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouLearn.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
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
                Built for business owners, not developers
              </h2>
              <p className="mt-6 text-base text-stone-400 leading-relaxed">
                You do not need to be technical. You do not need to know what a &ldquo;prompt&rdquo;
                is. If you can send an email, you can use AI. Our training is specifically
                designed for small business owners and their teams who want to save time
                without learning to code.
              </p>
              <p className="mt-4 text-base text-stone-400 leading-relaxed">
                We have trained gym owners, accountants, plumbers, estate agents, and
                restaurant managers. The tools are the same. The applications are specific
                to your business.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  "Business owners who know AI is important but do not know where to start",
                  "Teams who want to be more productive without hiring more people",
                  "Managers who are tired of repetitive admin work",
                  "Anyone who has tried ChatGPT once and thought it was not that useful",
                  "Businesses already using AI who want to get more out of it",
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
              We do not waste time on niche tools nobody uses. We focus on the platforms
              that deliver the most value for small businesses right now.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "ChatGPT",
                use: "Writing, brainstorming, customer replies, research, content creation",
                detail: "The most versatile AI tool available. We show you how to use it for tasks that actually matter to your business.",
              },
              {
                name: "Claude",
                use: "Long documents, analysis, detailed writing, planning",
                detail: "Better than ChatGPT for complex thinking and longer content. We cover when to use each tool.",
              },
              {
                name: "Industry tools",
                use: "Scheduling, image generation, transcription, automation",
                detail: "Canva AI, Otter, Descript, and others. We pick the tools that match your specific industry.",
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

      {/* Real results */}
      <section id="testimonial" className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Real results
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight">
              K2 Gym, Newquay
            </h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800/60">
                <blockquote className="text-base text-stone-300 leading-relaxed italic">
                  &ldquo;I&rsquo;d been reading about AI for months but by only using ChatGPT
                  I couldn&rsquo;t see how others were getting these crazy results. Levi
                  showed me in one session.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-stone-500">
                  Dirk Parker, Owner &mdash; K2 Gym, Newquay
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800/60 text-center">
                  <span className="block text-3xl font-semibold text-white font-mono">12+</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest mt-1 block">hours saved weekly</span>
                </div>
                <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800/60 text-center">
                  <span className="block text-3xl font-semibold text-white font-mono">&lt;2m</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest mt-1 block">response time</span>
                </div>
                <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800/60 text-center col-span-2">
                  <span className="block text-3xl font-semibold text-emerald-400 font-mono">5.0</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest mt-1 block">Google rating</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ServiceFaqSection heading="AI Training Questions" faqs={trainingFaqs} />

      <OtherServicesSection
        currentSlug="ai-training"
        heading="Ready for more after training?"
        sectionBg="bg-stone-950"
        cardBg="bg-stone-900"
      />

      <ServiceCta
        heading="Ready to learn AI for your business?"
        description="Book a free training session. We will show you what AI can do for your specific business in 60 minutes."
        ctaText="Book a Free Session"
        tagline="Based in Cornwall. Training delivered across the UK."
        whatsappHref={whatsappHref}
        sectionBg="bg-stone-900"
      />
    </>
  );
}
