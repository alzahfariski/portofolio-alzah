"use client";

import { useState } from "react";

// Interaksi COBA Selim Skrin. HANYA ilustrasi: nilai contoh, tanpa diagnosis, tanpa saran medis, tanpa data pasien.
const SETS = {
  tensi: { label: "Tensi", unit: "mmHg", vals: [110, 130, 155], min: 90, max: 180 },
  gula: { label: "Gula", unit: "mg/dL", vals: [90, 130, 200], min: 70, max: 230 },
} as const;
type K = keyof typeof SETS;

function zone(v: number, min: number, max: number) {
  const f = (v - min) / (max - min);
  return f < 0.38 ? "Zona 1" : f < 0.7 ? "Zona 2" : "Zona 3";
}

export default function TrySelim() {
  const [k, setK] = useState<K>("tensi");
  const [i, setI] = useState(0);
  const set = SETS[k];
  const v = set.vals[i];
  const f = (v - set.min) / (set.max - set.min);
  const deg = -80 + Math.max(0, Math.min(1, f)) * 160;
  return (
    <div className="mock phone selim" data-k="selim">
      <div className="ph-top">
        <b>Cek nilai</b>
        <span className="chip">contoh</span>
      </div>
      <div className="seg" role="group" aria-label="Jenis nilai contoh">
        {(Object.keys(SETS) as K[]).map((x) => (
          <button key={x} type="button" aria-pressed={k === x} className={k === x ? "on" : undefined} onClick={() => { setK(x); setI(0); }}>
            {SETS[x].label}
          </button>
        ))}
      </div>
      <svg className="gauge" viewBox="0 0 200 112" aria-hidden="true">
        <path d="M20 100 A80 80 0 0 1 73 25" fill="none" stroke="#2FA866" strokeWidth="16" />
        <path d="M73 25 A80 80 0 0 1 127 25" fill="none" stroke="#F2A93B" strokeWidth="16" />
        <path d="M127 25 A80 80 0 0 1 180 100" fill="none" stroke="#D93A3A" strokeWidth="16" />
        <g className="nd" style={{ transformOrigin: "100px 100px", transform: `rotate(${deg}deg)` }}>
          <line x1="100" y1="100" x2="100" y2="34" stroke="#16140F" strokeWidth="5" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="100" r="9" fill="#16140F" />
      </svg>
      <p className="gl" aria-live="polite" aria-atomic="true">
        <b>{v}</b> {set.unit} · {zone(v, set.min, set.max)} (contoh)
      </p>
      <div className="vals" role="group" aria-label="Pilih nilai contoh">
        {set.vals.map((x, j) => (
          <button key={x} type="button" aria-pressed={i === j} className={`v${i === j ? " on" : ""}`} onClick={() => setI(j)}>
            {x}
          </button>
        ))}
      </div>
      <p className="sm">Ilustrasi tampilan. Bukan diagnosis dan bukan saran medis.</p>
    </div>
  );
}
