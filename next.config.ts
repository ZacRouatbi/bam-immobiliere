import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
   allowedDevOrigins: ['confront-uniquely-preorder.ngrok-free.dev'],
};

export default nextConfig;
