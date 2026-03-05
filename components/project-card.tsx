"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={() => onClick?.(project)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group block break-inside-avoid mb-5 cursor-pointer text-left w-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(project);
        }
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="pt-3 pb-1 px-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900 text-[15px] leading-snug group-hover:text-neutral-700 transition-colors">
            {typeof project.title === 'object' ? 'Project' : project.title}
          </h3>
          <span className="text-xs text-neutral-400 font-medium ml-2 shrink-0">
            {project.year && typeof project.year === 'object' && (project.year as any).seconds 
              ? new Date((project.year as any).seconds * 1000).getFullYear()
              : String(project.year || '')}
          </span>
        </div>

        <p className="text-[13px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 group-hover:bg-[#FFF8CC] group-hover:text-neutral-700 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
