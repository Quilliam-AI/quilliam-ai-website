import { siteConfig } from "@/lib/content";

interface WebPageJsonLdProps {
  path: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageJsonLd({
  path,
  name,
  description,
  datePublished,
  dateModified,
}: WebPageJsonLdProps) {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
