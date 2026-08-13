import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/book`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/ai-automation-cornwall`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/ai-consultant-uk`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: "2026-08-13",
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: "2026-08-13",
    },
  ];
}
