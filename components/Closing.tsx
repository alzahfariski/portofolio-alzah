import { SITE } from "@/config/site";

// Penutup (id kontak): email besar, tombol utama sama dengan layar pertama, kontak lain tertulis.
export default function Closing() {
  return (
    <section className="wrap" id="kontak" aria-labelledby="penutup-judul">
      <div className="cta">
        <div>
          <h2 id="penutup-judul">Punya proyek untuk dibahas?</h2>
          <p className="introp">Tulis singkat saja. Saya jawab lewat email atau WhatsApp.</p>
        </div>
        <div>
          <a className="mailbig" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <div className="btns">
            <a className="btn p" href={SITE.ctaUrl}>
              {SITE.ctaLabel}
            </a>
            <a className="cvb" href={SITE.cvUrl} target="_blank" rel="noopener noreferrer">
              <i aria-hidden="true" />
              <span>
                Lihat CV<small className="mono-label">PDF</small>
              </span>
            </a>
          </div>
          <p className="alt">
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
