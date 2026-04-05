import { siteConfig } from "@/lib/content";

interface VideoJsonLdProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}

/**
 * VideoObject JSON-LD schema.
 * Add to any page that embeds a video.
 *
 * Usage:
 * ```tsx
 * <VideoJsonLd
 *   name="How AI Automation Works for Small Businesses"
 *   description="..."
 *   thumbnailUrl="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
 *   uploadDate="2026-04-05"
 *   embedUrl="https://www.youtube.com/embed/VIDEO_ID"
 * />
 * ```
 */
export function VideoJsonLd({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
