import type { Metadata } from "next";

const title = "Projects | Alzah Fariski";
const description =
  "Kumpulan proyek Alzah Fariski, End-to-End Software Developer: aplikasi mobile dan web (Flutter, Next.js, Laravel) dari perancangan sampai pemeliharaan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/project" },
  openGraph: { title, description, url: "/project", type: "website" },
  twitter: { title, description },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
