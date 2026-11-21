"use client";

import Image from "next/image";
import { useState } from "react";

// Gambar asli proyek (dari data Firestore). Bila gagal dimuat, komponen hilang dan mockup SVG di belakangnya tetap tampil.
export default function RealImg({ src, sizes, className, pos = "50% 60%" }: { src: string; sizes: string; className?: string; pos?: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return null;
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      className={className}
      style={{ objectFit: "cover", objectPosition: pos }}
      onError={() => setBad(true)}
    />
  );
}
