"use client";

import { useState } from "react";

// Interaksi COBA Habitly. Data contoh; bukan data pengguna. Tanpa JS tampil keadaan awal (2/4 = 50%).
const HABITS = ["Minum air", "Baca buku", "Jalan pagi", "Tidur awal"];
const R = 38;
const CIRC = 2 * Math.PI * R;

export default function TryHabit() {
  const [on, setOn] = useState<boolean[]>([true, true, false, false]);
  const n = on.filter(Boolean).length;
  const dash = (n / HABITS.length) * CIRC;
  return (
    <div className="mock phone" data-k="habit">
      <div className="ph-top">
        <b>Hari ini</b>
        <span className="chip">contoh</span>
      </div>
      <div className="donut">
        <svg viewBox="0 0 100 100" width="96" height="96" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#CDEBD7" strokeWidth="12" />
          <circle
            className="arc"
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#12845A"
            strokeWidth="12"
            strokeLinecap="butt"
            strokeDasharray={`${dash} ${CIRC}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <b aria-live="polite" aria-atomic="true">
          {n}/{HABITS.length}
        </b>
      </div>
      <p className="sm" style={{ textAlign: "center", marginTop: 0 }}>
        Progres {Math.round((n / HABITS.length) * 100)}%
      </p>
      <div className="hl" role="group" aria-label="Kebiasaan contoh">
        {HABITS.map((h, i) => (
          <button
            key={h}
            type="button"
            className={`hb${on[i] ? " on" : ""}`}
            aria-pressed={on[i]}
            onClick={() => setOn((s) => s.map((v, j) => (j === i ? !v : v)))}
          >
            <i aria-hidden="true" />
            {h}
          </button>
        ))}
      </div>
    </div>
  );
}
