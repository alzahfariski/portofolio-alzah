// FIXTURE DATA ASLI untuk pengujian visual (SAMPLE_DATA=1). TANPA koneksi Firebase.
// Disalin dari data publik situs live https://alzahfariski.vercel.app/ pada 21 Nov 2026 (hanya baca).
// Tanggal apa adanya dari Firestore, tidak diperbaiki. Cara memperbarui: lihat README bagian "Fixture data asli".
import type { CompanyExperience, Education } from "@/lib/types";

export const sampleExperiences = [
  {
    company: "PT Cllarion Ajimat Teknologi",
    location: "Yogyakarta, Indonesia",
    type: "Remote",
    imageUrl: "",
    periodStart: { seconds: 1709226000, nanoseconds: 791000000 },
    periodEnd: null,
    work: [
      { role: "Founder", description: "End-to-End Product Delivery – Full lifecycle dari konsep, UI/UX, hingga deployment aplikasi mobile (Flutter) & web (Next.js, Laravel).\n• Rapid Prototyping & Scaling – Arsitektur MVP production-ready dengan komponen modular untuk mempercepat go-to-market.\n• Performance Engineering – Optimasi aplikasi & infrastruktur untuk loading sub-second dan pengalaman pengguna yang scalable.\n• Technical Integration – API backend, autentikasi aman, dan CI/CD workflow.\n• Strategic Execution – Menerjemahkan kebutuhan bisnis menjadi roadmap teknis yang sesuai standar industri.", imageUrl: [], periodStart: { seconds: 1730394000, nanoseconds: 997000000 }, periodEnd: null },
    ],
  },
  {
    company: "Diskominfotik",
    location: "Bengkulu, Indonesia",
    type: "Hybrid",
    imageUrl: "",
    periodStart: { seconds: 1735664400, nanoseconds: 107000000 },
    periodEnd: { seconds: 1767114000, nanoseconds: 341000000 },
    work: [
      { role: "Mobile Developer", description: "Built and maintained iOS/Android apps with strong focus on performance and stability.\n• Designed UI/UX flows and implemented features end-to-end.\n• Integrated REST APIs, optimized memory/battery usage, and improved responsiveness.\n• Published and maintained apps on Play Store & App Store.", imageUrl: [], periodStart: { seconds: 1735664400, nanoseconds: 624000000 }, periodEnd: { seconds: 1767114000, nanoseconds: 791000000 } },
      { role: "Fullstack Mobile Developer", description: "Built and maintained iOS/Android apps with strong focus on performance and stability.\n• Designed UI/UX flows and implemented features end-to-end.\n• Integrated REST APIs, optimized memory/battery usage, and improved responsiveness.\n• Published and maintained apps on Play Store & App Store.", imageUrl: [], periodStart: { seconds: 1767200400, nanoseconds: 0 }, periodEnd: null },
    ],
  },
  {
    company: "Polda Bengkulu",
    location: "Bengkulu, Indonesia",
    type: "Office",
    imageUrl: "",
    periodStart: { seconds: 1677603600, nanoseconds: 276000000 },
    periodEnd: { seconds: 1709139600, nanoseconds: 795000000 },
    work: [
      { role: "Fullstack Programmer", description: "Developed mobile app using Flutter and Laravel", imageUrl: [], periodStart: { seconds: 1677603600, nanoseconds: 811000000 }, periodEnd: { seconds: 1709139600, nanoseconds: 46000000 } },
    ],
  },
] as unknown as CompanyExperience[];
export const sampleEducations = [
  {
    institution: "Bengkulu University",
    imageUrl: "",
    period: "Aug 2020 - Aug 2024",
    gpa: "",
    description: "",
    degree: "Bachelor of Computer Science (S.Kom)",
    activities: [
      "1st UI/UX Design National Event",
      "Best Innovation and Impact Mobile App National Event",
      "Teaching Assistant (3 Courses)",
      "Founder, Campus Community (TECHNIS)",
    ],
  },
  { institution: "harisenin.com", imageUrl: "", period: "Dec 2025 - Apr 2026", gpa: "", description: "", degree: "Android & Ios Developer", activities: ["Fullstack Flutter Firebase: Habitly App"] },
  {
    institution: "BuildWithAngga",
    imageUrl: "",
    period: "",
    gpa: "",
    description: "",
    degree: "Online Course",
    activities: [
      "FullStack Flutter Golang: Task Management",
      "Flutter Clean Architecture: Travel App Developer",
      "FullStack Laravel Flutter: E-Commerce and Chat Apps",
    ],
  },
  {
    institution: "jagoflutter.com",
    imageUrl: "",
    period: "",
    gpa: "",
    description: "",
    degree: "Live Online Course",
    activities: ["FullStack Laravel Flutter: Attandance App", "Fullstack Laravel Flutter: Delivery Food App"],
  },
] as unknown as Education[];
