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
    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start);
    else setTimeout(start, 200);

    return () => {
      cancelled = true;
      io.disconnect();
      lenis?.destroy();
      setLenis(null);
    };
  }, []);
  return null;
}
