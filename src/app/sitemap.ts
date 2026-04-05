import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-04-05",
    },
    {
      url: `${siteConfig.url}/book`,
      lastModified: "2026-04-04",
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: "2026-04-05",
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: "2026-04-05",
    },
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified: "2026-04-05",
    },
    {
      url: `${siteConfig.url}/services/ai-training`,
      lastModified: "2026-04-04",
    },
    {
      url: `${siteConfig.url}/services/ai-automation`,
      lastModified: "2026-04-04",
    },
    {
      url: `${siteConfig.url}/services/digital-services`,
      lastModified: "2026-04-04",
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: "2026-04-04",
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: "2026-04-04",
    },
  ];
}
