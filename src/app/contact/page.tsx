import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { CircuitPattern } from "@/components/shared/pattern-overlay";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import {
  CompaniesHouseLink,
  IcoRegistrationLink,
} from "@/components/shared/legal-links";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Quilliam AI. WhatsApp, phone, or email — we reply within 24 hours. Based in Cornwall, outcome-led AI implementation for owner-led UK businesses.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Quilliam AI",
    description:
      "WhatsApp, phone, or email — we reply within 24 hours.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Contact Quilliam AI",
    description: "WhatsApp, phone, or email — we reply within 24 hours.",
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    description: "Fastest way to reach us. Usually reply within minutes.",
    href: getWhatsAppUrl(
      "Hi Levi, I run an owner-led business and I'd like to map the first AI system worth building.",
    ),
    external: true,
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    description: "Call us directly. Available Monday to Friday, 9am – 5pm.",
    href: `tel:${siteConfig.phone}`,
    external: false,
    primary: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    description: "For detailed enquiries. We reply within 24 hours.",
    href: `mailto:${siteConfig.email}`,
    external: false,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", href: "/contact" }]} />
      <WebPageJsonLd
        path="/contact"
        name="Contact Quilliam AI"
        description="Get in touch with Quilliam AI. WhatsApp, phone, or email — we reply within 24 hours. Based in Cornwall, outcome-led AI implementation for owner-led UK businesses."
        datePublished="2026-04-11"
        dateModified="2026-05-01"
      />

      <section className="relative min-h-[100dvh] bg-stone-950 overflow-hidden">
        <CircuitPattern className="text-emerald-400" />

        {/* Atmospheric glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                  Get in touch
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tighter leading-[1.08] text-white">
                  Let&apos;s talk about
                  <span className="block text-emerald-400">your business</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-6">
                <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-[48ch]">
                  Whether you want to map your first AI opportunity, pressure
                  test an outcome, or work out whether this is a fit — message,
                  call, or email. No sales pressure, no jargon.
                </p>
              </FadeIn>

              {/* Location + hours */}
              <FadeIn delay={0.4} className="mt-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin
                        size={16}
                        className="text-emerald-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {siteConfig.location}
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                        Quilliam AI Ltd · Company No.{" "}
                        <CompaniesHouseLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-300 transition-colors" />
                      </p>
                      <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                        ICO registration:{" "}
                        <IcoRegistrationLink className="underline decoration-stone-700 underline-offset-2 hover:text-stone-400 transition-colors" />
                      </p>
                      <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                        Registered office: {siteConfig.registeredOffice.street},{" "}
                        {siteConfig.registeredOffice.locality},{" "}
                        {siteConfig.registeredOffice.region},{" "}
                        {siteConfig.registeredOffice.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock
                        size={16}
                        className="text-emerald-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Mon – Fri, 9am – 5pm
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                        WhatsApp messages are checked outside hours too.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* CTA to mapping */}
              <FadeIn delay={0.5} className="mt-10">
                <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800/60">
                  <p className="text-sm font-semibold text-white">
                    Want the simplest first step?
                  </p>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Map the first AI system worth building and the metric it
                    should move before you spend anything.
                  </p>
                  <div className="mt-4">
                    <Button asChild size="full">
                      <Link href="/book">
                        Map my first AI system
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: contact methods */}
            <div className="flex flex-col justify-center gap-5">
              {contactMethods.map((method, i) => (
                <FadeIn key={method.label} delay={0.2 + i * 0.1} direction="left">
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`group block rounded-2xl p-6 border transition-colors ${
                      method.primary
                        ? "bg-emerald-900/20 border-emerald-800/40 hover:border-emerald-700/60"
                        : "bg-stone-900 border-stone-800/60 hover:border-stone-700"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          method.primary
                            ? "bg-emerald-900/60 border border-emerald-800/40"
                            : "bg-stone-800 border border-stone-700/60"
                        }`}
                      >
                        <method.icon
                          size={20}
                          className="text-emerald-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
                          {method.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                          {method.value}
                        </p>
                        <p className="mt-1 text-sm text-stone-400 leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-stone-600 group-hover:text-emerald-400 transition-colors mt-1 shrink-0"
                      />
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
