import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { siteConfig } from "@/lib/content";
import {
  LegalSection,
  LegalHero,
  LegalContent,
} from "@/components/shared/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Quilliam Digital collects, uses, and protects your personal data. GDPR-compliant privacy practices for our AI automation services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Quilliam Digital",
    description:
      "How Quilliam Digital collects, uses, and protects your personal data. GDPR-compliant privacy practices.",
    url: "/privacy",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Privacy Policy | Quilliam Digital",
    description:
      "How Quilliam Digital collects, uses, and protects your personal data. GDPR-compliant privacy practices.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "4 April 2026";

  return (
    <article className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <LegalHero title="Privacy Policy" lastUpdated={lastUpdated} />

      <LegalContent>
        <LegalSection title="Who we are">
          <p>
            Quilliam Digital is an AI automation consultancy based in
            Cornwall, UK. When this policy mentions &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;, it refers to Quilliam
            Digital.
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
              <strong>Analytics data</strong> &mdash; anonymised usage data
              such as pages visited, time on site, and referring URL. We do
              not use cookies for tracking.
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
            <li>Deliver and improve our AI automation services.</li>
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
              <strong>Analytics data</strong> &mdash; anonymised and
              aggregated, with no personal identifiers retained.
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

        <LegalSection title="Cookies">
          <p>
            This website does not use tracking cookies. We may use strictly
            necessary cookies for functionality (e.g. form submission state).
            These do not require consent under UK cookie regulations.
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
              <strong>Location:</strong> Cornwall, UK
            </li>
          </ul>
        </LegalSection>
      </LegalContent>
    </article>
  );
}
