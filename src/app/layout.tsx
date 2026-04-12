import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { StickyCta } from "@/components/layout/sticky-cta";
import { PostHogProvider } from "@/app/posthog-provider";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  title: {
    default: "AI Education and Implementation for UK Businesses | Quilliam AI",
    template: `%s | Quilliam AI`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Education and Implementation for UK Businesses | Quilliam AI",
    description:
      "A UK AI agency that teaches your team how to use AI properly and builds the automations, agents, and tools that save you hours every week. Based in Cornwall, working UK-wide.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Education and Implementation for UK Businesses | Quilliam AI",
    description:
      "A UK AI agency: we teach your team how to use AI, and we build the systems that save you hours every week.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

function JsonLd() {
  const personSchema: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Levi Quilliam",
    jobTitle: "Founder & Principal Consultant",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}/about`,
    ...(siteConfig.founderImage && {
      image: `${siteConfig.url}${siteConfig.founderImage}`,
    }),
  };

  const organizationSchema = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    description: siteConfig.description,
    founder: { "@id": `${siteConfig.url}/#founder` },
    foundingDate: "2026-04-11",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/og-logo.png`,
      width: 260,
      height: 260,
    },
    image: `${siteConfig.url}/opengraph-image`,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.registeredOffice.street,
      addressLocality: siteConfig.registeredOffice.locality,
      addressRegion: siteConfig.registeredOffice.region,
      postalCode: siteConfig.registeredOffice.postalCode,
      addressCountry: siteConfig.registeredOffice.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.49630",
      longitude: "-4.99830",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "£££",
    // UK Companies House registration number — published in the footer as required under
    // s.82 Companies Act 2006 for the trading name of a UK Ltd company.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK Companies House",
      value: siteConfig.companyNumber,
    },
    ...(siteConfig.socialLinks.length > 0 && {
      sameAs: [...siteConfig.socialLinks],
    }),
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-GB",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, organizationSchema, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-[100dvh] flex flex-col">
        <PostHogProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyCta />
        </PostHogProvider>
      </body>
    </html>
  );
}
