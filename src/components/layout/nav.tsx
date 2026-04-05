"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig, navigation, serviceLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Resolve hash links: on homepage use bare "#section" for native scroll,
  // on subpages use "/#section" to navigate home first.
  function resolveHref(href: string): string {
    if (!href.startsWith("/#")) return href;
    return isHome ? href.slice(1) : href; // "/#services" → "#services" on homepage
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which homepage section is in view
  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sectionIds = navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith("/#"))
      .map((href) => href.slice(2));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`/#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  function isActive(href: string): boolean {
    // Hash links (/#section): match against the currently visible section
    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      return activeHash === href;
    }
    // Route links: match against the current pathname
    return pathname === href || pathname.startsWith(href + "/");
  }

  function isServicesActive(): boolean {
    // Active if on homepage #services section or any /services/* page
    if (pathname.startsWith("/services")) return true;
    return activeHash === "/#services";
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4">
      <header
        className={`w-full max-w-[1200px] transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-stone-950/80 backdrop-blur-2xl border border-stone-800/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        }`}
      >
        <nav className="flex items-center justify-between px-5 h-14">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white transition-colors duration-500"
          >
            <Image
              src="/logo-white.svg"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="text-[15px] font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.name === "Services" ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={resolveHref(item.href)}
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isServicesActive()
                        ? "text-emerald-400"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-52 rounded-xl bg-stone-950/90 backdrop-blur-2xl border border-stone-800/60 shadow-xl p-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive(service.href)
                              ? "text-emerald-400 bg-emerald-400/10"
                              : "text-white/60 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={resolveHref(item.href)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-emerald-400"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="rounded-xl px-5 h-8 text-[13px] font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-500"
            >
              <Link href="/book">
                Free AI Audit
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
          aria-hidden={!open}
        >
          <div className="px-5 pb-5 pt-2 border-t border-white/10 flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={resolveHref(item.href)}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-[15px] font-medium transition-colors block ${
                    item.name === "Services"
                      ? isServicesActive()
                        ? "text-emerald-400"
                        : "text-white/80 hover:bg-white/10"
                      : isActive(item.href)
                        ? "text-emerald-400"
                        : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
                {item.name === "Services" && (
                  <div className="ml-4 flex flex-col gap-0.5">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                          isActive(service.href)
                            ? "text-emerald-400"
                            : "text-white/50 hover:text-white/80 hover:bg-white/10"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              asChild
              className="rounded-xl mt-2 w-full bg-emerald-600 hover:bg-emerald-700 h-10"
            >
              <Link
                href="/book"
                onClick={() => setOpen(false)}
              >
                Book a Free AI Audit
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
