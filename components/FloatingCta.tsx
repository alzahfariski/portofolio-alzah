"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/config/site";

// Tombol melayang ponsel: muncul setelah layar pertama lewat, hilang saat bagian kontak terlihat.
export default function FloatingCta() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("atas");
    const kontak = document.getElementById("kontak");
    if (!hero) return;
    let heroOut = false;
    let kontakIn = false;
    const upd = () => setOn(heroOut && !kontakIn);
    const o1 = new IntersectionObserver(([e]) => {
      heroOut = !e.isIntersecting;
      upd();
    });
    o1.observe(hero);
    const o2 = new IntersectionObserver(([e]) => {
      kontakIn = e.isIntersecting;
      upd();
    });
    if (kontak) o2.observe(kontak);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);
  return (
    <a className={`btn p fab${on ? " on" : ""}`} href={SITE.ctaUrl} tabIndex={on ? 0 : -1} aria-hidden={!on}>
      {SITE.ctaLabel}
    </a>
  );
}
