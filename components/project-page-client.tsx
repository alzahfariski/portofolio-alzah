"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { ProjectModal } from "./project-modal";

interface ProjectPageClientProps {
  projects: Project[];
  categories: string[];
}

export const ProjectPageClient = ({
  projects,
  categories,
}: ProjectPageClientProps) => {
  const [selected, setSelected] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <LayoutGroup>
      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-100 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectFilter
            categories={categories}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-4 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={String(project.title || index) + index}
                  project={project}
                  index={index}
                  onClick={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <p className="text-neutral-500 text-base">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Stats */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-neutral-900">
              {projects.length}
            </p>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Projects
            </p>
          </div>
          <div className="w-px h-10 bg-neutral-200" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-neutral-900">
              {categories.length - 1}
            </p>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Categories
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </LayoutGroup>
  );
};
