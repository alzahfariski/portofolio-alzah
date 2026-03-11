"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  isVertical?: boolean;
}

export const ProjectFilter = ({
  categories,
  selected,
  onSelect,
  isVertical = false,
}: ProjectFilterProps) => {
  return (
    <div className={`flex w-full ${isVertical ? "flex-col" : "items-center"}`}>
      <div 
        className={`flex overflow-x-auto hide-scrollbar gap-2 w-full ${
          isVertical ? "flex-col px-0" : "py-2 px-1 md:justify-center"
        }`} 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
        {categories.map((category) => {
          const isActive = selected === category;
          return (
            <button
              key={`${isVertical ? 'v' : 'h'}-${category}`}
              onClick={() => onSelect(category)}
              className={`relative flex-shrink-0 ${
                isVertical 
                  ? "w-full text-left px-4 py-2.5 rounded-lg" 
                  : "px-5 py-2 rounded-full text-center"
              } text-sm transition-colors duration-300 cursor-pointer ${
                isActive
                  ? isVertical ? "text-neutral-900 bg-[#FFE500]/10 font-medium" : "text-neutral-900 font-medium"
                  : "text-neutral-500 font-medium hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              {isActive && !isVertical && (
                <motion.span
                  layoutId="activeFilterHorizontal"
                  className="absolute inset-0 bg-[#FFE500] border border-neutral-200/50 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className={`relative z-10 ${isVertical ? "flex w-full justify-between items-center" : ""}`}>
                {category}
                {isVertical && isActive && (
                  <motion.span
                    layoutId="activeFilterVerticalIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-[#FFE500] border border-neutral-400/30"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
