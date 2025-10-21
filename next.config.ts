import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
