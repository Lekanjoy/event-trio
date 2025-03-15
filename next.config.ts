import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1zgdcrdir5wgt.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        
      },
      {
        protocol: 'https',
        hostname: "siucenuaxbwrwnbcirnc.supabase.co",
        
      },
      
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
