import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionProvider from "@/components/motion-provider";

// Inter Tight variabel: satu berkas (bobot 100-900, dipakai 400-850).
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter-tight",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
// Caveat hanya untuk satu frasa tulisan tangan; tidak di-preload.
const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
  display: "swap",
  preload: false,
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
    // Kerangka antarmuka berbahasa Indonesia; isi dari Firestore tampil apa adanya.
    <html lang="id">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${caveat.variable} grid-bg antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Header />
          <main id="utama" className="flex-grow">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
