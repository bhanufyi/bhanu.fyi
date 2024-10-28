import { withContentlayer } from "next-contentlayer";

process.env.SITE_URL =
  process.env.SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";

export default withContentlayer({
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "i.imgur.com" },
      { hostname: "media2.dev.to" },
    ],
  },
});
