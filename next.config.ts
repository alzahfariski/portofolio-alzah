import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Gambar proyek/ikon berasal dari URL di Firestore (host pihak ketiga).
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
