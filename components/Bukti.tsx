import { SITE } from "@/config/site";
import { FEATURED } from "@/data/featured";

// "Bukti, bukan klaim": HANYA fakta yang sudah ada di data situs (proyek pilihan, klien yang tercatat, tautan nyata).
// Tanpa angka, testimoni, penghargaan, atau klaim lain. Data tidak ada -> tidak ditampilkan.
const TAUTAN = [
  { label: "GitHub", teks: SITE.githubLabel, href: SITE.githubUrl },
  { label: "LinkedIn", teks: SITE.linkedinLabel, href: SITE.linkedinUrl },
  { label: "CV", teks: "Lihat CV (PDF)", href: SITE.cvUrl },
  { label: "Email", teks: SITE.email, href: `mailto:${SITE.email}` },
];

export default function Bukti() {
  return (
    <section className="wrap bukti" id="bukti" aria-labelledby="bukti-judul">
      <h2 id="bukti-judul" data-rv>
        Bukti, bukan klaim
      </h2>
      <p className="introp" data-rv>
        Hanya yang tercatat di data: proyek yang bisa dibuka, klien yang tertulis di proyek, dan tautan yang nyata.
      </p>
      <div className="bk">
        <div data-rv>
          <h3 className="mono-label">Proyek di situs ini</h3>
          <ul className="bkl">
            {FEATURED.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`}>
                  <b>{p.title}</b>
                  <span>{p.meta}</span>
                  {p.client && <small>Klien: {p.client}</small>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div data-rv style={{ "--d": 1 } as React.CSSProperties}>
          <h3 className="mono-label">Tautan nyata</h3>
          <ul className="bkl">
            {TAUTAN.map((t) => (
              <li key={t.label}>
                <a href={t.href} {...(t.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                  <b>{t.label}</b>
                  <span>{t.teks}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
