import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { AboutCard } from "@/components/about-card";
import { getUserProfile, getExperiences } from "@/lib/firestore";
import { CompanyExperience, UserProfile } from "@/lib/types";
import { SkillCard } from "@/components/skill-card";
import { ExperienceCard } from "@/components/experience-card";


export default async function Home() {
  const profile = await getUserProfile() as UserProfile | null;
  const experiences = await getExperiences() as CompanyExperience[] | null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-white">
      <div className="max-w-7xl w-full">
        <BentoGrid className="mx-auto">
          {/* About Section */}
          <AboutCard
            profile={profile}
            className="md:col-span-1 md:row-span-2"
          />

          {/* Tech Stack */}
          <SkillCard
            skills={profile?.skills}
            className="md:col-span-1 md:row-span-1"
          />

          {/* Experience */}
          <ExperienceCard
            experiences={experiences}
            className="md:col-span-1 md:row-span-3"
          />
        </BentoGrid>


      </div>
    </main>
  );
}