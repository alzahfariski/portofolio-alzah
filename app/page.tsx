import "./beranda.css";
import "./karya.css";
import KaryaSection from "@/components/KaryaSection";
import Closing from "@/components/Closing";
import Hero from "@/components/Hero";
import FloatingCta from "@/components/FloatingCta";
import { getExperiences, getEducation } from "@/lib/firestore";
import type { CompanyExperience, Education } from "@/lib/types";

// ISR: halaman dibuat ulang tiap 1 jam.
export const revalidate = 3600;

export default async function Home() {
  let experiences: CompanyExperience[] | null;
  let educations: Education[] | null;
  if (process.env.SAMPLE_DATA === "1") {
    // MODE DATA CONTOH (hanya pengujian visual; env tidak diatur di produksi). Tidak menyentuh Firestore.
    const s = await import("@/fixtures/sample-data");
    experiences = s.sampleExperiences;
    educations = s.sampleEducations;
  } else {
    [experiences, educations] = await Promise.all([getExperiences(), getEducation()]);
  }
  return (
    <>
      <Hero experiences={experiences} educations={educations} />
      <KaryaSection />
      <Closing />
      <FloatingCta />
    </>
  );
}
