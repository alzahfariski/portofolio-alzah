import type { CompanyExperience, Education } from "@/lib/types";

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const BULAN_EN: Record<string, string> = { May: "Mei", Aug: "Agu", Oct: "Okt", Dec: "Des" };

type Ts = { seconds: number } | null | undefined;

// Tanggal apa adanya dari Firestore (bulan + tahun, UTC supaya server dan browser sama).
// Hanya nama bulan yang diterjemahkan ke bahasa Indonesia. Akhir kosong = "sekarang".
function fmt(t: Ts): string {
  if (!t || typeof t.seconds !== "number") return "sekarang";
  const d = new Date(t.seconds * 1000);
  return `${BULAN[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
const sec = (t: Ts) => (t && typeof t.seconds === "number" ? t.seconds : Infinity);

// Tampilan saja: teks periode pendidikan ("Aug 2020 - Aug 2024") -> bulan Indonesia dan satu tanda pisah (em dash);
// "Present"/"Now" -> "sekarang". Kosong tetap kosong. Data Firestore tidak diubah.
function periode(p: string): string {
  const s = (p ?? "").trim();
  if (!s) return "";
  return s
    .split(/\s+[-–—]\s+/)
    .map((x) =>
      x.replace(/\b[A-Za-z]{3,}\b/g, (w) =>
        /^(present|now)$/i.test(w) ? "sekarang" : (BULAN_EN[w.slice(0, 3)] ?? w.slice(0, 3)),
      ),
    )
    .join(" — ");
}

// Tampilan saja: institusi berbahasa Indonesia dan "iOS" berhuruf benar. Data Firestore tidak diubah.
const INSTITUSI: Record<string, string> = { "Bengkulu University": "Universitas Bengkulu" };
const rapi = (s: string) => s.replace(/\bIos\b/g, "iOS");

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
  const edu = educations ?? [];
  return (
    <div className="xp band-in t-xp">
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
      {edu.length > 0 && (
        <>
          <h2 className="xh mono-label edh">Pendidikan</h2>
          <ul className="edl">
            {edu.map((e) => {
              const p = periode(e.period);
              return (
                <li key={e.institution + e.degree}>
                  <span>
                    {rapi(e.degree)}, {INSTITUSI[e.institution] ?? e.institution}
                  </span>
                  {p && <span className="mono-label">{p}</span>}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
