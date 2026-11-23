import { FEATURED } from "@/data/featured";
import ProjectCard from "@/components/ProjectCard";

export default function KaryaSection() {
  return (
    <section className="wrap karya" id="karya" aria-labelledby="karya-judul">
      <div className="intro">
        <h2 id="karya-judul">
          Karya pilihan<sup aria-hidden="true">(04)</sup>
        </h2>
        <p className="introp">
          Empat proyek yang saya bangun. Isi tiap kartu diringkas dari deskripsi proyek di situs saya. Setiap kartu punya
          contoh interaktif yang bisa diketuk; isinya data contoh, bukan data pengguna.
        </p>
      </div>
      <p className="hint mono-label">
        <i aria-hidden="true" />
        Gulir ke bawah, atau pilih kartu lewat kipas di atas
      </p>
      <div className="stack">
        {FEATURED.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
      <div className="more">
        <p className="big">Itu semua kartunya.</p>
        <a className="btn" href="/project">
          Lihat semua proyek
        </a>
      </div>
    </section>
  );
}
