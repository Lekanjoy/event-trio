import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1zgdcrdir5wgt.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
