// DATA CONTOH untuk pengujian visual (bukan data produksi).
// Dipakai HANYA bila env SAMPLE_DATA=1 (tidak diatur di Vercel). Isinya menyalin data yang tampil
// di situs live (nama perusahaan, jabatan, tanggal apa adanya). Tidak ada penulisan ke Firebase.
import type { CompanyExperience, Education } from "@/lib/types";

const ts = (iso: string) => ({ seconds: Math.floor(new Date(iso).getTime() / 1000), nanoseconds: 0 });

export const sampleExperiences = [
  {
    company: "Diskominfotik",
    imageUrl: "",
    location: "Bengkulu",
    type: "Office",
    periodStart: ts("2025-01-01T00:00:00+07:00"),
    periodEnd: null,
    work: [
      { role: "Mobile Developer", description: "", imageUrl: [], periodStart: ts("2025-01-01T00:00:00+07:00"), periodEnd: ts("2025-12-01T00:00:00+07:00") },
      { role: "Fullstack Mobile Developer", description: "", imageUrl: [], periodStart: ts("2026-01-01T00:00:00+07:00"), periodEnd: null },
    ],
  },
  {
    company: "PT Cllarion Ajimat Teknologi",
    imageUrl: "",
    location: "Bengkulu",
    type: "Hybrid",
    periodStart: ts("2024-11-01T00:00:00+07:00"),
    periodEnd: null,
    work: [
      { role: "Founder", description: "", imageUrl: [], periodStart: ts("2024-11-01T00:00:00+07:00"), periodEnd: null },
    ],
  },
  {
    company: "Polda Bengkulu",
    imageUrl: "",
    location: "Bengkulu",
    type: "Office",
    periodStart: ts("2023-03-01T00:00:00+07:00"),
    periodEnd: ts("2024-02-01T00:00:00+07:00"),
    work: [
      { role: "Fullstack Programmer", description: "", imageUrl: [], periodStart: ts("2023-03-01T00:00:00+07:00"), periodEnd: ts("2024-02-01T00:00:00+07:00") },
    ],
  },
] as unknown as CompanyExperience[];

export const sampleEducations = [
  {
    institution: "Bengkulu University",
    imageUrl: "",
    period: "Agu 2020 — Agu 2024",
    gpa: "",
    description: "",
    degree: "S.Kom",
    activities: [],
  },
] as unknown as Education[];
