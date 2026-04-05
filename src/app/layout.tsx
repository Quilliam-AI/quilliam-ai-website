import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { StickyCta } from "@/components/layout/sticky-cta";
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
    default: "AI Solutions for UK Small Businesses | Quilliam Digital",
    template: `%s | Quilliam Digital`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Solutions for UK Small Businesses | Quilliam Digital",
    description:
      "We help UK small businesses use AI to save time, win more customers, and automate repetitive work. Based in Cornwall, working UK-wide.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions for UK Small Businesses | Quilliam Digital",
    description:
      "We help UK small businesses use AI to save time, win more customers, and automate repetitive work.",
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
  const personSchema = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Levi Quilliam",
    jobTitle: "Founder",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}/#about`,
  };

  const organizationSchema = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    description: siteConfig.description,
    founder: { "@id": `${siteConfig.url}/#founder` },
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
      addressRegion: "Cornwall",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.26600",
      longitude: "-5.05100",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "££",
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCta />
      </body>
    </html>
  );
}
