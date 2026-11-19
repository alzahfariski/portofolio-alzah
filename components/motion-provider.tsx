"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user": bila OS meminta gerak dikurangi, animasi transform/layout Framer Motion
// (marquee, hover kartu, hati melayang) dimatikan; animasi warna/opacity tetap.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
