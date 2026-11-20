"use client";

import { useState } from "react";

// Interaksi COBA E-Lator. Semua nama (Agen A/B/C), skor, dan badge adalah REKAAN bertanda contoh.
// Tidak ada data agen, instansi, atau laporan nyata.
const START = 120;
const STEP = 10;
const MAX = 200;
const BADGES = [
  { name: "Perdana", at: 100, c: "#F2A93B" },
  { name: "Rajin", at: 150, c: "#12845A" },
  { name: "Teladan", at: 200, c: "#6D32D9" },
];
const OTHERS = [
  { n: "Agen A", s: 140 },
  { n: "Agen C", s: 95 },
];

function Badge({ c, on, name }: { c: string; on: boolean; name: string }) {
  return (
    <svg viewBox="0 0 48 56" width="44" height="52" role="img" aria-label={`Badge ${name}, ${on ? "terbuka" : "terkunci"} (contoh)`}>
      <path d="M8 4h32v26a16 16 0 0 1-32 0z" fill={on ? c : "#E6E1D6"} stroke="#16140F" strokeWidth="2.5" />
      <path d="M16 36l-4 16 12-6 12 6-4-16" fill={on ? "#FFE27A" : "#CFC9BB"} stroke="#16140F" strokeWidth="2" strokeLinejoin="round" />
      {on ? (
        <path d="M24 10l3.6 7.4 8 1.1-5.8 5.6 1.4 8L24 28.4 16.8 32l1.4-8-5.8-5.6 8-1.1z" fill="#fff" />
      ) : (
        <path d="M18 20v-4a6 6 0 0 1 12 0v4M16 20h16v10H16z" fill="none" stroke="#6F6859" strokeWidth="2.2" />
      )}
    </svg>
  );
}

export default function TryElator() {
  const [p, setP] = useState(START);
  const [msg, setMsg] = useState("Papan peringkat (contoh)");
  const done = p >= MAX;
  const rows = [...OTHERS, { n: "Agen B", s: p, me: true }].sort((a, b) => b.s - a.s);
  const send = () => {
    if (done) {
      setP(START);
      setMsg("Diulang dari awal (contoh)");
      return;
    }
    const np = p + STEP;
    setP(np);
    const nb = BADGES.find((b) => b.at > p && b.at <= np);
    setMsg(nb ? `+${STEP} poin. Badge ${nb.name} terbuka (contoh)` : `Laporan terkirim: +${STEP} poin (contoh)`);
  };
  return (
    <div className="mock phone elator" data-k="elator">
      <div className="ph-top">
        <b>Poin saya</b>
        <span className="chip">contoh</span>
      </div>
      <div className="pts">
        <b className="pn" aria-live="polite" aria-atomic="true">
          {p}
        </b>
        <span>poin</span>
      </div>
      <button type="button" className="send" onClick={send}>
        {done ? "Ulangi contoh" : `Kirim laporan (+${STEP})`}
      </button>
      <p className="sm msg" aria-live="polite">
        {msg}
      </p>
      <ol className="lb" aria-label="Papan peringkat contoh">
        {rows.map((r, i) => (
          <li key={r.n} className={"me" in r ? "me" : undefined}>
            <i>{i + 1}</i>
            <span>{r.n}{"me" in r ? " (kamu)" : ""}</span>
            <b>{r.s}</b>
          </li>
        ))}
      </ol>
      <div className="bdg" role="group" aria-label="Badge contoh">
        {BADGES.map((b) => (
          <span key={b.name}>
            <Badge c={b.c} on={p >= b.at} name={b.name} />
            <small>{b.name}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
