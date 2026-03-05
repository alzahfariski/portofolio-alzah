"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectDetail } from "@/lib/types";
import { getProjectDetail } from "@/lib/firestore";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [details, setDetails] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && project?.id) {
      setLoading(true);
      getProjectDetail(project.id).then((data) => {
        setDetails(data);
        setLoading(false);
      });
    } else {
      setDetails(null);
    }
  }, [isOpen, project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Header / Hero Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-neutral-100 shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {typeof project.title === 'object' ? 'Project' : project.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm font-medium gap-4">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>
                    {project.year && typeof project.year === 'object' && (project.year as any).seconds 
                      ? new Date((project.year as any).seconds * 1000).getFullYear()
                      : String(project.year || '')}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 bg-white flex-1 text-neutral-800">
              
              {/* External Link */}
              {project.linkUrl && (
                <div className="mb-8">
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-md"
                  >
                    <span>Visit Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              )}

              {loading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-neutral-200 rounded-xl"></div>
                    <div className="h-24 bg-neutral-200 rounded-xl"></div>
                  </div>
                </div>
              ) : details ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900">About the Project</h3>
                    <p className="text-neutral-600 leading-relaxed whitespace-pre-wrap">
                      {details.fullDescription || details.description}
                    </p>
                  </section>

                  {/* Grid for metadata */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-neutral-100">
                    {details.role && (
                      <div>
                        <span className="block text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Role</span>
                        <span className="font-medium text-neutral-900">{details.role}</span>
                      </div>
                    )}
                    {details.client && (
                      <div>
                        <span className="block text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Client</span>
                        <span className="font-medium text-neutral-900">{details.client}</span>
                      </div>
                    )}
                    {details.duration && (
                      <div>
                        <span className="block text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Duration</span>
                        <span className="font-medium text-neutral-900">{details.duration}</span>
                      </div>
                    )}
                    {details.technologies && details.technologies.length > 0 && (
                      <div className="col-span-2 md:col-span-1">
                        <span className="block text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Tech Stack</span>
                        <span className="font-medium text-neutral-900">{details.technologies.join(', ')}</span>
                      </div>
                    )}
                  </div>

                  {details.features && details.features.length > 0 && (
                    <section>
                      <h3 className="text-xl font-semibold mb-4 text-neutral-900">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            <span className="text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  
                  {details.gallery && details.gallery.length > 0 && (
                    <section>
                      <h3 className="text-xl font-semibold mb-4 text-neutral-900">Gallery</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {details.gallery.map((img, i) => (
                          <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-auto rounded-xl border border-neutral-100 object-cover" />
                        ))}
                      </div>
                    </section>
                  )}

                </motion.div>
              ) : (
                <div className="py-12 text-center text-neutral-500">
                  <p className="text-lg mb-2 text-neutral-800 font-medium">Detailed information is not available yet.</p>
                  <p className="text-sm">We're still preparing the detailed case study for this project. Keep an eye out for updates!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
