import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-05-03";

  return [
    {
      url: siteConfig.url,
      lastModified,
    },
    {
      url: `${siteConfig.url}/book`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
    },
  ];
}
