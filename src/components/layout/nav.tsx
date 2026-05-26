"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/content";
import { trackBookOpportunityClicked } from "@/lib/analytics";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [observedHash, setObservedHash] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeHash = isHome ? observedHash : "";

  function resolveHref(href: string): string {
    if (!href.startsWith("/#")) return href;
    return isHome ? href.slice(1) : href;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith("/#"))
      .map((href) => href.slice(2));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setObservedHash(`/#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isHome]);

  function isActive(href: string): boolean {
    if (href.startsWith("/#")) {
      return isHome && activeHash === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const shellClass = scrolled
    ? "opacity-95"
    : "opacity-100";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`liquid-nav mx-auto max-w-[1240px] rounded-[2rem] transition-all duration-300 ${shellClass}`}
      >
        <nav className="flex h-14 items-center justify-between px-3 md:pl-4 md:pr-2">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex min-w-0 items-center gap-3 px-1 text-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[0.85rem] border border-ink/10 bg-ink/92 shadow-[0_8px_24px_-18px_rgba(18,16,12,0.75)]">
              <Image
                src="/logo-white.svg"
                alt=""
                width={28}
                height={28}
                sizes="28px"
                className="h-7 w-7"
              />
            </span>
            <span className="hidden whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] lg:block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={resolveHref(item.href)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive(item.href)
                    ? "text-signal-strong"
                    : "text-ink/52 hover:text-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              size="sm"
              className="h-10 px-4 text-sm normal-case tracking-normal hover:translate-y-0"
            >
              <Link
                href="/book?intent=opportunity"
                onClick={() => trackBookOpportunityClicked("nav")}
              >
                Ready to Implement
                <ChevronRight size={15} strokeWidth={2.2} />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/45 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open ? (
          <div className="overflow-hidden border-t border-ink/10 md:hidden">
            <div className="space-y-1 p-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={resolveHref(item.href)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] ${
                    isActive(item.href)
                      ? "bg-signal/12 text-signal-strong"
                      : "text-ink/58 hover:bg-white/35 hover:text-ink"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 w-full whitespace-normal text-center leading-tight tracking-normal normal-case"
              >
                <Link
                  href="/book?intent=opportunity"
                  onClick={() => {
                    trackBookOpportunityClicked("nav");
                    setOpen(false);
                  }}
                >
                  Ready to Implement
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
