import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required with multiple root layouts: there is no single layout to build a 404 from.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
