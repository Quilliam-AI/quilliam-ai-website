import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/shared/webpage-jsonld";
import { siteConfig } from "@/lib/content";
import {
  LegalSection,
  LegalHero,
  LegalContent,
} from "@/components/shared/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Quilliam AI collects, uses, and protects your personal data. GDPR-compliant privacy practices for our AI education, implementation, and digital services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Quilliam AI",
    description:
      "How Quilliam AI collects, uses, and protects your personal data. GDPR-compliant privacy practices.",
    url: "/privacy",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Privacy Policy | Quilliam AI",
    description:
      "How Quilliam AI collects, uses, and protects your personal data. GDPR-compliant privacy practices.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "12 April 2026";

  return (
    <article className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <WebPageJsonLd
        path="/privacy"
        name="Privacy Policy | Quilliam AI"
        description="Quilliam AI's privacy policy. How we collect, use, and protect your personal information."
        datePublished="2026-04-11"
        dateModified="2026-04-12"
      />
      <LegalHero title="Privacy Policy" lastUpdated={lastUpdated} />

      <LegalContent>
        <LegalSection title="Who we are">
          <p>
            Quilliam AI is the trading name of{" "}
            <strong>Quilliam AI Ltd</strong>, a UK private limited company
            registered in England and Wales (Companies House number{" "}
            {siteConfig.companyNumber}), with registered office at{" "}
            {siteConfig.registeredOffice.street},{" "}
            {siteConfig.registeredOffice.locality},{" "}
            {siteConfig.registeredOffice.region},{" "}
            {siteConfig.registeredOffice.postalCode}. We are a UK AI agency
            offering AI education, AI implementation, and digital services
            to businesses nationwide. When this policy mentions
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;, it
            refers to Quilliam AI Ltd.
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </LegalSection>

        <LegalSection title="What data we collect">
          <p>We collect the following information when you use our website or services:</p>
          <ul>
            <li>
              <strong>Contact form submissions</strong> &mdash; your name,
              email address, phone number (if provided), business name, and
              message content.
            </li>
            <li>
              <strong>Analytics data</strong> &mdash; usage data such as
              pages visited, buttons clicked, time on site, and referring
              URL. With your consent, we also record browsing sessions
              (with passwords masked). See the Cookies section below.
            </li>
            <li>
              <strong>Communication records</strong> &mdash; emails,
              WhatsApp messages, or other correspondence you send us.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="How we use your data">
          <p>We use the data we collect to:</p>
          <ul>
            <li>Respond to your enquiries and booking requests.</li>
            <li>Deliver and improve our AI education, implementation, and digital services.</li>
            <li>Send project updates and follow-ups you have requested.</li>
            <li>
              Understand how visitors use our website so we can improve it.
            </li>
          </ul>
          <p>
            We will <strong>never</strong> sell your data to third parties
            or use it for unsolicited marketing without your explicit
            consent.
          </p>
        </LegalSection>

        <LegalSection title="Legal basis for processing">
          <p>Under UK GDPR, we process your data on the following bases:</p>
          <ul>
            <li>
              <strong>Consent</strong> &mdash; when you submit a contact
              form or reach out to us directly.
            </li>
            <li>
              <strong>Legitimate interests</strong> &mdash; to improve our
              website and understand how our services are used.
            </li>
            <li>
              <strong>Contractual necessity</strong> &mdash; to deliver
              services you have engaged us for.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Third-party services">
          <p>
            We use a limited number of third-party services to operate our
            business:
          </p>
          <ul>
            <li>
              <strong>Resend</strong> &mdash; to deliver transactional
              emails (booking confirmations). Their{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong> &mdash; to host this website. Their{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              .
            </li>
          </ul>
          <p>
            We do not use Google Analytics, Facebook Pixel, or any
            advertising trackers.
          </p>
          <p>
            <strong>PostHog</strong> &mdash; we use PostHog (EU Cloud,
            data hosted in Frankfurt) for website analytics and session
            recordings. PostHog processes data as a processor on our behalf.
            Their{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Data retention">
          <p>
            We retain your personal data only for as long as necessary to
            fulfil the purpose it was collected for:
          </p>
          <ul>
            <li>
              <strong>Booking enquiries</strong> &mdash; retained for 12
              months after your last interaction, then deleted.
            </li>
            <li>
              <strong>Client project data</strong> &mdash; retained for the
              duration of the engagement plus 24 months.
            </li>
            <li>
              <strong>Analytics data</strong> &mdash; retained for 12
              months, then automatically deleted. Session recordings
              are retained for 30 days.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> your personal data we hold.
            </li>
            <li>
              <strong>Correct</strong> inaccurate data.
            </li>
            <li>
              <strong>Delete</strong> your data (&ldquo;right to be
              forgotten&rdquo;).
            </li>
            <li>
              <strong>Restrict</strong> or <strong>object to</strong>{" "}
              processing.
            </li>
            <li>
              <strong>Data portability</strong> &mdash; receive your data in
              a structured, machine-readable format.
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            . We will respond within 30 days.
          </p>
          <p>
            You also have the right to lodge a complaint with the{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Information Commissioner&rsquo;s Office (ICO)
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Cookies" id="cookies">
          <p>
            When you first visit our website, we show a cookie consent
            banner. You can choose to accept or reject non-essential cookies.
          </p>
          <ul>
            <li>
              <strong>If you accept</strong> &mdash; we set cookies and use
              localStorage to track your session across pages and visits.
              This enables session recordings (a replay of how you
              interacted with the site, with passwords masked) and
              persistent analytics that help us improve the website. We use
              PostHog for this, hosted on EU infrastructure (Frankfurt).
            </li>
            <li>
              <strong>If you reject</strong> &mdash; we do not set any
              cookies or use localStorage for tracking. Analytics events
              (page views, button clicks) are still captured in memory
              during your visit but cannot be linked across sessions or
              identified to you. Session recordings are disabled.
            </li>
          </ul>
          <p>
            Your preference is stored in your browser&rsquo;s localStorage
            as <code>cookie_consent</code>. To change your preference,
            clear your browser&rsquo;s localStorage for this site and
            refresh the page &mdash; the consent banner will reappear.
          </p>
          <p>
            We do not use any advertising cookies, third-party tracking
            pixels, or retargeting tools.
          </p>
        </LegalSection>

        <LegalSection title="Changes to this policy">
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated &ldquo;last updated&rdquo;
            date. We will not reduce your rights under this policy without
            your explicit consent.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            If you have any questions about this privacy policy or how we
            handle your data, get in touch:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong>Registered office:</strong>{" "}
              {siteConfig.registeredOffice.street},{" "}
              {siteConfig.registeredOffice.locality},{" "}
              {siteConfig.registeredOffice.region},{" "}
              {siteConfig.registeredOffice.postalCode}
            </li>
            <li>
              <strong>Company No.:</strong> {siteConfig.companyNumber} (England &amp; Wales)
            </li>
          </ul>
        </LegalSection>
      </LegalContent>
    </article>
  );
}
