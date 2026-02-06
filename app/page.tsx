import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { getUserProfile, getExperiences, getEducation } from "@/lib/firestore";
import BioSection from "@/components/BioSection";
import { UserProfile, CompanyExperience, Education } from "@/lib/types";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";
import EducationSection from "@/components/EducationSection";
import PublicImageSection from "@/components/PublicImageSection";
import fs from "fs";
import path from "path";


export default async function Home() {
  const profile = await getUserProfile() as UserProfile | null;
  const experiences = await getExperiences() as CompanyExperience[] | null;
  const educations = await getEducation() as Education[] | null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl w-full">
        <BentoGrid className="mx-auto">
          {/* Journey Section */}
          <BentoGridItem
            title={
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                  My journey.
                </h1>
                <div className="w-full mt-2 h-px bg-neutral-600 dark:bg-neutral-600" />
              </div>
            }
            description={
              <BioSection
                bio={profile?.bio}
                location={profile?.location}
              />
            }
            className="md:col-span-1 md:row-span-2"
          />

          {/* About Section */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 overflow-hidden"
            title={
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="flex items-center gap-3 text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  {profile?.name}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                    Available to work
                  </span>
                </h1>
                <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{profile?.title}</h2>
              </div>
            }
            description={
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 mt-4 items-center">
                  <div className="flex flex-row gap-2">
                    {profile?.socials?.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-default w-fit"
                      >
                        <a href={social.linkUrl} target="_blank">
                          <img
                            src={social.imageUrl}
                            className="w-5 h-5 object-contain"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-default w-fit">
                    <img src="https://cdn.simpleicons.org/googledrive/4285F4" className="w-5 h-5 object-contain" />
                    <a href="https://drive.google.com/file/d/1qB4R4R4R4R4R4R4R4R4R4R4R4R4R4R4/view?usp=sharing" target="_blank" className="flex flex-row justify-center items-center">
                      download cv
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 mt-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-default w-fit">
                    <a href={`https://wa.me/${profile?.whatsapp}`} target="_blank" className="flex flex-row justify-center items-center">
                      <img
                        src="https://cdn.simpleicons.org/whatsapp/128c7e"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="ml-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">WhatsApp Me</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-default w-fit">
                    <a href={`mailto:${profile?.email}`} target="_blank" className="flex flex-row justify-center items-center">
                      <img
                        src="https://cdn.simpleicons.org/gmail/128c7e"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="ml-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">{profile?.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            }
          />

          {/* Public Image Section */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2"
            header={<PublicImageSection images={fs.readdirSync(path.join(process.cwd(), "public/img")).filter((file) => /\.(png|jpg|jpeg|svg)$/.test(file)).map((file) => `/img/${file}`)} />}
          />

          {/* Skills Section */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            title={
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="flex items-center gap-3 text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  My Stacks & Tools
                </h1>
                <div className="w-full mt-2 h-px bg-neutral-600 dark:bg-neutral-600" />
              </div>
            }
            description={
              <SkillSection skills={profile?.skills} />
            }
          />

          {/* Education Section */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-3"
            title={
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="flex items-center gap-3 text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  Education & Courses
                </h1>
                <div className="w-full mt-2 h-px bg-neutral-600 dark:bg-neutral-600" />
              </div>
            }
            description={
              <EducationSection educations={educations || []} />
            }
          />


          {/* Experience Section */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-3 overflow-hidden"
            title={
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="flex items-center gap-3 text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  Experiences
                </h1>
                <div className="w-full mt-2 h-px bg-neutral-600 dark:bg-neutral-600" />
              </div>
            }
            description={
              <ExperienceSection experiences={experiences} />
            }
          />



        </BentoGrid>


      </div>
    </main>
  );
}