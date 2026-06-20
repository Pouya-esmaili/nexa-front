import type { NextConfig } from "next";

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
        // Versioned JS/CSS bundles — safe to cache forever (content-hashed filenames)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
