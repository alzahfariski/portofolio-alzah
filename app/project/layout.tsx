import type { Metadata } from "next";

const title = "Projects | Alzah Fariski";
const description =
  "Kumpulan proyek Alzah Fariski: aplikasi mobile dan web (Flutter, Next.js, Laravel) serta desain UI/UX.";

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
