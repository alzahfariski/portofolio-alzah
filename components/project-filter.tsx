"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export const ProjectFilter = ({
  categories,
  selected,
  onSelect,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => {
        const isActive = selected === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
              isActive
                ? "text-neutral-900"
                : "text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 bg-[#FFE500] rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};
