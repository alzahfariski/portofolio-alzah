// Siklus end-to-end: 4 langkah. Setiap kalimat dirujuk ke data yang sudah ada di situs
// (deskripsi pengalaman dan pendidikan di Firestore); tanpa angka dan tanpa klaim hasil.
// Founder boleh mengedit teks di sini.
const LANGKAH = [
  {
    no: "01",
    judul: "Perancangan",
    teks: "Merancang alur dan tampilan aplikasi (UI/UX) sebelum kode ditulis.",
    dasar: "UI/UX",
  },
  {
    no: "02",
    judul: "Pembangunan",
    teks: "Membangun aplikasi mobile dengan Flutter dan web dengan Next.js atau Laravel, lengkap dengan API dan Firebase.",
    dasar: "Flutter · Next.js · Laravel · Firebase",
  },
  {
    no: "03",
    judul: "Deployment",
    teks: "Merilis aplikasi ke Play Store dan App Store, dan menyiapkan alur CI/CD.",
    dasar: "Play Store · App Store · CI/CD",
  },
  {
    no: "04",
    judul: "Pemeliharaan",
    teks: "Merawat dan memperbaiki setelah rilis.",
    dasar: "Maintenance",
  },
] as const;

export default function Siklus() {
  return (
    <section className="wrap siklus" id="siklus" aria-labelledby="siklus-judul">
      <h2 id="siklus-judul" className="mono-label">
        Siklus end-to-end
      </h2>
      <ol className="sk">
        {LANGKAH.map((l) => (
          <li key={l.no}>
            <i>{l.no}</i>
            <b>{l.judul}</b>
            <span>{l.teks}</span>
            <small className="mono-label">
              {l.dasar.split(" · ").map((t) => (
                <span key={t}>{t}</span>
              ))}
            </small>
          </li>
        ))}
      </ol>
    </section>
  );
}
