"use client";

import { useState } from "react";

// Interaksi COBA LaundryKu: ketuk status Cuci -> Setrika -> Siap. Nama pelanggan dan berat adalah data contoh.
const STAT = ["Cuci", "Setrika", "Siap"];
const ROWS = [
  { n: "Pelanggan A", d: "Kiloan 3 kg" },
  { n: "Pelanggan B", d: "Kiloan 5 kg" },
  { n: "Pelanggan C", d: "Satuan 2 pcs" },
];

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export default function TryLaundry() {
  const [s, setS] = useState<number[]>([0, 1, 2]);
  const siap = s.filter((v) => v === 2).length;
  return (
    <div className="mock win" data-k="laundry">
      <div className="wb">
        <span />
        <span />
        <span />
        <b>LaundryKu</b>
      </div>
      <div className="wbody">
        <nav aria-label="Menu contoh">
          <span className="nv on">
            <Icon d="M12 5v14M5 12h14" />
            Order
          </span>
          <span className="nv">
            <Icon d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            Status
          </span>
          <span className="nv">
            <Icon d="M5 20V10M12 20V4M19 20v-7" />
            Laporan
          </span>
        </nav>
        <div className="wmain">
          <h4>Pesanan hari ini</h4>
          {ROWS.map((r, i) => (
            <div className="lr" key={r.n}>
              <span>
                <b>{r.n}</b>
                <small>{r.d}</small>
              </span>
              <button
                type="button"
                className={`st s${s[i]}`}
                aria-label={`${r.n}: status ${STAT[s[i]]}, ketuk untuk ganti`}
                onClick={() => setS((a) => a.map((v, j) => (j === i ? (v + 1) % 3 : v)))}
              >
                {STAT[s[i]]}
              </button>
            </div>
          ))}
          <p className="sm" aria-live="polite">
            Siap diambil: {siap} dari 3 (contoh)
          </p>
        </div>
      </div>
    </div>
  );
}
