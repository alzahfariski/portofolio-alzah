"use client";

import { useEffect, useState } from "react";

// Jam lokal Bengkulu (WIB, UTC+7). Kosong saat render server supaya tidak beda dengan browser.
export default function LocalClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Jakarta" });
    const upd = () => setT(f.format(new Date()).replace(".", ":"));
    upd();
    const id = setInterval(upd, 20000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="clock mono-label" role="timer" aria-label={t ? `Jam di Bengkulu ${t} WIB` : "Jam di Bengkulu"}>
      <i aria-hidden="true" />
      Bengkulu {t || "--:--"} WIB
    </span>
  );
}
