import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { AboutCard } from "@/components/about-card";
import { getUserProfile } from "@/lib/firestore";
import { UserProfile } from "@/lib/types";
import { SkillCard } from "@/components/skill-card";


export default async function Home() {
  const profile = await getUserProfile() as UserProfile | null;

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
          <div className="md:col-span-1 md:row-span-1">
            <SkillCard skills={profile?.skills} />
          </div>
        </BentoGrid>


      </div>
    </main>
  );
}