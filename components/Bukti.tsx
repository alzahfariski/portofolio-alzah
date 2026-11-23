import { SITE } from "@/config/site";
import { FEATURED } from "@/data/featured";

// "Bukti, bukan klaim": HANYA fakta yang sudah ada di data situs (proyek pilihan, klien yang tercatat, tautan nyata).
// Tanpa angka, testimoni, penghargaan, atau klaim lain. Data tidak ada -> tertulis "belum ada data" (tidak dikarang).
const TAUTAN = [
  { label: "GitHub", teks: SITE.githubLabel, href: SITE.githubUrl, tombol: false },
  { label: "LinkedIn", teks: SITE.linkedinLabel, href: SITE.linkedinUrl, tombol: false },
  { label: "CV", teks: "Lihat CV (PDF)", href: SITE.cvUrl, tombol: true },
  { label: "Email", teks: SITE.email, href: `mailto:${SITE.email}`, tombol: true },
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
                  {/* Peran: data proyek belum punya kolom peran, jadi tidak diisi. */}
                  <small>Peran: belum ada data</small>
                  <i className="bkm" aria-hidden="true">
                    Buka kartu proyek ↓
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div data-rv style={{ "--d": 1 } as React.CSSProperties}>
          <h3 className="mono-label">Tautan nyata</h3>
          <ul className="bkl">
            {TAUTAN.map((t) => {
              const mail = t.href.startsWith("mailto:");
              return (
                <li key={t.label}>
                  <a
                    className={t.tombol ? "bkb" : undefined}
                    href={t.href}
                    {...(mail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <b>{t.label}</b>
                    <span>{t.teks}</span>
                    <i className="bkm" aria-hidden="true">
                      {mail ? "Kirim email ✉" : "Buka di tab baru ↗"}
                    </i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
