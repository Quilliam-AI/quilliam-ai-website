import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Mail,
  MessageSquareText,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hero Options",
  description:
    "Internal visual options for the Quilliam AI homepage hero section.",
  alternates: {
    canonical: "/hero-options",
  },
  openGraph: {
    title: "Hero Options",
    description:
      "Internal visual options for the Quilliam AI homepage hero section.",
    url: "/hero-options",
    images: ["/opengraph-image"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const ctaClass =
  "max-w-full whitespace-normal text-center text-sm leading-tight tracking-normal normal-case sm:whitespace-nowrap";

function OptionCtas({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className={ctaClass}>
        <Link href="/book?intent=opportunity">
          Book Free AI Opportunity
          <ArrowRight size={18} />
        </Link>
      </Button>
      <Button
        asChild
        variant={dark ? "outline" : "outline-light"}
        size="lg"
        className={ctaClass}
      >
        <Link href="/book?intent=training">Book Free AI Training</Link>
      </Button>
    </div>
  );
}

function HeroOption({
  number,
  name,
  headline,
  body,
  children,
  dark = false,
}: {
  number: string;
  name: string;
  headline: string;
  body: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden px-6 py-24 md:py-32 ${
        dark ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              dark ? "text-paper/50" : "text-ink/48"
            }`}
          >
            Option {number} / {name}
          </p>
          <h2 className="mt-6 max-w-[880px] text-[3rem] font-semibold leading-[0.94] tracking-tight text-balance md:text-[5rem]">
            {headline}
          </h2>
          <p
            className={`mt-6 max-w-[62ch] text-base leading-relaxed md:text-xl ${
              dark ? "text-paper/68" : "text-ink/68"
            }`}
          >
            {body}
          </p>
          <div className="mt-8">
            <OptionCtas dark={dark} />
          </div>
          <p
            className={`mt-5 max-w-[62ch] text-sm leading-relaxed ${
              dark ? "text-paper/48" : "text-ink/55"
            }`}
          >
            Based in Cornwall. Working throughout the UK. Defined scope,
            implemented systems and documented handover.
          </p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function UseCaseCard({
  title,
  problem,
  result,
  active = false,
}: {
  title: string;
  problem: string;
  result: string;
  active?: boolean;
}) {
  return (
    <article
      className={`rounded-card-lg border p-5 ${
        active
          ? "border-signal-strong/25 bg-signal/10"
          : "border-ink/10 bg-white"
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
        {title}
      </p>
      <p className="mt-5 text-lg font-semibold leading-tight tracking-tight text-ink">
        {problem}
      </p>
      <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-ink/68">
        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-signal-strong" />
        {result}
      </p>
    </article>
  );
}

function OptionOne() {
  const cards = [
    {
      title: "Trades",
      problem: "Quote follow-up waits until tonight.",
      result: "Draft reply ready before the lead goes cold.",
      active: true,
    },
    {
      title: "Clinic",
      problem: "The same questions come in every week.",
      result: "Safe answers drafted from your own rules.",
    },
    {
      title: "Accountant",
      problem: "Client notes sit in emails and calls.",
      result: "Clean summary prepared for review.",
    },
  ] as const;

  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[24px_24px_0_0_rgba(18,16,12,0.08)]">
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
            Local examples
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-none tracking-tight text-ink">
            Select a process for assessment.
          </h3>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] bg-ink text-paper">
          <Building2 size={22} />
        </span>
      </div>
      <div className="mt-5 grid gap-4">
        {cards.map((card) => (
          <UseCaseCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

function OptionTwo() {
  const sectors = [
    "Trades",
    "Clinics",
    "Accountants",
    "Estate agents",
    "Venues",
    "Agencies",
  ] as const;

  return (
    <div className="rounded-card-xl bg-white p-5 shadow-[0_0_0_1px_rgba(18,16,12,0.1)]">
      <div className="grid gap-3 sm:grid-cols-3">
        {sectors.map((sector, index) => (
          <div
            key={sector}
            className={`inner-rounded border p-4 ${
              index === 0
                ? "border-signal-strong/25 bg-signal/10"
                : "border-ink/10 bg-paper/45"
            }`}
          >
            <p className="text-sm font-semibold text-ink">{sector}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-card-lg bg-ink p-5 text-paper">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/45">
          Selected job
        </p>
        <h3 className="mt-4 text-4xl font-semibold leading-none tracking-tight">
          Lead in. Quote out.
        </h3>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {["Read enquiry", "Pull context", "Draft reply"].map((item) => (
            <div key={item} className="rounded-[1.25rem] bg-paper/[0.06] p-4">
              <CheckCircle2 size={18} className="text-signal" />
              <p className="mt-4 text-sm leading-relaxed text-paper/72">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OptionThree() {
  return (
    <div className="grid gap-4">
      <div className="rounded-card-lg bg-white p-5 shadow-[0_0_0_1px_rgba(18,16,12,0.1)]">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper">
            <PhoneCall size={19} className="text-signal-strong" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
              Customer asks
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-ink">
              Can you quote this job?
            </p>
          </div>
        </div>
      </div>
      <div className="ml-10 rounded-card-lg border border-ink/10 bg-paper p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
          Quilliam AI finds
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/68">
          <li>Previous customer notes</li>
          <li>Quote rules and constraints</li>
          <li>Next question to ask</li>
        </ul>
      </div>
      <div className="rounded-card-lg bg-signal/12 p-5 shadow-[0_0_0_1px_rgba(23,114,69,0.22)]">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <Mail size={19} className="text-signal-strong" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-strong">
              Proposed output
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-ink">
              A draft reply ready to approve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionFour() {
  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[18px_18px_0_0_rgba(18,16,12,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
            Job ticket
          </p>
          <h3 className="mt-3 text-4xl font-semibold leading-none tracking-tight text-ink">
            Repeated admin
          </h3>
        </div>
        <FileText size={28} className="text-signal-strong" />
      </div>
      <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {[
          ["Current process", "Staff copy details between inbox, notes and CRM."],
          ["Proposed use", "The system compiles the details and drafts the next step."],
          ["Human control", "A member of staff checks, edits and sends the response."],
        ].map(([label, text]) => (
          <div key={label} className="grid gap-3 py-5 sm:grid-cols-[0.35fr_1fr]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
              {label}
            </p>
            <p className="text-lg font-semibold leading-tight tracking-tight text-ink">
              {text}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-full bg-signal/12 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-signal-strong">
        Assess one process first
      </p>
    </div>
  );
}

function OptionFive() {
  const items = [
    ["Builder", "Quotes"],
    ["Clinic", "Questions"],
    ["Venue", "Bookings"],
    ["Agency", "Reports"],
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(([sector, job], index) => (
        <article
          key={sector}
          className={`rounded-card-lg p-5 ${
            index === 0
              ? "bg-signal-strong text-paper"
              : "bg-white text-ink shadow-[0_0_0_1px_rgba(18,16,12,0.1)]"
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              index === 0 ? "text-paper/60" : "text-ink/42"
            }`}
          >
            {sector}
          </p>
          <h3 className="mt-10 text-4xl font-semibold leading-none tracking-tight">
            {job}
          </h3>
          <p
            className={`mt-5 text-sm leading-relaxed ${
              index === 0 ? "text-paper/72" : "text-ink/64"
            }`}
          >
            The recurring task is assessed, drafted, checked and handed over to
            the responsible staff.
          </p>
        </article>
      ))}
    </div>
  );
}

function OptionSix() {
  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[0_0_0_1px_rgba(18,16,12,0.1)]">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-ink text-paper">
          <SearchCheck size={24} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
            We look for
          </p>
          <h3 className="mt-1 text-3xl font-semibold tracking-tight text-ink">
            Repeat jobs
          </h3>
        </div>
      </div>
      <div className="mt-8 grid gap-3">
        {[
          "You do it every week",
          "It eats time",
          "It follows rules",
          "A person can check it",
        ].map((item, index) => (
          <div
            key={item}
            className="inner-rounded flex items-center justify-between gap-4 border border-ink/10 bg-paper/45 p-4"
          >
            <p className="text-lg font-semibold tracking-tight text-ink">{item}</p>
            <span className="text-sm font-bold tracking-tight text-ink/38">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-card-lg bg-signal/12 p-5">
        <p className="text-3xl font-semibold leading-none tracking-tight text-ink">
          This may be suitable for AI assistance.
        </p>
      </div>
    </div>
  );
}

function OptionSeven() {
  const week = [
    ["Mon", "3 enquiries waiting"],
    ["Tue", "Report notes scattered"],
    ["Wed", "Customer questions repeated"],
    ["Thu", "Follow-ups missed"],
  ] as const;

  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[18px_18px_0_0_rgba(18,16,12,0.08)]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
        Owner&apos;s week
      </p>
      <div className="mt-5 grid gap-3">
        {week.map(([day, task], index) => (
          <div
            key={day}
            className={`inner-rounded grid grid-cols-[3.5rem_1fr_auto] items-center gap-3 border p-4 ${
              index === 0
                ? "border-signal-strong/25 bg-signal/10"
                : "border-ink/10 bg-paper/45"
            }`}
          >
            <p className="text-sm font-semibold text-ink/45">{day}</p>
            <p className="text-sm font-semibold leading-tight text-ink">{task}</p>
            <Clock3 size={17} className="text-signal-strong" />
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-card-lg bg-ink p-5 text-paper">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/45">
          First fix
        </p>
        <p className="mt-3 text-3xl font-semibold leading-none tracking-tight">
          Prepare outstanding replies.
        </p>
      </div>
    </div>
  );
}

function OptionEight() {
  const strips = [
    ["Trades", "Quote follow-ups"],
    ["Clinic", "Common questions"],
    ["Accountant", "Client summaries"],
    ["Venue", "Booking replies"],
    ["Estate agent", "Viewing requests"],
  ] as const;

  return (
    <div className="rounded-card-xl bg-paper p-5 shadow-[0_0_0_1px_rgba(244,239,228,0.14)]">
      <div className="rounded-card-lg bg-white p-5 text-ink">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
          Local business use cases
        </p>
        <h3 className="mt-3 max-w-[13ch] text-4xl font-semibold leading-none tracking-tight">
          Where AI can help first.
        </h3>
      </div>
      <div className="mt-4 space-y-3">
        {strips.map(([sector, job], index) => (
          <div
            key={sector}
            className="inner-rounded grid grid-cols-[1fr_auto] items-center gap-4 bg-white p-4 text-ink"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/38">
                {sector}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight">{job}</p>
            </div>
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                index === 0 ? "bg-signal text-ink" : "bg-paper text-ink/45"
              }`}
            >
              <CheckCircle2 size={17} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OptionNine() {
  const messages = [
    ["Customer", "Can you fit us in this week?"],
    ["Customer", "What do you need from me?"],
    ["Customer", "Can you send that quote again?"],
  ] as const;

  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[0_0_0_1px_rgba(18,16,12,0.1)]">
      <div className="grid gap-4">
        {messages.map(([sender, message], index) => (
          <div
            key={message}
            className={`max-w-[88%] rounded-[1.5rem] p-4 ${
              index === 1 ? "ml-auto bg-signal/12" : "bg-paper"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/38">
              {sender}
            </p>
            <p className="mt-2 text-lg font-semibold leading-tight text-ink">
              {message}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-card-lg bg-ink p-5 text-paper">
        <div className="flex items-center gap-3">
          <MessageSquareText size={20} className="text-signal" />
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper/45">
            Draft ready
          </p>
        </div>
        <p className="mt-4 text-3xl font-semibold leading-none tracking-tight">
          Reply written in your tone. You approve it.
        </p>
      </div>
    </div>
  );
}

function OptionTen() {
  return (
    <div className="rounded-card-xl bg-white p-6 shadow-[18px_18px_0_0_rgba(18,16,12,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">
            Opportunity sheet
          </p>
          <h3 className="mt-3 text-4xl font-semibold leading-none tracking-tight text-ink">
            What to build first
          </h3>
        </div>
        <ClipboardCheck size={28} className="text-signal-strong" />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="inner-rounded bg-paper p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
            Business type
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-ink">
            Local service business
          </p>
        </div>
        <div className="inner-rounded bg-signal/12 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-strong">
            Proposed first implementation
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-ink">
            Draft lead responses
          </p>
        </div>
      </div>
      <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
        {[
          ["Use AI for", "Drafting and gathering context"],
          ["Keep humans on", "Approving and sending"],
          ["Leave alone", "Anything risky or unclear"],
        ].map(([label, text]) => (
          <div key={label} className="flex items-center justify-between gap-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/42">
              {label}
            </p>
            <p className="text-right text-sm font-semibold text-ink">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 flex items-center gap-3 text-sm font-semibold text-ink/70">
        <ShieldCheck size={18} className="text-signal-strong" />
        Defined scope before implementation.
      </p>
    </div>
  );
}

export default function HeroOptionsPage() {
  return (
    <>
      <section className="bg-paper px-6 pb-10 pt-28 text-ink md:pb-12 md:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/48">
            Internal hero exploration
          </p>
          <h1 className="mt-5 max-w-[900px] text-4xl font-semibold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Ten options for presenting the service clearly.
          </h1>
          <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-ink/68 md:text-lg">
            Each section uses examples from local businesses. The visitor
            can identify a relevant recurring process, enquiry,
            report or customer question.
          </p>
        </div>
      </section>

      <HeroOption
        number="01"
        name="Use case stack"
        headline="Identify a suitable process for AI."
        body="Presents several local business examples and highlights one selected process. This allows visitors from different sectors to identify a relevant use."
      >
        <OptionOne />
      </HeroOption>

      <HeroOption
        number="02"
        name="Choose your business"
        headline="Select a sector and recurring process."
        body="Presents a sector selection followed by a defined process for trades, clinics, accountants, venues, agents and agencies."
      >
        <OptionTwo />
      </HeroOption>

      <HeroOption
        number="03"
        name="Message in, reply out"
        headline="Prepare customer replies for staff approval."
        body="Shows a lead follow-up process from the initial customer question to a draft response prepared for approval."
      >
        <OptionThree />
      </HeroOption>

      <HeroOption
        number="04"
        name="Job ticket"
        headline="Define the role of AI in recurring administration."
        body="Shows the current process, the proposed use of AI and the point at which a member of staff retains control."
      >
        <OptionFour />
      </HeroOption>

      <HeroOption
        number="05"
        name="Sector tiles"
        headline="Apply AI to an established business process."
        body="Uses sector-specific tiles to present examples of recurring work within local businesses."
      >
        <OptionFive />
      </HeroOption>

      <HeroOption
        number="06"
        name="Repeat job finder"
        headline="Recurring processes may be suitable for AI."
        body="Sets out four initial criteria for assessing whether a process may be suitable for an AI project."
      >
        <OptionSix />
      </HeroOption>

      <HeroOption
        number="07"
        name="Owner's week"
        headline="Address recurring work that remains incomplete."
        body="Uses a weekly schedule to show recurring enquiries, reporting and follow-up work requiring attention."
      >
        <OptionSeven />
      </HeroOption>

      <HeroOption
        number="08"
        name="Local use case receipts"
        headline="Identify where AI may assist the business."
        body="Lists specific processes by sector to demonstrate that the assessment is based on defined business work."
        dark
      >
        <OptionEight />
      </HeroOption>

      <HeroOption
        number="09"
        name="Customer messages"
        headline="Turn repeat customer questions into approved replies."
        body="Uses unanswered customer messages to show a defined drafting process with human approval."
      >
        <OptionNine />
      </HeroOption>

      <HeroOption
        number="10"
        name="Opportunity sheet"
        headline="Receive a recommendation for the first project."
        body="Presents the initial assessment as a defined deliverable, using a local service business as the example."
      >
        <OptionTen />
      </HeroOption>
    </>
  );
}
