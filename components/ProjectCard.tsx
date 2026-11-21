import dynamic from "next/dynamic";
import type { Featured } from "@/data/featured";
import RealImg from "@/components/RealImg";

// Interaksi COBA dimuat malas (dynamic). Tanpa JS, HTML server tetap menampilkan keadaan awal yang statis.
const TRY = {
  habit: dynamic(() => import("@/components/trial/TryHabit")),
  laundry: dynamic(() => import("@/components/trial/TryLaundry")),
  elator: dynamic(() => import("@/components/trial/TryElator")),
  selim: dynamic(() => import("@/components/trial/TrySelim")),
} as const;

export default function ProjectCard({ p }: { p: Featured; index: number }) {
  const Try = TRY[p.kind];
  const label = p.detailUrl ? `Lihat detail, ${p.title}` : `Detail segera, ${p.title}: belum tersedia`;
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
          {p.client && (
            <p className="clientm">Klien: {p.client}</p>
          )}
          {p.img && (
            <div className="shot">
              <RealImg src={p.img} sizes="(max-width: 1000px) 90vw, 380px" pos="50% 56%" />
            </div>
          )}
          {p.detailUrl ? (
            <a className="dtl" href={p.detailUrl} aria-label={label} target="_blank" rel="noopener noreferrer">
              Lihat detail <b aria-hidden="true">&#8599;</b>
            </a>
          ) : (
            <button type="button" className="dtl" aria-disabled="true" aria-label={label}>
              <i aria-hidden="true" />
              Detail segera
            </button>
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
