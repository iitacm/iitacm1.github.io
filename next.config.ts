import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '3dgbszbo74d8cpvv.public.blob.vercel-storage.com',
      },
    ]
  },
};

export default nextConfig;
