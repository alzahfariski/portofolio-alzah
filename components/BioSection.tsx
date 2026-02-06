"use client";

import React, { useState } from "react";

interface BioSectionProps {
  bio?: string;
  location?: string;
}

export default function BioSection({ bio, location }: BioSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!bio) return null;

  return (
    <div className="mt-4">
      <div className="relative">
        <h2
          className={`whitespace-pre-line text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-all duration-300 ${!isExpanded ? "line-clamp-3" : ""
            }`}
        >
          {bio}
        </h2>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 flex items-center gap-1 transition-colors"
        >
          {isExpanded ? "Show Less ↑" : "Read More ↓"}
        </button>
      </div>

      {location && (
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-4 mb-2 font-medium">
          📍 {location}
        </p>
      )}
    </div>
  );
}