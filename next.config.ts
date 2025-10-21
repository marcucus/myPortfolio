import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  images: {
    unoptimized: false,
  },
  reactStrictMode: false,
  poweredByHeader: false,
};

export default nextConfig;
