import { getProjects } from "@/lib/firestore";
import { Project } from "@/lib/types";
import { ProjectPageClient } from "@/components/project-page-client";

export default async function ProjectPage() {
  const firestoreProjects = await getProjects();

  // Sort projects by latest year first
  firestoreProjects.sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearB - yearA;
  });

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(firestoreProjects.map((p) => p.category))),
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-10 min-[1371px]:pt-32 min-[1371px]:pb-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl min-[1371px]:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
            My Projects
          </h1>
          <p className="mt-4 text-base min-[1371px]:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            A curated collection of my work — from mobile apps and web platforms
            to UI/UX designs. Each crafted with passion and attention to detail.
          </p>
        </div>
      </section>

      {/* Client wrapper for filter + grid */}
      <ProjectPageClient projects={firestoreProjects} categories={categories} />
    </main>
  );
}
