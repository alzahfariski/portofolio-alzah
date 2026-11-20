import dynamic from "next/dynamic";
import type { Featured } from "@/data/featured";

// Interaksi COBA dimuat malas (dynamic). Tanpa JS, HTML server tetap menampilkan keadaan awal yang statis.
const TRY = {
  habit: dynamic(() => import("@/components/trial/TryHabit")),
  laundry: dynamic(() => import("@/components/trial/TryLaundry")),
  elator: dynamic(() => import("@/components/trial/TryElator")),
  selim: dynamic(() => import("@/components/trial/TrySelim")),
} as const;

export default function ProjectCard({ p, index }: { p: Featured; index: number }) {
  const Try = TRY[p.kind];
  const rc = `rc${index}`;
  const label = p.detailUrl ? `Buka detail proyek ${p.title}` : `Detail proyek ${p.title}: segera tersedia`;
  const ring = (
    <>
      <svg viewBox="0 0 150 150" aria-hidden="true">
        <defs>
          <path id={rc} d="M75 75 m-56 0 a56 56 0 1 1 112 0 a56 56 0 1 1 -112 0" />
        </defs>
        <text>
          <textPath href={`#${rc}`} textLength="344" lengthAdjust="spacing">
            {p.detailUrl ? "LIHAT DETAIL · LIHAT DETAIL · " : "DETAIL SEGERA · DETAIL SEGERA · "}
          </textPath>
        </text>
      </svg>
      <b aria-hidden="true">&#8599;</b>
    </>
  );
  return (
    <article
      className="pc"
      id={p.id}
      tabIndex={-1}
      aria-label={`Proyek ${p.no}: ${p.title}`}
      style={{ "--c": p.color, "--f": p.fg } as React.CSSProperties}
    >
      <div className="tabrow">
        <div className="tab">
          <i>{p.no}</i>
          <span>{p.tab}</span>
        </div>
      </div>
      <div className="pbody">
        <div className="wm" aria-hidden="true" style={{ fontSize: p.wm }}>
          {p.watermark}
        </div>
        <div className="txt">
          <p className="mono-m">{p.meta}</p>
          <h3>{p.title}</h3>
          <p className="d">{p.desc}</p>
          <ul className="pills">
            {p.pills.map((t) => (
              <li className="pill" key={t}>
                {t}
              </li>
            ))}
          </ul>
          {p.detailUrl ? (
            <a className="round" href={p.detailUrl} aria-label={label} target="_blank" rel="noopener noreferrer">
              {ring}
            </a>
          ) : (
            <div className="round" role="img" aria-label={label}>
              {ring}
            </div>
          )}
        </div>
        <div className="stage">
          <div className="mockw">
            <Try />
            <span className="sticker" aria-hidden="true">
              {p.sticker}
            </span>
            <i className="ln l" aria-hidden="true" />
            <i className="ln r" aria-hidden="true" />
            <div className="co l">
              <span className="mono-m">CATATAN 01</span>
              {p.note}
            </div>
            <div className="co r">
              <span className="mono-m">COBA 02</span>
              {p.tryText}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
