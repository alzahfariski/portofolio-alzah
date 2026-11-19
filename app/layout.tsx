import type { Metadata } from "next";
import { Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MotionProvider from "@/components/motion-provider";

const zalandoSansExpanded = Zalando_Sans_Expanded({
  subsets: ["latin"],
});

const SITE_URL = "https://alzahfariski.vercel.app";
const SITE_TITLE = "Alzah Fariski | Portfolio";
const SITE_DESCRIPTION =
  "Software Developer (Flutter • Next.js • Laravel) | UI/UX Designer with 3+ years of experience";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Alzah Fariski",
    type: "website",
    images: [
      {
        url: "/og/alzah-fariski-og.png",
        width: 1200,
        height: 630,
        alt: "Alzah Fariski, Software Developer | UI/UX Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og/alzah-fariski-og.png"],
  },
};

// Data terstruktur Person: hanya nama, peran, dan URL yang sudah tampil di situs.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alzah Fariski",
  jobTitle: "Software Developer",
  url: SITE_URL,
  sameAs: ["https://linkedin.com/in/alzah-fariski", "https://instagram.com/alzahfariski"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="en": kerangka antarmuka (judul kartu, tombol, footer, deskripsi meta) berbahasa Inggris;
    // bullet pengalaman campur Indonesia/Inggris (isi tidak diubah).
    <html lang="en">
      <body className={`${zalandoSansExpanded.className} antialiased overflow-x-hidden flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-grow pt-20 min-[1371px]:pt-0 bg-white">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>

    </html>
  );
}
