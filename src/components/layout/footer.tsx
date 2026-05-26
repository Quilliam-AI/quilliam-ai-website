import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ManageCookies } from "@/components/layout/manage-cookies";
import { TrackClick } from "@/components/shared/track-click";
import { getWhatsAppUrl, siteConfig } from "@/lib/content";

const footerNavigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "AI Consultant UK", href: "/ai-consultant-uk" },
  { name: "AI Automation Cornwall", href: "/ai-automation-cornwall" },
  { name: "Where We Work", href: "/service-areas" },
  { name: "About", href: "/about" },
  { name: "Book", href: "/book?intent=opportunity" },
  { name: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[520px]">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-ink/12 bg-ink">
                <Image
                  src="/logo-white.svg"
                  alt=""
                  width={24}
                  height={24}
                  sizes="24px"
                  className="h-5 w-5"
                />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/72">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 max-w-[38ch] text-lg font-medium leading-snug text-ink/82 md:text-xl">
              Practical AI consulting, workflow builds, and team training.
            </p>
            <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-ink/58">
              We help UK businesses make sense of AI, build the useful bit, and
              hand it to the team properly. Based in Cornwall. Working UK-wide
              and remote.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                {footerNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 py-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                    >
                      {item.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <TrackClick
                    event="contact_clicked"
                    properties={{ method: "whatsapp", location: "footer" }}
                  >
                    <a
                      href={getWhatsAppUrl(
                        "Hi Levi, I want to talk about AI for my business.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-ink transition-colors hover:text-signal-strong"
                    >
                      <MessageCircle size={16} />
                      Message on WhatsApp
                    </a>
                  </TrackClick>
                </li>
                <li>
                  <TrackClick
                    event="contact_clicked"
                    properties={{ method: "phone", location: "footer" }}
                  >
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 py-1 text-sm text-ink/70 transition-colors hover:text-ink"
                    >
                      <Phone size={16} />
                      {siteConfig.phoneDisplay}
                    </a>
                  </TrackClick>
                </li>
                <li>
                  <TrackClick
                    event="contact_clicked"
                    properties={{ method: "email", location: "footer" }}
                  >
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 py-1 text-sm text-ink/70 transition-colors hover:text-ink"
                    >
                      <Mail size={16} />
                      {siteConfig.email}
                    </a>
                  </TrackClick>
                </li>
                <li className="flex items-start gap-2 py-1 text-sm text-ink/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.location}
                </li>
                <li>
                  <a
                    href={siteConfig.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    <ArrowUpRight size={16} />
                    Google Business Profile
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.companiesHouseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    <ArrowUpRight size={16} />
                    Companies House
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6">
          <div className="grid gap-5 text-xs text-ink/50 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-1">
              <p>
                &copy; {new Date().getFullYear()} {siteConfig.legalName}. All
                rights reserved.
              </p>
              <p>
                Registered in England and Wales. Company No.{" "}
                {siteConfig.companyNumber}. Registered office:{" "}
                {siteConfig.registeredOffice.street},{" "}
                {siteConfig.registeredOffice.locality},{" "}
                {siteConfig.registeredOffice.postalTown},{" "}
                {siteConfig.registeredOffice.region},{" "}
                {siteConfig.registeredOffice.postalCode}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pr-16 leading-none md:justify-end lg:pr-0">
              <Link
                href="/privacy"
                className="inline-flex items-center leading-none hover:text-ink"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center leading-none hover:text-ink"
              >
                Terms
              </Link>
              <ManageCookies />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
