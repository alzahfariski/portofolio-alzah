"use client";

import { useState, useMemo } from "react";
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
  const [sortOption, setSortOption] = useState<"Latest" | "Oldest">("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredAndSorted = useMemo(() => {
    let result = selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

    if (searchQuery.trim() !== "") {
      const lowerQ = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(lowerQ) ||
          p.description?.toLowerCase().includes(lowerQ)
      );
    }

    return [...result].sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      return sortOption === "Latest" ? yearB - yearA : yearA - yearB;
    });
  }, [projects, selected, sortOption, searchQuery]);

  return (
    <LayoutGroup>
      {/* Mobile/Tablet Filter Section (Hidden on Desktop viewport >= lg) */}
      <section className="lg:hidden mt-20 sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
          
          {/* Left Dropdown (Sort) */}
          <div className="flex items-center justify-between md:justify-start gap-4">
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as "Latest" | "Oldest")}
                className="appearance-none bg-transparent hover:bg-neutral-100 text-neutral-800 font-semibold text-sm cursor-pointer pl-4 pr-10 py-2.5 rounded-lg border border-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            <div className="w-px h-6 bg-neutral-200 hidden md:block"></div>
          </div>

          {/* Center Tabs */}
          <div className="flex-1 overflow-hidden">
            <ProjectFilter
              categories={categories}
              selected={selected}
              onSelect={setSelected}
              isVertical={false}
            />
          </div>

          {/* Right Search Input */}
          <div className="hidden md:flex items-center relative w-64">
            <svg
              className="w-4 h-4 text-neutral-500 absolute left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100/80 hover:bg-neutral-200/60 focus:bg-white border border-transparent focus:border-pink-500/20 text-sm rounded-lg pl-9 pr-4 py-2.5 transition-colors outline-none focus:ring-4 focus:ring-pink-500/10 placeholder-neutral-500 font-medium text-neutral-800"
            />
          </div>
        </div>
      </section>

      {/* Main Content with Desktop Sidebar and Grid */}
      <section className="px-4 pt-32 pb-8 lg:pt-40 lg:pb-10 min-[1371px]:pt-48 min-[1371px]:pb-14 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 min-[1371px]:gap-12 items-start">
          
          {/* Desktop Sidebar (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex w-64 flex-shrink-0 sticky top-[100px] flex-col gap-8 z-30">
            {/* Search */}
            <div className="relative w-full">
              <svg
                className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-100/80 hover:bg-neutral-200/60 focus:bg-white border border-transparent focus:border-pink-500/20 text-sm rounded-lg pl-9 pr-4 py-3 transition-colors outline-none focus:ring-4 focus:ring-pink-500/10 placeholder-neutral-500 font-medium text-neutral-800"
              />
            </div>

            {/* Categories */}
            <div className="w-full">
              <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-4 px-1">Categories</h3>
              <ProjectFilter
                categories={categories}
                selected={selected}
                onSelect={setSelected}
                isVertical={true}
              />
            </div>

            {/* Sort */}
            <div className="w-full">
              <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-4 px-1">Sort By</h3>
              <div className="relative w-full">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as "Latest" | "Oldest")}
                  className="w-full appearance-none bg-neutral-100/80 hover:bg-neutral-200/60 text-neutral-800 font-medium text-sm cursor-pointer pl-4 pr-10 py-3 rounded-lg border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                >
                  <option value="Latest">Latest Projects</option>
                  <option value="Oldest">Oldest Projects</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="flex-1 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="columns-1 sm:columns-2 min-[1371px]:columns-3 gap-5"
              >
                {filteredAndSorted.map((project, index) => (
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
            {filteredAndSorted.length === 0 && (
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
        </div>
      </section>

      {/* Footer Stats */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-2xl min-[1371px]:text-3xl font-bold text-neutral-900">
              {projects.length}
            </p>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Projects
            </p>
          </div>
          <div className="w-px h-10 bg-neutral-200" />
          <div className="text-center">
            <p className="text-2xl min-[1371px]:text-3xl font-bold text-neutral-900">
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
