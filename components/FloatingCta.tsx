"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/config/site";

// Tombol melayang ponsel: muncul setelah tombol utama layar pertama keluar dari layar, hilang saat bagian kontak terlihat.
export default function FloatingCta() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const hero = document.querySelector("#atas .btns"); // tombol utama layar pertama
    const kontak = document.getElementById("kontak");
    if (!hero) return;
    let heroOut = false;
    let kontakIn = false;
    let up = false; // tampil hanya saat menggulir ke atas: tidak menutup teks yang sedang dibaca
    const upd = () => setOn(heroOut && !kontakIn && up);
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      up = y < last;
      last = y;
      upd();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
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
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <a className={`btn p fab${on ? " on" : ""}`} href={SITE.ctaUrl} tabIndex={on ? 0 : -1} aria-hidden={!on}>
      {SITE.ctaLabel}
    </a>
  );
}
