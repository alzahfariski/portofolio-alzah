import { getProjects } from "@/lib/firestore";
import { Project } from "@/lib/types";
import { ProjectPageClient } from "@/components/project-page-client";

export const dynamic = "force-dynamic";
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

      {/* Client wrapper for filter + grid */}
      <ProjectPageClient projects={firestoreProjects} categories={categories} />
    </main>
  );
}
