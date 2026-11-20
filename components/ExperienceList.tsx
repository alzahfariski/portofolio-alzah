import type { CompanyExperience, Education } from "@/lib/types";

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

type Ts = { seconds: number } | null | undefined;

// Tanggal apa adanya dari Firestore (bulan + tahun, UTC supaya server dan browser sama).
// Hanya nama bulan yang diterjemahkan ke bahasa Indonesia. Akhir kosong = "sekarang".
function fmt(t: Ts): string {
  if (!t || typeof t.seconds !== "number") return "sekarang";
  const d = new Date(t.seconds * 1000);
  return `${BULAN[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
const sec = (t: Ts) => (t && typeof t.seconds === "number" ? t.seconds : Infinity);

// Tampilan saja: nama institusi Inggris di Firestore ditampilkan berbahasa Indonesia. Data Firestore tidak diubah.
const INSTITUSI: Record<string, string> = { "Bengkulu University": "Universitas Bengkulu" };

export default function ExperienceList({
  experiences,
  educations,
}: {
  experiences: CompanyExperience[] | null;
  educations: Education[] | null;
}) {
  // Terbaru dulu: perusahaan menurut mulai terbaru; jabatan di dalamnya juga terbaru dulu.
  const list = [...(experiences ?? [])].sort(
    (a, b) => sec(b.periodStart as unknown as Ts) - sec(a.periodStart as unknown as Ts),
  );
  return (
    <div className="xp">
      <h2 className="xh mono-label">Pengalaman · terbaru dulu</h2>
      {list.length === 0 ? (
        <p className="edu">Data pengalaman belum bisa dimuat.</p>
      ) : (
        <ol>
          {list.map((c) => (
            <li key={c.company}>
              <b>{c.company}</b>
              {[...(c.work ?? [])]
                .sort((a, b) => sec(b.periodStart as unknown as Ts) - sec(a.periodStart as unknown as Ts))
                .map((w) => (
                  <div className="rl" key={w.role + String(sec(w.periodStart as unknown as Ts))}>
                    <span>{w.role}</span>
                    <span className="mono-label">
                      {fmt(w.periodStart as unknown as Ts)} — {fmt(w.periodEnd as unknown as Ts)}
                    </span>
                  </div>
                ))}
            </li>
          ))}
        </ol>
      )}
      {(educations ?? []).map((e) => (
        <p className="edu" key={e.institution + e.degree}>
          <span className="mono-label">Pendidikan</span>
          {e.degree}, {INSTITUSI[e.institution] ?? e.institution} · {e.period}
        </p>
      ))}
    </div>
  );
}
