"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4">
      <header
        className={`w-full max-w-[1200px] transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-white/70 backdrop-blur-2xl border border-stone-200/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]"
            : "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        }`}
      >
        <nav className="flex items-center justify-between px-5 h-14">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 transition-colors duration-500 ${
              scrolled ? "text-stone-950" : "text-white"
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-stone-500 hover:text-stone-950 hover:bg-stone-100"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className={`rounded-xl px-5 h-8 text-[13px] font-medium transition-all duration-500 ${
                scrolled
                  ? "bg-stone-950 hover:bg-stone-800 text-white"
                  : "bg-white text-stone-950 hover:bg-white/90"
              }`}
            >
              <Link href="/contact">Book a Sprint</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-1.5 rounded-lg transition-colors ${
              scrolled
                ? "text-stone-950 hover:bg-stone-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X size={20} strokeWidth={2.5} />
            ) : (
              <Menu size={20} strokeWidth={2.5} />
            )}
          </button>
        </nav>

        {/* Mobile dropdown inside the glass pill */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-2 border-t border-stone-200/30 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                  scrolled
                    ? "text-stone-700 hover:bg-stone-100"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-xl mt-2 w-full bg-emerald-600 hover:bg-emerald-700 h-10"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a Free Sprint
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
