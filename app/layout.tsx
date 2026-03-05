import type { Metadata } from "next";
import { Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const zalandoSansExpanded = Zalando_Sans_Expanded({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alzah Fariski | Portfolio",
  description: "Software Developer (Flutter • Next.js • Laravel) | UI/UX Designer with 3+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zalandoSansExpanded.className} antialiased overflow-x-hidden flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20 min-[1371px]:pt-0 bg-white">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
