import type { Metadata } from "next";
import {
  Bot,
  CheckCircle2,
  Clock,
  GitBranch,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { BookingForm } from "@/components/book/booking-form";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { getWhatsAppUrl } from "@/lib/content";

type Intent = "training" | "opportunity" | "either";

function resolveIntent(raw: string | string[] | undefined): Intent {
  if (raw === "training") return "training";
  if (raw === "opportunity") return "opportunity";
  return "either";
}

const INTENT_CONTENT: Record<
  Intent,
  {
    badge: string;
    title: string;
    description: string;
  }
> = {
  training: {
    badge: "Team adoption",
    title: "Book practical AI training for the workflows your team actually runs.",
    description:
      "Use this if the team needs confidence, shared language, and hands-on practice before or during an AI workflow build.",
  },
  opportunity: {
    badge: "AI Opportunity",
    title: "Find the AI workflow worth building first.",
    description:
      "Use this if you want a practical answer on where AI can help, what to build first, and what to ignore for now.",
  },
  either: {
    badge: "First session",
    title: "Work out whether training, workflows, or agents should come first.",
    description:
      "Use this if you know AI should be useful but are not sure where the value sits yet.",
  },
};

export const metadata: Metadata = {
  title: "Book an AI Opportunity Session",
  description:
    "Book an AI opportunity session with Quilliam AI. Find the workflow, automation, or training worth doing first for your UK business.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book an AI Opportunity Session | Quilliam AI",
    description:
      "Find the workflow, automation, or training worth doing first.",
    url: "/book",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an AI Opportunity Session | Quilliam AI",
    description:
      "Find the AI workflow worth building first with Quilliam AI.",
  },
};

const sessionPoints = [
  {
    icon: GitBranch,
    title: "Map the drag",
    description: "We identify repeated work, weak handoffs, and AI-ready processes.",
  },
  {
    icon: Bot,
    title: "Choose the build",
    description: "Workflow, agent, training, data prep, or nothing yet.",
  },
  {
    icon: ShieldCheck,
    title: "Name the controls",
    description: "Approvals, fallback paths, risks, owners, and access boundaries.",
  },
  {
    icon: Clock,
    title: "Leave with next steps",
    description: "Clear recommendation, likely scope, and what I would do first.",
  },
] as const;

interface BookPageProps {
  searchParams: Promise<{ intent?: string | string[] }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;
  const intent = resolveIntent(params.intent);
  const copy = INTENT_CONTENT[intent];
  const whatsappHref = getWhatsAppUrl(
    intent === "training"
        ? "Hi Levi, I want to book practical AI training for my team."
      : intent === "opportunity"
        ? "Hi Levi, I want to book an AI opportunity session."
        : "Hi Levi, I want to book a first AI session.",
  );

  return (
    <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
      <BreadcrumbJsonLd items={[{ name: "Book an AI Opportunity Session", href: "/book" }]} />
      <WebPageJsonLd
        path="/book"
        name="Book an AI Opportunity Session | Quilliam AI"
        description="Book an AI opportunity session with Quilliam AI. Find the workflow, automation, or training worth doing first."
        datePublished="2026-04-11"
        dateModified="2026-05-26"
      />

      <div className="site-grid absolute inset-0 opacity-35" />
      <div className="noise absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
            {copy.badge}
          </p>
          <h1 className="mt-5 max-w-[760px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-paper/68 md:text-lg">
            {copy.description}
          </p>

          <div className="mt-9 hidden gap-3 lg:grid lg:grid-cols-2">
            {sessionPoints.map((point) => (
              <article key={point.title} className="rounded-card border border-paper/10 bg-paper/[0.025] p-4">
                <point.icon size={20} className="text-signal" />
                <h2 className="mt-5 text-lg font-semibold tracking-tight text-paper">
                  {point.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-paper/58">
                  {point.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-card mt-8 border border-cyan-wire/25 bg-cyan-wire/10 p-4">
            <div className="flex items-start gap-3">
              <MessageSquare size={20} className="mt-0.5 shrink-0 text-cyan-wire" />
              <div>
                <p className="text-sm font-semibold text-paper">
                  Prefer WhatsApp?
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold text-cyan-wire underline underline-offset-4 hover:text-paper"
                >
                  Message Levi directly
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-paper/55">
            <CheckCircle2 size={17} className="text-signal" />
            Clear scope. Practical next step. Team-owned handoff.
          </div>
        </div>

        <BookingForm defaultInterest={intent} />
      </div>
    </section>
  );
}
