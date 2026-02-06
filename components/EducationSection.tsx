import React from 'react';
import { Education } from "@/lib/types";

interface EducationSectionProps {
    educations: Education[];
}

export default function EducationSection({ educations }: EducationSectionProps) {
    if (!educations || educations.length === 0) return null;

    return (
        <div className="flex flex-col gap-8 mt-4">
            {educations.map((edu, index) => (
                <div key={index} className="flex flex-col gap-3 relative pl-6 border-l border-neutral-200 dark:border-neutral-800">
                    {/* Dot Indikator Timeline */}
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-white dark:border-neutral-950" />

                    {/* Header: Institusi & Logo */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            {edu.imageUrl && (
                                <img
                                    src={edu.imageUrl}
                                    alt={edu.institution}
                                    className="w-10 h-10 object-contain rounded-lg bg-white dark:bg-neutral-800 p-1 border border-neutral-100 dark:border-neutral-800"
                                />
                            )}
                            <div>
                                <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                                    {edu.institution}
                                </h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {edu.degree}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <span className="text-[11px] font-medium text-neutral-500 bg-neutral-50 dark:bg-neutral-900/50 px-2 py-0.5 rounded border border-neutral-100 dark:border-neutral-800/50">
                                {edu.period}
                            </span>
                            {edu.gpa && (
                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                                    GPA: {edu.gpa}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Deskripsi */}
                    {edu.description && (
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify mt-1">
                            {edu.description}
                        </p>
                    )}

                    {/* Activities Badges */}
                    {edu.activities && edu.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            {edu.activities.map((activity, aIndex) => (
                                <span
                                    key={aIndex}
                                    className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 font-medium"
                                >
                                    {activity}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}