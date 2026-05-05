"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Globe,
  Bot,
  PencilLine,
  Database,
  CalendarCheck,
  CheckCircle2,
  Send,
  Bell,
  GitMerge,
  FileSignature,
  Boxes,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─────────────────────── live "since trigger" clock ──────────────────
// Tracks how long since the current workflow started. Mounts naturally
// reset triggerTime, so each workflow displays its own fresh elapsed
// timer ("just now" → "5 sec ago"). Returns a humanised string updated
// every second.
function useRelativeTime(): string {
  const [triggerTime] = useState(() => Date.now());
  const [now, setNow] = useState(triggerTime);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const ageSec = Math.max(0, Math.floor((now - triggerTime) / 1000));

  if (ageSec < 2) return "just now";
  if (ageSec < 60) return `${ageSec} sec ago`;
  const minutes = Math.floor(ageSec / 60);
  return minutes === 1 ? "1 min ago" : `${minutes} min ago`;
}

// ─────────────────────── stage state machine ─────────────────────────
type Stage = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// Pacing — stage 6 is the "outcome" (output preview + manual-vs-automated
// reveal). Hold there for 5 seconds so prospects actually read the
// generated reply text. Other stages eased out so the eye can follow.
const STAGE_DURATIONS_MS: Record<Stage, number> = {
  0: 900,
  1: 1400,
  2: 2400,
  3: 2400,
  4: 1900,
  5: 1900,
  6: 5000,
};

type StepState = "idle" | "active" | "done";

function stateAt(stage: Stage, runsAt: Stage): StepState {
  if (runsAt === stage) return "active";
  if (runsAt < stage) return "done";
  return "idle";
}

// ─────────────────────── tab descriptors ─────────────────────────────
const TABS = [
  { num: 1, label: "Enquiry", sub: "When a customer enquires" },
  { num: 2, label: "Demo", sub: "When they want a demo" },
  { num: 3, label: "Onboarding", sub: "When you sign a new client" },
] as const;

// ─────────────────────── tokens & helpers ────────────────────────────

// Connector colors — base is more visible than before so paths actually
// read as drawn lines. Active overlay uses brighter emerald + thicker.
const RAIL_BASE = "rgb(63 56 54)";  // stone-700-ish, ~2x brighter than before
const RAIL_ACTIVE = "rgb(52 211 153)"; // emerald-400

function StatusBadge({
  state,
  idle,
  active,
  done,
  small = false,
}: {
  state: StepState;
  idle: string;
  active: string;
  done: string;
  small?: boolean;
}) {
  const text = state === "active" ? active : state === "done" ? done : idle;
  const tone =
    state === "active"
      ? "bg-emerald-900/40 text-emerald-400 border-emerald-800/40"
      : state === "done"
      ? "bg-emerald-950/60 text-emerald-500 border-emerald-900/40"
      : "bg-stone-800/60 text-stone-500 border-stone-700/40";
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border whitespace-nowrap ${tone} ${
        small ? "text-[11px]" : "text-[12px]"
      }`}
    >
      {state === "active" && <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />}
      {state === "done" && <CheckCircle2 size={9} className="text-emerald-500 -ml-0.5 flex-shrink-0" />}
      <span className="truncate">{text}</span>
    </span>
  );
}

function NodeIcon({
  icon: Icon,
  state,
  size = 13,
}: {
  icon: LucideIcon;
  state: StepState;
  size?: number;
}) {
  const tone =
    state === "active"
      ? "bg-emerald-500/15 border-emerald-500/40"
      : state === "done"
      ? "bg-emerald-500/10 border-emerald-700/40"
      : "bg-stone-800/80 border-stone-700/60";
  const stroke =
    state === "active" ? "text-emerald-400" : state === "done" ? "text-emerald-500" : "text-stone-400";
  return (
    <div
      className={`relative w-7 h-7 rounded-md flex items-center justify-center border flex-shrink-0 transition-colors ${tone}`}
    >
      <Icon size={size} className={stroke} strokeWidth={1.75} />
      {state === "active" && (
        <span className="absolute inset-0 rounded-md border border-emerald-400/40 animate-ping" />
      )}
    </div>
  );
}

// Vertical connector — visible base + animated overlay when active.
// No end-cap dots — keep the line clean and uniform with SVG paths.
function VRail({ active, h = 14 }: { active: boolean; h?: number }) {
  return (
    <div className="flex flex-col items-center my-0.5">
      <div className="relative w-px" style={{ height: `${h}px` }}>
        <div className="absolute inset-0 bg-stone-700" />
        {active && (
          <span className="absolute inset-x-[-1px] top-0 bottom-0 bg-gradient-to-b from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 animate-flow-down" />
        )}
      </div>
    </div>
  );
}

function TriggerBar({
  icon: Icon,
  label,
  preview,
  state,
}: {
  icon: LucideIcon;
  label: string;
  preview: string;
  state: StepState;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors ${
        state === "active"
          ? "bg-emerald-500/15 border-emerald-500/50"
          : state === "done"
          ? "bg-emerald-950/30 border-emerald-900/40"
          : "bg-stone-800/40 border-stone-700/60"
      }`}
    >
      <NodeIcon icon={Icon} state={state} size={12} />
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-stone-100 leading-tight truncate">
          {label}
        </p>
        <p className="mt-0.5 text-[12px] text-stone-400 italic truncate">{preview}</p>
      </div>
    </div>
  );
}

