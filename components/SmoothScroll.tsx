"use client";

import { useEffect } from "react";
import { setLenis } from "@/lib/lenis";

// Smooth scroll ringan (Lenis, lerp .11 ala referensi) + muncul-bertahap (IntersectionObserver).
// Keduanya MATI bila pengguna memilih prefers-reduced-motion. Tanpa JS, semua konten tetap terlihat.
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let cancelled = false;
    let lenis: import("lenis").default | null = null;

    // muncul-bertahap: hanya elemen yang BELUM terlihat saat dimuat disembunyikan (tanpa kedip di layar pertama)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("rvh");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const el of Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"))) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add("rvh");
      io.observe(el);
    }

    const start = () => {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({ autoRaf: true, lerp: 0.11, anchors: true });
        setLenis(lenis);
      });
    };
    // Lenis dimuat saat interaksi pertama (gulir/sentuh/tombol): tidak membebani muat awal
    const evs = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    let started = false;
    const first = () => {
      if (started) return;
      started = true;
      evs.forEach((n) => window.removeEventListener(n, first));
      start();
    };
    evs.forEach((n) => window.addEventListener(n, first, { passive: true }));

    return () => {
      evs.forEach((n) => window.removeEventListener(n, first));
      cancelled = true;
      io.disconnect();
      lenis?.destroy();
      setLenis(null);
    };
  }, []);
  return null;
}
