// Data 4 karya pilihan.
// Teks kartu (judul, kategori, deskripsi, tag) diringkas dari deskripsi proyek di situs live (alzahfariski.vercel.app/project).
// Semua isi mockup dan interaksi COBA adalah DATA CONTOH rekaan (bukan data pengguna, pasien, atau instansi)
// dan bukan tangkapan layar aplikasi asli. Tanpa logo instansi. Jangan menaruh sandi/token di berkas ini.

export type Kind = "habit" | "laundry" | "elator" | "selim";

export interface Featured {
  id: string; // anchor kartu: #p1..#p4
  kind: Kind;
  no: string;
  title: string; // judul kartu
  tab: string; // teks tab
  fanTitle: string; // judul pendek di kipas
  fanKind: string; // kategori singkat di kipas
  meta: string; // metadata mono (ditampilkan kapital lewat CSS)
  desc: string;
  pills: string[];
  color: string;
  fg: string;
  artBg: string;
  rot: number; // sudut kipas (derajat)
  watermark: string;
  wm: number; // ukuran watermark (px) agar lebar tiap watermark mirip
  sticker: string; // stiker: kata kunci kategori dari deskripsi proyek di situs live (bukan klaim teknologi)
  note: string; // CATATAN 01
  tryText: string; // COBA 02
  detailUrl?: string; // opsional: bila diisi, tombol bulat menjadi tautan; kosong = "DETAIL SEGERA"
  fanSvg: string; // mini-mockup kipas (viewBox 100x100), isi di sisi kiri agar terlihat saat tertindih
}

const habitSvg =
  '<rect x="6" y="6" width="54" height="94" rx="9" fill="#fff"/><circle cx="33" cy="30" r="12" fill="none" stroke="#BFE6CE" stroke-width="7"/><path d="M33 18 a12 12 0 0 1 12 12" fill="none" stroke="#0C5C3E" stroke-width="7" stroke-linecap="round"/>' +
  '<circle cx="17" cy="56" r="5" fill="#0C5C3E"/><rect x="26" y="53" width="26" height="6" rx="3" fill="#7DB892"/><circle cx="17" cy="72" r="5" fill="#0C5C3E"/><rect x="26" y="69" width="26" height="6" rx="3" fill="#7DB892"/><circle cx="17" cy="88" r="4" fill="none" stroke="#0C5C3E" stroke-width="2"/><rect x="26" y="85" width="26" height="6" rx="3" fill="#BFE6CE"/>';
const laundrySvg =
  '<rect x="4" y="14" width="92" height="72" rx="8" fill="#fff"/><rect x="4" y="14" width="22" height="72" rx="8" fill="#1A2F9E"/><rect x="9" y="26" width="12" height="4" rx="2" fill="#fff"/><rect x="9" y="38" width="12" height="4" rx="2" fill="#9FB2F5"/><rect x="9" y="50" width="12" height="4" rx="2" fill="#9FB2F5"/>' +
  '<rect x="31" y="24" width="58" height="16" rx="5" fill="#DCE6FF"/><rect x="66" y="28" width="19" height="8" rx="4" fill="#FFD84D"/><rect x="31" y="46" width="58" height="16" rx="5" fill="#DCE6FF"/><rect x="66" y="50" width="19" height="8" rx="4" fill="#8FD0FF"/><rect x="31" y="68" width="58" height="12" rx="5" fill="#DCE6FF"/><rect x="66" y="70" width="19" height="8" rx="4" fill="#7ED79A"/>';
const elatorSvg =
  '<rect x="6" y="6" width="54" height="94" rx="9" fill="#fff"/><circle cx="33" cy="28" r="13" fill="#F2A93B"/><path d="M33 18l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7-5.2-4.7 7-.8z" fill="#fff"/>' +
  '<rect x="14" y="48" width="38" height="9" rx="4.5" fill="#F2A93B"/><rect x="14" y="62" width="11" height="28" rx="2" fill="#D9B27A"/><rect x="28" y="62" width="11" height="28" rx="2" fill="#8A5200"/><rect x="42" y="72" width="10" height="18" rx="2" fill="#D9B27A"/>';
