import type { NextConfig } from "next";
import { POSTHOG_PROXY_PATH } from "./src/lib/posthog-config";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Required for the PostHog reverse proxy. PostHog uses trailing-slash API
  // endpoints like /e/, and redirecting them breaks event ingestion.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/services/ai-training",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/ai-automation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/digital-services",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `${POSTHOG_PROXY_PATH}/static/:path*`,
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: `${POSTHOG_PROXY_PATH}/array/:path*`,
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: `${POSTHOG_PROXY_PATH}/:path*`,
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://eu.posthog.com; worker-src 'self' blob:; frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
