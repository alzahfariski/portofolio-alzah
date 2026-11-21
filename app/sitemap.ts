import type { MetadataRoute } from "next";

const BASE_URL = "https://alzahfariski.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/project`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
