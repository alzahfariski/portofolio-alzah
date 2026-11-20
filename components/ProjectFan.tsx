"use client";

import { FEATURED } from "@/data/featured";

// Kipas 4 kartu: tombol sungguhan. Ketuk = gulir halus ke kartu proyek berwarna sama
// (lompat langsung bila pengguna memilih reduced-motion). Fokus dipindah ke kartu tujuan.
export default function ProjectFan() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: rm ? "auto" : "smooth", block: "start" });
    el.focus({ preventScroll: true });
  };
  return (
    <div className="fanb">
      <span className="hand">lihat karyaku!</span>
      <ul className="fan" aria-label="Pilihan proyek">
        {FEATURED.map((p, i) => (
          <li
            key={p.no}
            className="mini"
            style={
              {
                "--i": i,
                "--r": p.rot,
                "--c": p.color,
                "--f": p.fg,
              } as React.CSSProperties
            }
          >
            <button
              type="button"
              onClick={() => go(p.id)}
              aria-label={`${p.no} ${p.fanTitle} ${p.fanKind}: lompat ke kartu proyek`}
            >
              <b>{p.no}</b>
              <strong>{p.fanTitle}</strong>
              <small>{p.fanKind}</small>
              <span className="art" style={{ background: p.artBg }}>
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMinYMid slice"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: p.fanSvg }}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="hint mono-label">
        <i />
        Pilih kartu<span className="hx">&nbsp;atau gulir</span>
      </p>
    </div>
  );
}
