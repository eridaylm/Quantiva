import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: __dirname,
    },
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "radix-ui",
      "@amcharts/amcharts5",
    ],
  },
};

export default nextConfig;
