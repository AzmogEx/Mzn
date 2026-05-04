import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Picsum Photos — placeholders premium pour le portfolio.
      // À retirer / remplacer quand le client aura ses propres images.
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
