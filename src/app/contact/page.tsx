import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { TrackClick } from "@/components/shared/track-click";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { getWhatsAppUrl, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quilliam AI about AI consulting, staff training, workflows and supervised agents. Based in Cornwall and working throughout the UK.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Quilliam AI",
    description:
      "Contact Quilliam AI about AI assessment, training, workflows and supervised agents.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Quilliam AI",
    description:
      "Contact Quilliam AI about AI assessment, training, workflows and supervised agents.",
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message Levi",
    description: "Suitable for a brief initial enquiry.",
    href: getWhatsAppUrl("Hi Levi, I would like to discuss AI services for my business."),
    method: "whatsapp",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    description: "Available Monday to Friday, 9am-5pm UK time.",
    href: `tel:${siteConfig.phone}`,
    method: "phone",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    description: "Suitable for detailed requirements or procurement enquiries.",
    href: `mailto:${siteConfig.email}`,
    method: "email",
    external: false,
  },
] as const;

function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#contactpage`,
    url: `${siteConfig.url}/contact`,
    name: "Contact Quilliam AI",
    description:
      "Contact Quilliam AI about AI workflows, supervised agents, AI training, and implementation for UK businesses.",
    inLanguage: "en-GB",
    about: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Message Quilliam AI on WhatsApp",
        target: getWhatsAppUrl(
          "Hi Levi, I would like to discuss AI services for my business.",
        ),
      },
      {
        "@type": "CommunicateAction",
        name: "Email Quilliam AI",
        target: `mailto:${siteConfig.email}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", href: "/contact" }]} />
      <WebPageJsonLd
        path="/contact"
        name="Contact Quilliam AI"
        description="Contact Quilliam AI about AI assessment, training, workflows and supervised agents."
        datePublished="2026-04-11"
        dateModified="2026-08-13"
      />
      <ContactPageJsonLd />

      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-28 text-paper md:pb-28 md:pt-36">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="noise absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Contact
            </p>
            <h1 className="mt-6 max-w-[820px] text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              Contact Quilliam AI.
            </h1>
            <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-paper/68 md:text-lg">
              Set out the process, training requirement or proposed project.
              Levi will review the information and respond with an initial view
              on scope and the appropriate next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="max-w-full whitespace-normal text-center leading-tight tracking-normal normal-case sm:whitespace-nowrap"
              >
                <Link href="/book?intent=opportunity">
                  Book Free AI Opportunity
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm font-bold tracking-normal text-paper normal-case"
              >
                <Link href="/#workflows">Review the case study</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {contactMethods.map((method) => (
              <TrackClick
                key={method.label}
                event="contact_clicked"
                properties={{ method: method.method, location: "contact" }}
              >
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="rounded-card-lg group grid gap-4 border border-paper/10 bg-paper/[0.025] p-5 transition-colors hover:border-signal/35 hover:bg-signal/[0.035] sm:grid-cols-[3rem_1fr_auto] sm:items-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[1.125rem] border border-signal/30 bg-signal/10 text-signal">
                    <method.icon size={22} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-paper/45">
                      {method.label}
                    </span>
                    <span className="mt-2 block text-xl font-semibold tracking-tight text-paper">
                      {method.value}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-paper/60">
                      {method.description}
                    </span>
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-paper/35 transition-transform group-hover:translate-x-1 group-hover:text-signal"
                  />
                </a>
              </TrackClick>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <MapPin size={21} className="text-cyan-wire" />
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-paper">
                  {siteConfig.location}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  Based in Cornwall, with remote and in-person delivery
                  available throughout the UK.
                </p>
              </div>
              <div className="rounded-card-lg border border-paper/10 bg-paper/[0.025] p-5">
                <Clock size={21} className="text-amber-wire" />
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-paper">
                  Response time
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  We usually respond within 24 hours and will state whether the
                  proposed work appears suitable for further assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
