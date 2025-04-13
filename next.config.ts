import type { NextConfig } from "next";
import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1zgdcrdir5wgt.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "siucenuaxbwrwnbcirnc.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default withPWA({
  dest: "public",
  disable: isDev, // Disable service worker during dev
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      // Cache Supabase API responses
      urlPattern:
        /^https:\/\/siucenuaxbwrwnbcirnc\.supabase\.co\/rest\/v1\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "supabase-api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      // Cache your frontend pages (static / pre-rendered)
      urlPattern: /^https:\/\/resume-vantage-zeta\.vercel\.app\/.*/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-pages-cache",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      // Cache images from known remote hosts
      urlPattern:
        /^https:\/\/(d1zgdcrdir5wgt\.cloudfront\.net|lh3\.googleusercontent\.com|siucenuaxbwrwnbcirnc\.supabase\.co|www\.pexels\.com)\/.*/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
})(nextConfig as never);
