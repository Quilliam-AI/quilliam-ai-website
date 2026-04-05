import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { siteConfig } from "@/lib/content";
import {
  LegalSection,
  LegalHero,
  LegalContent,
} from "@/components/shared/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Quilliam Digital's website and AI automation services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Quilliam Digital",
    description:
      "Terms and conditions for using Quilliam Digital's website and AI automation services.",
    url: "/terms",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Terms of Service | Quilliam Digital",
    description:
      "Terms and conditions for using Quilliam Digital's website and AI automation services.",
  },
};

export default function TermsPage() {
  const lastUpdated = "4 April 2026";

  return (
    <article className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Terms of Service", href: "/terms" }]} />
      <LegalHero title="Terms of Service" lastUpdated={lastUpdated} />

      <LegalContent>
        <LegalSection title="1. Agreement to terms">
          <p>
            By accessing or using the Quilliam Digital website
            (quilliamdigital.com) or engaging our services, you agree to be
            bound by these terms. If you do not agree, please do not use
            our website or services.
          </p>
        </LegalSection>

        <LegalSection title="2. Our services">
          <p>
            Quilliam Digital provides AI automation consulting, workflow
            automation, and related digital services for small businesses.
            Our services include but are not limited to:
          </p>
          <ul>
            <li>AI Audits (discovery and implementation sessions).</li>
            <li>Workflow automation setup and integration.</li>
            <li>AI chatbot development and deployment.</li>
            <li>Ongoing automation support and optimisation.</li>
          </ul>
          <p>
            Specific deliverables, timelines, and fees will be agreed in
            writing before any paid work begins.
          </p>
        </LegalSection>

        <LegalSection title="3. Booking and payment">
          <p>
            <strong>Free consultations:</strong> The AI Audit is free
            and carries no obligation.
          </p>
          <p>
            <strong>Paid engagements:</strong> For any paid work, we will
            provide a written proposal outlining the scope, deliverables,
            timeline, and cost. Work will not begin until both parties have
            agreed to the proposal in writing.
          </p>
          <p>
            <strong>Payment terms:</strong> Unless otherwise agreed,
            invoices are due within 14 days of issue. We reserve the right
            to pause work on overdue accounts.
          </p>
        </LegalSection>

        <LegalSection title="4. Intellectual property">
          <p>
            <strong>Our IP:</strong> All content on this website &mdash;
            including text, design, code, and graphics &mdash; is owned by
            Quilliam Digital and protected by UK copyright law. You may not
            reproduce, distribute, or modify any content without our
            written permission.
          </p>
          <p>
            <strong>Your IP:</strong> You retain ownership of all data,
            content, and materials you provide to us. By sharing them, you
            grant us a limited licence to use them solely for delivering
            your project.
          </p>
          <p>
            <strong>Deliverables:</strong> Once a project is paid in full,
            ownership of custom deliverables (automations, workflows, bots)
            transfers to you. We retain the right to use anonymised
            examples for portfolio and case study purposes unless you
            request otherwise.
          </p>
        </LegalSection>

        <LegalSection title="5. Confidentiality">
          <p>
            Both parties agree to keep confidential any proprietary
            information shared during the engagement. This includes
            business processes, financial data, customer information, and
            technical implementations. This obligation survives the end of
            any engagement.
          </p>
        </LegalSection>

        <LegalSection title="6. Limitation of liability">
          <p>
            Our services are provided &ldquo;as is&rdquo;. While we take
            every reasonable step to deliver high-quality work:
          </p>
          <ul>
            <li>
              We do not guarantee specific business outcomes (e.g. revenue
              increases, time savings) as results depend on factors outside
              our control.
            </li>
            <li>
              Our total liability for any claim arising from our services
              is limited to the amount you paid us for the specific project
              in question.
            </li>
            <li>
              We are not liable for indirect, consequential, or incidental
              damages, including lost profits or data loss.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Third-party tools">
          <p>
            Our automations may integrate with third-party platforms (e.g.
            Make, Zapier, OpenAI, WhatsApp Business). We are not
            responsible for:
          </p>
          <ul>
            <li>
              Changes to third-party APIs, pricing, or terms of service.
            </li>
            <li>Downtime or outages of third-party services.</li>
            <li>
              Data handling by third-party platforms &mdash; please review
              their own terms and privacy policies.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Cancellation and refunds">
          <p>
            <strong>Before work begins:</strong> You may cancel at any time
            before work starts for a full refund of any advance payment.
          </p>
          <p>
            <strong>During a project:</strong> If you wish to cancel
            mid-project, you will be invoiced for work completed to date.
            Any unused advance payment will be refunded.
          </p>
          <p>
            <strong>Our right to cancel:</strong> We reserve the right to
            terminate an engagement if terms are breached, payments are
            significantly overdue, or the working relationship becomes
            untenable. We will provide reasonable notice and invoice only
            for work completed.
          </p>
        </LegalSection>

        <LegalSection title="9. Website use">
          <p>You agree not to:</p>
          <ul>
            <li>
              Use this website for any unlawful purpose or in violation of
              any applicable laws.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the
              website or its systems.
            </li>
            <li>
              Scrape, crawl, or extract data from this website beyond what
              is permitted by our{" "}
              <Link href="/privacy">privacy policy</Link> and robots.txt.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="10. Governing law">
          <p>
            These terms are governed by the laws of England and Wales. Any
            disputes will be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>
        </LegalSection>

        <LegalSection title="11. Changes to these terms">
          <p>
            We may update these terms from time to time. Changes will be
            posted on this page with an updated date. Continued use of our
            website or services after changes are posted constitutes
            acceptance of the updated terms.
          </p>
        </LegalSection>

        <LegalSection title="12. Contact">
          <p>
            If you have questions about these terms, get in touch:
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
