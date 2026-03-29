"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, TrendingUp, Clock } from "lucide-react";

/* ─── Isolated perpetual-motion micro-components ─── */

const TypingBubble = memo(function TypingBubble() {
  const messages = [
    "How much is a monthly membership?",
    "What classes do you have on Mondays?",
    "Can I book a personal training session?",
  ];
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const msg = messages[idx];
    if (charIdx < msg.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 35);
      return () => clearTimeout(t);
    }
    const replyTimer = setTimeout(() => setShowReply(true), 600);
    const nextTimer = setTimeout(() => {
      setShowReply(false);
      setCharIdx(0);
      setIdx((i) => (i + 1) % messages.length);
    }, 3000);
    return () => {
      clearTimeout(replyTimer);
      clearTimeout(nextTimer);
    };
  }, [charIdx, idx, messages]);

  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <div className="bg-emerald-600 text-white text-[11px] leading-relaxed rounded-2xl rounded-br-md px-3 py-1.5 max-w-[85%]">
          {messages[idx].slice(0, charIdx)}
          <span className="inline-block w-[2px] h-3 bg-white/70 ml-0.5 animate-pulse align-middle" />
        </div>
      </div>
      {showReply && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
          className="flex justify-start"
        >
          <div className="bg-stone-100 text-stone-700 text-[11px] leading-relaxed rounded-2xl rounded-bl-md px-3 py-1.5 max-w-[85%]">
            Handled instantly by AI
          </div>
        </motion.div>
      )}
    </div>
  );
});

const CountingNumber = memo(function CountingNumber() {
  const [count, setCount] = useState(0);
  const target = 12.4;

  useEffect(() => {
    let frame = 0;
    const totalFrames = 60;
    let rafId: number;
    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(1)));
      if (frame < totalFrames) rafId = requestAnimationFrame(tick);
    };
    const delay = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, 800);
    return () => {
      clearTimeout(delay);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="text-center">
      <span className="text-3xl font-mono font-semibold text-stone-950 tabular-nums">
        {count}
      </span>
      <span className="text-lg font-mono text-emerald-600 ml-0.5">hrs</span>
      <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">
        saved this week
      </p>
    </div>
  );
});

const FillingStars = memo(function FillingStars() {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilled((f) => {
        if (f >= 5) {
          setTimeout(() => setFilled(0), 1200);
          return 5;
        }
        return f + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="flex gap-1 justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: i < filled ? 1.15 : 0.9, opacity: i < filled ? 1 : 0.25 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
          >
            <Star
              size={18}
              className={i < filled ? "text-amber-400 fill-amber-400" : "text-stone-300"}
            />
          </motion.div>
        ))}
      </div>
      <p className="text-[10px] text-stone-400 mt-1.5 uppercase tracking-widest">
        new review captured
      </p>
    </div>
  );
});

const PulsingClock = memo(function PulsingClock() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center"
      >
        <Clock size={16} className="text-emerald-600" />
      </motion.div>
      <div>
        <p className="text-xs font-medium text-stone-800">Next Sprint</p>
        <p className="text-[10px] text-stone-400">Tomorrow, 10:00 AM</p>
      </div>
    </div>
  );
});

/* ─── Bento Grid Assembly ─── */

const tileSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
};

export const BentoHeroGrid = memo(function BentoHeroGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-3 w-full max-w-[420px]">
      {/* Chat tile — spans 2 cols, tallest */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...tileSpring, delay: 0.5 }}
        className="col-span-2 rounded-[1.5rem] bg-white border border-stone-200/50 p-5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
            <MessageSquare size={13} className="text-emerald-600" />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">
            AI Receptionist
          </span>
          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <TypingBubble />
      </motion.div>

      {/* Counter tile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...tileSpring, delay: 0.7 }}
        className="rounded-[1.5rem] bg-white border border-stone-200/50 p-5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center"
      >
        <CountingNumber />
      </motion.div>

      {/* Stars tile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...tileSpring, delay: 0.85 }}
        className="rounded-[1.5rem] bg-white border border-stone-200/50 p-5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center"
      >
        <FillingStars />
      </motion.div>

      {/* Schedule tile — spans 2 cols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...tileSpring, delay: 1.0 }}
        className="col-span-2 rounded-[1.5rem] bg-white border border-stone-200/50 p-5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={13} className="text-emerald-600" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">
            Automation Active
          </span>
        </div>
        <PulsingClock />
      </motion.div>
    </div>
  );
});
