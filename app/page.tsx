import "./beranda.css";
import "./karya.css";
import "./spasi.css";
import "./gaya.css";
import Bukti from "@/components/Bukti";
import SmoothScroll from "@/components/SmoothScroll";
import KaryaSection from "@/components/KaryaSection";
import ProjectFan from "@/components/ProjectFan";
import Siklus from "@/components/Siklus";
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
      <SmoothScroll />
      <div className="band t-hero">
        <Hero experiences={experiences} educations={educations} />
      </div>
      <div className="band t-siklus">
        <Siklus />
      </div>
      <div className="band t-kipas">
        <section className="wrap fansec" aria-label="Pintasan ke karya pilihan">
          <ProjectFan />
        </section>
      </div>
      <div className="band t-karya">
        <KaryaSection />
      </div>
      <div className="band t-bukti">
        <Bukti />
      </div>
      <div className="band t-penutup">
        <Closing />
      </div>
      <FloatingCta />
    </>
  );
}
