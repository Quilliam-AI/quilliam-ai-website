"use client";

import { memo, useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextScramble = memo(function TextScramble({
  text,
  className,
  delay = 0,
}: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(text.replace(/[^\s]/g, " "));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = text.length + 15;
    let rafId: number;

    const tick = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const revealedCount = Math.floor(progress * text.length);

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayed(next);

      if (frame < totalFrames) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [text, started]);

  return <span className={className}>{displayed}</span>;
});