const selimSvg =
  '<rect x="4" y="8" width="66" height="86" rx="10" fill="#fff"/><path d="M12 56 A24 24 0 0 1 24 29" fill="none" stroke="#2FA866" stroke-width="7"/><path d="M24 29 A24 24 0 0 1 50 29" fill="none" stroke="#F2A93B" stroke-width="7"/><path d="M50 29 A24 24 0 0 1 62 56" fill="none" stroke="#D93A3A" stroke-width="7"/>' +
  '<line x1="37" y1="56" x2="46" y2="36" stroke="#16140F" stroke-width="3" stroke-linecap="round"/><circle cx="37" cy="56" r="4.5" fill="#16140F"/><rect x="11" y="70" width="14" height="14" rx="7" fill="#EDE5FB" stroke="#6D32D9" stroke-width="1.5"/><rect x="30" y="70" width="14" height="14" rx="7" fill="#6D32D9"/><rect x="49" y="70" width="14" height="14" rx="7" fill="#EDE5FB" stroke="#6D32D9" stroke-width="1.5"/>';

export const FEATURED: Featured[] = [
  {
    id: "p1", kind: "habit", no: "01", title: "Habitly", tab: "Habitly", fanTitle: "Habitly", fanKind: "Mobile",
    meta: "2026 · Aplikasi mobile",
    desc: "Pelacak kebiasaan: daftar kebiasaan, jadwal, dan pantauan perkembangan harian.",
    pills: ["Habit tracker", "Produktivitas", "Goal tracking"],
    color: "#12845A", fg: "#FFFFFF", artBg: "#0C5C3E", rot: -24, watermark: "HABITLY", wm: 230, sticker: "Habit tracker",
    note: "Satu layar untuk daftar kebiasaan, jadwal, dan perkembangan harian.",
    tryText: "Ketuk sebuah kebiasaan: tanda centang dan donat progres ikut berubah.",
    fanSvg: habitSvg,
  },
  {
    id: "p2", kind: "laundry", no: "02", title: "LaundryKu POS", tab: "LaundryKu POS", fanTitle: "LaundryKu", fanKind: "Web",
    meta: "2026 · Web kasir",
    desc: "Kasir web untuk bisnis laundry: catat order, lacak status cucian, laporan harian.",
    pills: ["POS", "Laundry", "Manajemen bisnis"],
    color: "#2547E8", fg: "#FFFFFF", artBg: "#1A35B8", rot: -8, watermark: "LAUNDRYKU", wm: 175, sticker: "Kasir web",
    note: "Order dicatat sekali, lalu statusnya dilacak sampai cucian siap.",
    tryText: "Ketuk tombol status: Cuci, Setrika, lalu Siap.",
    fanSvg: laundrySvg,
  },
  {
    id: "p3", kind: "elator", no: "03", title: "E-Lator", tab: "E-Lator", fanTitle: "E-Lator", fanKind: "Mobile",
    meta: "2026 · Aplikasi agen",
    desc: "Aplikasi agen edukator: laporan kegiatan, pemantauan kinerja, poin, badge, dan papan peringkat.",
    pills: ["Gamifikasi", "Reporting system", "Agent monitoring"],
    color: "#F2A93B", fg: "#16140F", artBg: "#B26A08", rot: 8, watermark: "E-LATOR", wm: 230, sticker: "Poin + badge",
    note: "Laporan kegiatan memberi poin, badge, dan posisi di papan peringkat.",
    tryText: "Ketuk Kirim laporan: poin bertambah, badge contoh muncul pada ambang tertentu.",
    fanSvg: elatorSvg,
  },
  {
    id: "p4", kind: "selim", no: "04", title: "Selim Skrin", tab: "Selim Skrin", fanTitle: "Selim Skrin", fanKind: "Kesehatan",
    meta: "2026 · Skrining kesehatan",
    desc: "Skrining awal hipertensi dan diabetes secara mandiri, dengan saran gaya hidup sehat.",
    pills: ["Skrining", "Kesehatan", "PTM"],
    color: "#6D32D9", fg: "#FFFFFF", artBg: "#4C1D9E", rot: 24, watermark: "SELIM", wm: 300, sticker: "Skrining mandiri",
    note: "Skrining awal hipertensi dan diabetes, disertai saran gaya hidup sehat.",
    tryText: "Pilih nilai contoh: jarum pada gauge berpindah. Ilustrasi saja, bukan diagnosis.",
    fanSvg: selimSvg,
  },
];