function AgentNode({
  state,
  active,
  done,
}: {
  state: StepState;
  // Single string OR array of strings to cycle through while in `active` state.
  // Cycling implies multi-step reasoning vs a single static label.
  active: string | string[];
  done: string;
}) {
  const messages = Array.isArray(active) ? active : [active];
  const [cycleIdx, setCycleIdx] = useState(0);

  // Reset + start cycling when entering active. Stop when leaving.
  useEffect(() => {
    if (state !== "active" || messages.length <= 1) return;
    setCycleIdx(0);
    const interval = setInterval(() => {
      setCycleIdx((i) => (i + 1) % messages.length);
    }, 850);
    return () => clearInterval(interval);
    // We deliberately depend only on `state` here; the messages array is a
    // stable per-workflow constant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const currentActive = messages[Math.min(cycleIdx, messages.length - 1)];

  return (
    <div
      className={`relative rounded-lg border-2 transition-colors ${
        state === "active"
          ? "bg-emerald-500/[0.08] border-emerald-500/50"
          : state === "done"
          ? "bg-emerald-500/[0.04] border-emerald-700/40"
          : "bg-stone-800/40 border-stone-700/60"
      }`}
    >
      {state === "active" && (
        <span className="absolute inset-0 rounded-lg border border-emerald-400/30 animate-ping pointer-events-none" />
      )}
      <div className="px-2.5 py-2 flex items-start gap-2.5">
        <div
          className={`relative w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${
            state === "active"
              ? "bg-emerald-500/20 border border-emerald-500/50"
              : "bg-stone-900 border border-stone-700"
          }`}
        >
          <Bot
            size={16}
            strokeWidth={1.75}
            className={
              state === "active"
                ? "text-emerald-400"
                : state === "done"
                ? "text-emerald-500"
                : "text-stone-400"
            }
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[15px] font-semibold text-stone-100 leading-tight">AI Agent</p>
            <span className="text-[11px] font-mono text-emerald-400/70 uppercase tracking-wider">
              Claude
            </span>
          </div>
          <p className="text-[12px] text-stone-400 leading-tight">Reads. Decides. Acts.</p>
          <div className="mt-1">
            <StatusBadge state={state} idle="ready" active={currentActive} done={done} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepRow({
  state,
  icon,
  label,
  aside,
  idle,
  active,
  done,
}: {
  state: StepState;
  icon: LucideIcon;
  label: string;
  aside: string;
  idle: string;
  active: string;
  done: string;
}) {
  return (
    <div
      className={`flex items-start gap-2 p-2 rounded-md border transition-colors ${
        state === "active"
          ? "bg-emerald-500/[0.07] border-emerald-500/40"
          : "bg-stone-800/40 border-stone-700/40"
      }`}
    >
      <NodeIcon icon={icon} state={state} size={12} />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-stone-100 leading-tight">{label}</p>
        <p className="mt-0.5 text-[12px] text-stone-500 italic leading-snug truncate">{aside}</p>
        <div className="mt-1">
          <StatusBadge state={state} idle={idle} active={active} done={done} />
        </div>
      </div>
    </div>
  );
}

// Output preview — slides in beneath the final step showing the actual
// content the AI generated (email reply, booking message, welcome note).
// This is the proof: not just "we sent a reply", but "this is how it
// reads, in your voice". Most powerful single signal of "AI nails tone".
function OutputPreview({
  show,
  icon: Icon,
  title,
  meta,
  body,
}: {
  show: boolean;
  icon: LucideIcon;
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ${
        show ? "max-h-40 opacity-100 mt-1.5" : "max-h-0 opacity-0 mt-0"
      }`}
      aria-hidden={!show}
    >
      <div className="rounded-md bg-emerald-950/25 border border-emerald-900/40 p-2.5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Icon size={11} className="text-emerald-400" strokeWidth={2} />
            <span className="text-[12px] font-semibold text-emerald-300">{title}</span>
          </div>
          <span className="text-[11px] font-mono text-stone-500">{meta}</span>
        </div>
        <p className="text-[12px] text-stone-300 leading-relaxed italic">
          &ldquo;{body}&rdquo;
        </p>
      </div>
    </div>
  );
}

// Manual vs automated comparison — fades in when the final step
// transitions to `done`. Strikethrough on the manual cost is the
// visceral hit; the +saved counter on the right is the CFO line.
function ManualVsAutomated({
  show,
  manual,
  automated,
  saved,
}: {
  show: boolean;
  manual: string;
  automated: string;
  saved: string;
}) {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ${
        show ? "max-h-12 opacity-100 mt-1.5" : "max-h-0 opacity-0 mt-0"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-emerald-950/30 border border-emerald-900/30">
        <span className="text-[12px] text-stone-500 line-through">
          Manual: {manual}
        </span>
        <span className="text-stone-600 text-[12px]">→</span>
        <span className="text-[12px] text-emerald-400 font-medium">
          Auto: {automated}
        </span>
        <span className="ml-auto text-[12px] text-emerald-300 font-mono font-semibold">
          + {saved} saved
        </span>
      </div>
    </div>
  );
}

// Branch chip — fixed-height so the grid stays clean regardless of badge
// text length. Status sits at a fixed position; long text truncates.
function BranchChip({
  state,
  icon,
  label,
  status,
}: {
  state: StepState;
  icon: LucideIcon;
  label: string;
  status: { idle: string; active: string; done: string };
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-1.5 px-1.5 py-2.5 min-h-[110px] rounded-md border transition-colors ${
        state === "active"
          ? "bg-emerald-500/[0.07] border-emerald-500/40"
          : state === "done"
          ? "bg-emerald-950/30 border-emerald-900/40"
          : "bg-stone-800/40 border-stone-700/40"
      }`}
    >
      <NodeIcon icon={icon} state={state} size={11} />
      <p className="text-[12px] font-medium text-stone-100 text-center leading-tight px-0.5">
        {label}
      </p>
      <StatusBadge
        state={state}
        idle={status.idle}
        active={status.active}
        done={status.done}
        small
      />
    </div>
  );
}

// ─────────────────────── workflow renderers ──────────────────────────

function WorkflowEnquiry({ stage }: { stage: Stage }) {
  const c = ENQUIRY_CONTENT;
  const inputS = stateAt(stage, 1);
  const agentS = stateAt(stage, 2);
  const sideS: StepState = stage === 3 ? "active" : stage > 3 ? "done" : "idle";
  const draftS: StepState = stage === 3 ? "active" : stage > 3 ? "done" : "idle";
  const approveS = stateAt(stage, 4);
  const sendS = stateAt(stage, 5);
  const relativeTime = useRelativeTime();

  return (
    <>
      <TriggerBar icon={Mail} label="New email enquiry" preview={`${c.triggerPreview} · ${relativeTime}`} state={inputS} />
      <VRail active={stage >= 1 && stage <= 2} h={14} />
      <AgentNode state={agentS} active={c.agentActive} done={c.agentDone} />

      {/* Fork above: elbow joint — agent (50%) drops to busbar at y=10,
          which extends from Draft column centre (33%) to CRM column centre
          (84%), then both legs drop straight down to the row below. */}
      <div className="relative h-5 my-0.5" aria-hidden>
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M 50 0 L 50 10" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 33 10 L 84 10" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 33 10 L 33 20" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 84 10 L 84 20" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          {stage >= 2 && stage <= 3 && (
            <>
              <path d="M 50 0 L 50 10" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 33 10 L 84 10" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 33 10 L 33 20" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 84 10 L 84 20" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
            </>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-1.5 items-stretch">
        <div className="col-span-2">
          <StepRow
            state={draftS}
            icon={PencilLine}
            label={c.draftLabel}
            aside={c.draftAside}
            idle="ready"
            active="writing…"
            done={c.draftDone}
          />
        </div>
        <div className="col-span-1">
          <StepRow
            state={sideS}
            icon={Database}
            label={c.sideLabel}
            aside={c.sideAside}
            idle="ready"
            active="logging…"
            done={c.sideDone}
          />
        </div>
      </div>

      {/* Hook below: Draft (33%) drops to busbar at y=10, busbar runs to
          centre (50%), then drops to the centred Approve step. */}
      <div className="relative h-5 my-0.5" aria-hidden>
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M 33 0 L 33 10" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 33 10 L 50 10" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 10 L 50 20" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          {stage >= 3 && stage <= 4 && (
            <>
              <path d="M 33 0 L 33 10" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 33 10 L 50 10" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 10 L 50 20" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
            </>
          )}
        </svg>
      </div>

      <StepRow
        state={approveS}
        icon={CheckCircle2}
        label="You tap approve"
        aside={c.approveAside}
        idle="waiting for you"
        active="you're reviewing…"
        done={c.approveDone}
      />
      <VRail active={stage >= 4 && stage <= 5} h={12} />
      <StepRow
        state={sendS}
        icon={Send}
        label={c.sendLabel}
        aside={c.sendAside}
        idle="ready to send"
        active="sending…"
        done={c.sendDone}
      />
      <ManualVsAutomated
        show={sendS === "done"}
        manual={c.manual}
        automated={c.automated}
        saved={c.saved}
      />
      <OutputPreview
        show={sendS === "done"}
        icon={Mail}
        title={c.outputTitle}
        meta={c.outputMeta}
        body={c.outputBody}
      />
    </>
  );
}

function WorkflowDemo({ stage }: { stage: Stage }) {
  const c = DEMO_CONTENT;
  const inputS = stateAt(stage, 1);
  const agentS = stateAt(stage, 2);
  const fanS: StepState = stage === 3 ? "active" : stage > 3 ? "done" : "idle";
  const mergeS = stateAt(stage, 4);
  const sendS = stateAt(stage, 5);
  const relativeTime = useRelativeTime();

  return (
    <>
      <TriggerBar icon={Globe} label="Demo request from your website" preview={`${c.triggerPreview} · ${relativeTime}`} state={inputS} />
      <VRail active={stage >= 1 && stage <= 2} h={14} />
      <AgentNode state={agentS} active={c.agentActive} done={c.agentDone} />

      {/* 3-way fan-out */}
      <div className="relative h-6 my-0.5" aria-hidden>
        <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M 50 0 L 50 8" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 8 L 16.5 24" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 8 L 50 24" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 8 L 83.5 24" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          {stage >= 2 && stage <= 3 && (
            <>
              <path d="M 50 0 L 50 8" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 8 L 16.5 24" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 8 L 50 24" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 8 L 83.5 24" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
            </>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        <BranchChip state={fanS} icon={CalendarCheck} label={c.fan1Label} status={{ idle: "ready", active: c.fan1Active, done: c.fan1Done }} />
        <BranchChip state={fanS} icon={Database} label={c.fan2Label} status={{ idle: "ready", active: c.fan2Active, done: c.fan2Done }} />
        <BranchChip state={fanS} icon={Bell} label={c.fan3Label} status={{ idle: "ready", active: c.fan3Active, done: c.fan3Done }} />
      </div>

      {/* 3-way merge */}
      <div className="relative h-6 my-0.5" aria-hidden>
        <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M 16.5 0 L 50 16" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 0 L 50 16" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 83.5 0 L 50 16" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 50 16 L 50 24" stroke={RAIL_BASE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          {stage >= 3 && stage <= 4 && (
            <>
              <path d="M 16.5 0 L 50 16" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 0 L 50 16" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 83.5 0 L 50 16" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
              <path d="M 50 16 L 50 24" stroke={RAIL_ACTIVE} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" className="animate-flow-dash" />
            </>
          )}
        </svg>
      </div>

      <StepRow
        state={mergeS}
        icon={GitMerge}
        label={c.mergeLabel}
        aside={c.mergeAside}
        idle="ready"
        active="bundling…"
        done="ready · one clean message"
      />
      <VRail active={stage >= 4 && stage <= 5} h={12} />
      <StepRow
        state={sendS}
        icon={Send}
        label={c.sendLabel}
        aside={c.sendAside}
        idle="ready to send"
        active="sending…"
        done={c.sendDone}
      />
      <ManualVsAutomated
        show={sendS === "done"}
        manual={c.manual}
        automated={c.automated}
        saved={c.saved}
      />
      <OutputPreview
        show={sendS === "done"}
        icon={CalendarCheck}
        title={c.outputTitle}
        meta={c.outputMeta}
        body={c.outputBody}
      />
    </>
  );
}

function WorkflowOnboarding({ stage }: { stage: Stage }) {
  const c = ONBOARDING_CONTENT;
  const inputS = stateAt(stage, 1);
  const agentS = stateAt(stage, 2);
  const step1S = stateAt(stage, 3);
  const step2S = stateAt(stage, 4);
  const step3S = stateAt(stage, 5);
  const relativeTime = useRelativeTime();

  return (
    <>
      <TriggerBar icon={FileSignature} label={c.triggerLabel} preview={`${c.triggerPreview} · ${relativeTime}`} state={inputS} />
      <VRail active={stage >= 1 && stage <= 2} h={14} />
      <AgentNode state={agentS} active={c.agentActive} done={c.agentDone} />

      <div className="relative pl-3.5 mt-2">
        {/* Vertical rail — visible base, animated fill overlay */}
        <div className="absolute left-[10px] top-2 bottom-2 w-px bg-stone-700" aria-hidden />
        {stage >= 2 && stage <= 5 && (
          <div
            className="absolute left-[10px] w-px bg-emerald-400 transition-all duration-500"
            style={{
              top: "8px",
              height: stage === 2 ? "0%" : stage === 3 ? "33%" : stage === 4 ? "66%" : "100%",
              boxShadow: "0 0 8px rgba(52, 211, 153, 0.5)",
            }}
            aria-hidden
          />
        )}

        <div className="space-y-1.5">
          <PipelineStep stepNum="01" state={step1S} icon={Boxes} label={c.step1Label} aside={c.step1Aside} idle="ready" active="setting up…" done={c.step1Done} />
          <PipelineStep stepNum="02" state={step2S} icon={Users} label={c.step2Label} aside={c.step2Aside} idle="ready" active="inviting team…" done={c.step2Done} />
          <PipelineStep stepNum="03" state={step3S} icon={Sparkles} label={c.step3Label} aside={c.step3Aside} idle="ready" active="composing…" done={c.step3Done} />
        </div>
      </div>
      <ManualVsAutomated
        show={step3S === "done"}
        manual={c.manual}
        automated={c.automated}
        saved={c.saved}
      />
      <OutputPreview
        show={step3S === "done"}
        icon={Sparkles}
        title={c.outputTitle}
        meta={c.outputMeta}
        body={c.outputBody}
      />
    </>
  );
}

function PipelineStep({
  stepNum,
  state,
  icon,
  label,
  aside,
  idle,
  active,
  done,
}: {
  stepNum: string;
  state: StepState;
  icon: LucideIcon;
  label: string;
  aside: string;
  idle: string;
  active: string;
  done: string;
}) {
  return (
    <div className="relative flex items-start gap-2.5">
      <div
        className={`relative w-6 h-6 -ml-3 mt-1 rounded-full flex items-center justify-center font-mono text-[11px] font-bold border-2 flex-shrink-0 transition-colors ${
          state === "active"
            ? "bg-emerald-500 text-stone-950 border-emerald-300"
            : state === "done"
            ? "bg-emerald-700 text-emerald-50 border-emerald-600"
            : "bg-stone-900 text-stone-500 border-stone-700"
        }`}
      >
        {state === "active" && (
          <span className="absolute inset-0 rounded-full border-2 border-emerald-400/40 animate-ping" />
        )}
        {state === "done" ? <CheckCircle2 size={11} /> : stepNum}
      </div>
      <div
        className={`flex-1 flex items-start gap-2 p-1.5 rounded-md border transition-colors ${
          state === "active"
            ? "bg-emerald-500/[0.07] border-emerald-500/40"
            : "bg-stone-800/40 border-stone-700/40"
        }`}
      >
        <NodeIcon icon={icon} state={state} size={11} />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-stone-100 leading-tight">{label}</p>
          <p className="mt-0.5 text-[11px] text-stone-500 italic leading-tight truncate">{aside}</p>
          <div className="mt-1">
            <StatusBadge state={state} idle={idle} active={active} done={done} small />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────── main component ──────────────────────────────

// ─────────────────────── workflow content ───────────────────────────
// One canonical variant per workflow — owner-led service business voice.

type EnquiryContent = {
  triggerPreview: string;
  agentActive: string[];
  agentDone: string;
  draftLabel: string;
  draftAside: string;
  draftDone: string;
  sideLabel: string;
  sideAside: string;
  sideDone: string;
  approveAside: string;
  approveDone: string;
  sendLabel: string;
  sendAside: string;
  sendDone: string;
  manual: string;
  automated: string;
  saved: string;
  outputTitle: string;
  outputMeta: string;
  outputBody: string;
};

type DemoContent = {
  triggerPreview: string;
  agentActive: string[];
  agentDone: string;
  fan1Label: string;
  fan1Active: string;
  fan1Done: string;
  fan2Label: string;
  fan2Active: string;
  fan2Done: string;
  fan3Label: string;
  fan3Active: string;
  fan3Done: string;
  mergeLabel: string;
  mergeAside: string;
  sendLabel: string;
  sendAside: string;
  sendDone: string;
  manual: string;
  automated: string;
  saved: string;
  outputTitle: string;
  outputMeta: string;
  outputBody: string;
};

type OnboardingContent = {
  triggerLabel: string;
  triggerPreview: string;
  agentActive: string[];
  agentDone: string;
  step1Label: string;
  step1Aside: string;
  step1Done: string;
  step2Label: string;
  step2Aside: string;
  step2Done: string;
  step3Label: string;
  step3Aside: string;
  step3Done: string;
  manual: string;
  automated: string;
  saved: string;
  outputTitle: string;
  outputMeta: string;
  outputBody: string;
};

const ENQUIRY_CONTENT: EnquiryContent = {
  triggerPreview: "Sarah · Acme Co",
  agentActive: ["reading the message…", "checking your past 50 replies…", "matching your tone…"],
  agentDone: "It's a quote request",
  draftLabel: "Draft a reply in your voice",
  draftAside: "Politer version of you.",
  draftDone: "ready · 240 words",
  sideLabel: "Log to CRM",
  sideAside: "Quietly saved.",
  sideDone: "logged",
  approveAside: "Three seconds, one thumb.",
  approveDone: "approved · 2.8 sec",
  sendLabel: "Sent in under 5 minutes",
  sendAside: "Sarah thinks you're staffing 24/7.",
  sendDone: "delivered · 4 min 32 sec",
  manual: "~12 min",
  automated: "4m 32s",
  saved: "7m 28s",
  outputTitle: "Reply to Sarah · sent",
  outputMeta: "240 words · in your voice",
  outputBody:
    "Hi Sarah — thanks for reaching out about a quote for your team. Happy to put something together. Could I grab 15 minutes Thursday to walk through what you're after? Free 10am to 4pm.",
};

const DEMO_CONTENT: DemoContent = {
  triggerPreview: "Acme Ltd · 47 employees",
  agentActive: ["checking your calendar…", "researching the company…", "spotting a serious buyer…"],
  agentDone: "It's a serious buyer",
  fan1Label: "Hold 3 calendar slots",
  fan1Active: "checking…",
  fan1Done: "3 slots held",
  fan2Label: "Research the company",
  fan2Active: "researching…",
  fan2Done: "top 13% lead",
  fan3Label: "Notify your team",
  fan3Active: "pinging…",
  fan3Done: "team pinged",
  mergeLabel: "Bundle into one message",
  mergeAside: "Slots, research, team note — packaged.",
  sendLabel: "Booking link sent",
  sendAside: "She picks a time. You don't lift a finger.",
  sendDone: "booked · Tue 14:00",
  manual: "~25 min",
  automated: "1m 18s",
  saved: "23 min",
  outputTitle: "Booking message · sent",
  outputMeta: "3 slots held · matched",
  outputBody:
    "Hi Mike — thanks for the demo request. Based on your team size I've held three deeper-dive slots: Tue 14:00, Wed 11:00, Thu 09:30. Pick whichever lands and I'll confirm.",
};

const ONBOARDING_CONTENT: OnboardingContent = {
  triggerLabel: "New contract signed",
  triggerPreview: "Acme Ltd · £24k annual",
  agentActive: ["reading the contract…", "extracting milestones…", "mapping out the rollout…"],
  agentDone: "Found · 12 milestones, 3 contacts",
  step1Label: "Set up your shared workspace",
  step1Aside: "Templates filled. Permissions set.",
  step1Done: "ready · 12 pages",
  step2Label: "Spin up the team chat",
  step2Aside: "Their CEO. Their ops lead. You.",
  step2Done: "3 invited · live",
  step3Label: "Welcome pack + book kickoff",
  step3Aside: "Personalised email. Calendar slot. PDF.",
  step3Done: "done · kickoff Tue 09:00",
  manual: "~4 hours",
  automated: "8 min",
  saved: "3h 52m",
  outputTitle: "Welcome message · sent to Acme",
  outputMeta: "kickoff · Tue 09:00",
  outputBody:
    "Welcome aboard, Acme. Your shared workspace is live, the team chat is up, and your kickoff is booked for Tuesday at 09:00. Here's your onboarding pack — see you Tuesday.",
};

export function HeroWorkflow() {
  const [stage, setStage] = useState<Stage>(0);
  const [workflowIdx, setWorkflowIdx] = useState(0);
  const [extraDelayMs, setExtraDelayMs] = useState(0);

  // Build-in animation — gated on first viewport entry via
  // IntersectionObserver. Sections stagger in over ~600ms before the
  // state machine starts running. First impression = the diagram is alive.
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Hard fallback — even if IntersectionObserver never fires (or the
    // card mounts already past the threshold), reveal after one frame so
    // the card never sits invisible. Observer below still gives a clean
    // viewport-entry trigger when the card scrolls in from below.
    const fallback = setTimeout(() => setRevealed(true), 80);

    if (!cardRef.current || typeof IntersectionObserver === "undefined") {
      return () => clearTimeout(fallback);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(cardRef.current);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Gate the state machine on `revealed` so we don't waste cycles
    // animating an off-screen card. Once revealed, the workflow begins
    // its first cycle naturally from stage 0.
    if (!revealed) return;
    const wait = STAGE_DURATIONS_MS[stage] + extraDelayMs;
    const t = setTimeout(() => {
      setExtraDelayMs(0);
      if (stage === 6) {
        setWorkflowIdx((i) => (i + 1) % TABS.length);
        setStage(0);
      } else {
        setStage(((stage + 1) % 7) as Stage);
      }
    }, wait);
    return () => clearTimeout(t);
  }, [stage, extraDelayMs, workflowIdx, revealed]);

  // Per-section staggered reveal — pure inline style so it composes
  // cleanly with each section's existing layout className.
  const revealStyle = (delayMs: number): React.CSSProperties => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(8px)",
    transition: "opacity 500ms ease-out, transform 500ms ease-out",
    transitionDelay: revealed ? `${delayMs}ms` : "0ms",
  });

  const handleTabClick = (i: number) => {
    setWorkflowIdx(i);
    setStage(0);
    setExtraDelayMs(400);
  };

  const current = TABS[workflowIdx];

  return (
    <div ref={cardRef} className="relative w-full max-w-[420px] mx-auto">
      <div className="relative">
        <div
          className={`relative rounded-2xl bg-stone-900/80 backdrop-blur-sm border border-stone-800 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-700 ease-out ${
            revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.98]"
          }`}
        >
          {/* Header strip */}
          <div
            className="flex items-center justify-between px-3.5 py-2.5 border-b border-stone-800/80 bg-stone-900/60"
            style={revealStyle(150)}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-[12px] font-mono uppercase tracking-[0.15em] text-emerald-400">
                running now
              </span>
            </div>
            <span className="text-[12px] text-stone-400 italic truncate ml-2">{current.sub}</span>
          </div>

          {/* Clickable workflow tabs */}
          <div
            className="grid grid-cols-3 gap-1 px-2.5 py-1.5 border-b border-stone-800/80 bg-stone-950/40"
            role="tablist"
            aria-label="Choose an automation"
            style={revealStyle(250)}
          >
            {TABS.map((t, i) => {
              const isActive = i === workflowIdx;
              return (
                <Button
                  key={t.num}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(i)}
                  variant={isActive ? "workflowTabActive" : "workflowTab"}
                  size="workflowTab"
                >
                  <span
                    className={`text-[11px] font-mono w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-emerald-500 text-stone-950 font-bold" : "bg-stone-700 text-stone-400"
                    }`}
                  >
                    {t.num}
                  </span>
                  <span
                    className={`text-[12px] font-medium truncate ${
                      isActive ? "text-emerald-400" : "text-stone-300"
                    }`}
                  >
                    {t.label}
                  </span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Workflow body — tighter padding, no internal vertical rhythm gaps */}
          <div className="px-3 py-3" style={revealStyle(350)}>
            {workflowIdx === 0 && <WorkflowEnquiry stage={stage} />}
            {workflowIdx === 1 && <WorkflowDemo stage={stage} />}
            {workflowIdx === 2 && <WorkflowOnboarding stage={stage} />}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow-down {
          0%   { transform: translateY(-100%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-flow-down {
          animation: flow-down 1.6s ease-in-out infinite;
        }
        @keyframes flow-dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-flow-dash {
          animation: flow-dash 1.4s linear infinite;
        }
      `}</style>
    </div>
  );
}
