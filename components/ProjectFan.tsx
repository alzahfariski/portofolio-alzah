import Link from "next/link";
import { FAN_ITEMS } from "@/data/featured";

// Placeholder statis tahap 1: kartu menuju /project. Interaksi lompat-ke-kartu dibuat di tahap 2 (redesain/proyek).
export default function ProjectFan() {
  return (
    <div className="fanb">
      <span className="hand">lihat karyaku!</span>
      <div className="fan" role="group" aria-label="Pilihan proyek">
        {FAN_ITEMS.map((p, i) => (
          <Link
            key={p.no}
            href="/project"
            className="mini"
            aria-label={p.label}
            style={
              { "--i": i, "--r": `${p.rot}deg`, "--c": p.color, "--f": p.fg } as React.CSSProperties
            }
          >
            <b>{p.no}</b>
            <strong>{p.title}</strong>
            <small>{p.kind}</small>
            <span className="art" style={{ background: p.artBg }}>
              <svg
                viewBox="0 0 120 120"
                preserveAspectRatio="xMinYMid slice"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: p.svg }}
              />
            </span>
          </Link>
        ))}
      </div>
      <p className="hint mono-label">
        <i />
        Pilih kartu<span className="hx">&nbsp;atau gulir</span>
      </p>
    </div>
  );
}
