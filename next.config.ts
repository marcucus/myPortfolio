import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
