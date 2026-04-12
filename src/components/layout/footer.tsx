import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/lib/content";
import { TrackClick } from "@/components/shared/track-click";
import { ManageCookies } from "@/components/layout/manage-cookies";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-stone-900"
            >
              <Image
                src="/logo-dark.svg"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-stone-500 leading-relaxed max-w-[40ch]">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-stone-400">
              Based in {siteConfig.location}
            </p>
            <p className="mt-2 text-[11px] text-stone-400 leading-relaxed">
              {siteConfig.legalName} · Registered in England &amp; Wales ·
              Company No. {siteConfig.companyNumber}
            </p>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Registered office: {siteConfig.registeredOffice.street},{" "}
              {siteConfig.registeredOffice.locality},{" "}
              {siteConfig.registeredOffice.region},{" "}
              {siteConfig.registeredOffice.postalCode}
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
              Services
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ai-training"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                >
                  AI Education
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                >
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-services"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                >
                  Digital Services
                </Link>
              </li>
              <li>
                <TrackClick event="cta_clicked" properties={{ cta_type: "book_training", location: "footer" }}>
                  <Link
                    href="/book?intent=training"
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium py-1 inline-block"
                  >
                    Book Free AI Training
                  </Link>
                </TrackClick>
              </li>
              <li>
                <TrackClick event="cta_clicked" properties={{ cta_type: "book_audit", location: "footer" }}>
                  <Link
                    href="/book?intent=audit"
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium py-1 inline-block"
                  >
                    Book Free AI Audit
                  </Link>
                </TrackClick>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
              Get in Touch
            </p>
            <ul className="space-y-3">
              <li>
                <TrackClick event="contact_clicked" properties={{ method: "whatsapp", location: "footer" }}>
                  <a
                    href={getWhatsAppUrl("Hi Levi, I'd like to chat about AI for my business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium py-1 inline-block"
                  >
                    Message on WhatsApp
                  </a>
                </TrackClick>
              </li>
              <li>
                <TrackClick event="contact_clicked" properties={{ method: "phone", location: "footer" }}>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </TrackClick>
              </li>
              <li>
                <TrackClick event="contact_clicked" properties={{ method: "email", location: "footer" }}>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                  >
                    {siteConfig.email}
                  </a>
                </TrackClick>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors py-1 inline-block"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors py-1 inline-block"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors py-1 inline-block"
            >
              Terms of Service
            </Link>
            <ManageCookies />
          </div>
        </div>
      </div>
    </footer>
  );
}
