import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { AboutCard } from "@/components/about-card";
import { getUserProfile, getExperiences, getEducation } from "@/lib/firestore";
import { CompanyExperience, Education, UserProfile } from "@/lib/types";
import { SkillCard } from "@/components/skill-card";
import { ExperienceCard } from "@/components/experience-card";
import { EducationCard } from "@/components/education-card";
import { JourneyCard } from "@/components/journey-card";
import { ContactCard } from "@/components/contact-card";


export default async function Home() {
  const profile = await getUserProfile() as UserProfile | null;
  const experiences = await getExperiences() as CompanyExperience[] | null;
  const educations = await getEducation() as Education[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 min-[1371px]:p-24 bg-white">
      <div className="max-w-7xl w-full">
        <BentoGrid className="mx-auto">
          {/* About Section (R1-2, C1) */}
          <AboutCard
            profile={profile}
            className="min-[1371px]:col-span-1 min-[1371px]:row-span-2 min-h-[400px] min-[1371px]:min-h-0"
          />

          {/* Tech Stack (R1, C2) */}
          <SkillCard
            skills={profile?.skills}
            className="min-[1371px]:col-span-1 min-[1371px]:row-span-1 min-h-[250px] min-[1371px]:min-h-0"
          />

          {/* Experience (R1-3, C3) */}
          <ExperienceCard
            experiences={experiences}
            className="min-[1371px]:col-span-1 min-[1371px]:row-span-3 min-h-[500px] min-[1371px]:min-h-0"
          />

          {/* Journey (R2-3, C2) */}
          <JourneyCard
            profile={profile}
            className="min-[1371px]:col-span-1 min-[1371px]:row-span-2 min-h-[300px] min-[1371px]:min-h-0"
          />

          {/* Education (R3-4, C1) */}
          <EducationCard
            educations={educations}
            className="min-[1371px]:col-span-1 min-[1371px]:row-span-3 min-h-[400px] min-[1371px]:min-h-0"
          />

          {/* Award (R4, C2-3) */}
          <ContactCard
            className="min-[1371px]:col-span-2 min-[1371px]:row-span-2 min-h-[300px] min-[1371px]:min-h-0"
          />
        </BentoGrid>
      </div>
    </main>
  );
}