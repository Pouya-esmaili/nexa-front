import type { NextConfig } from "next";

// In dev, Next reuses stable chunk names, so an `immutable` cache freezes edits
// in the browser. Only send long-lived immutable caching in production, where
// bundles are content-hashed.
const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // HTML pages: always fresh — prevents stale HTML pointing to old JS bundles after deploy
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // Versioned JS/CSS bundles — safe to cache forever in prod (content-hashed filenames);
        // no caching in dev so edits show without a hard refresh.
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: isDev
              ? "no-store, must-revalidate"
              : "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Local images — cache 7 days, no stale-while-revalidate
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [],
  },
};

// Bundle analyzer (enabled by running `ANALYZE=true npm run analyze`)
// Uses @next/bundle-analyzer to produce a bundle-size report.
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' || process.env.ANALYZE === '1' || process.env.ANALYZE,
});

export default withBundleAnalyzer(nextConfig);
