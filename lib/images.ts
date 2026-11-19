// Util gambar: deteksi SVG, label ikon sosial, dan pemetaan logo Wikimedia ke aset lokal.

// Host yang diizinkan next/image (harus sama dengan remotePatterns di next.config.ts).
const OPTIMIZED_HOSTS = ["lh3.googleusercontent.com", "media.licdn.com", "upload.wikimedia.org"];

// true bila gambar tidak dioptimasi: SVG, ikon simpleicons/skillicons (SVG tanpa ekstensi), atau host belum terdaftar.
export const skipOptimize = (url?: string): boolean => {
  if (!url) return true;
  if (url.startsWith("/")) return /\.svg$/i.test(url);
  try {
    const u = new URL(url);
    return /\.svg$/i.test(u.pathname) || !OPTIMIZED_HOSTS.includes(u.hostname);
  } catch {
    return true;
  }
};

// URL Firestore -> aset lokal (public/images/logos). Lisensi: domain publik (Wikimedia Commons).
const LOCAL_LOGOS: Record<string, string> = {};

export const localLogo = (url: string): string => LOCAL_LOGOS[url] ?? url;

// Nama bermakna untuk tautan ikon sosial, diambil dari domain tujuan.
export const socialLabel = (linkUrl?: string): string => {
  if (!linkUrl) return "Tautan sosial";
  try {
    const host = new URL(linkUrl).hostname.replace(/^www\./, "");
    const names: Record<string, string> = {
      "linkedin.com": "LinkedIn",
      "instagram.com": "Instagram",
      "github.com": "GitHub",
      "wa.me": "WhatsApp",
      "twitter.com": "Twitter",
      "x.com": "X",
      "facebook.com": "Facebook",
      "youtube.com": "YouTube",
      "tiktok.com": "TikTok",
    };
    return names[host] ?? host;
  } catch {
    return "Tautan sosial";
  }
};
