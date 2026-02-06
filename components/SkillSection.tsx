
import React from 'react';
import { UserProfile } from '@/lib/types';

interface SkillSectionProps {
    skills: UserProfile['skills'] | undefined;
}

export default function SkillSection({ skills }: SkillSectionProps) {
    if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-default"
                >
                    {skill.imageUrl && (
                        <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-4 h-4 object-contain"
                        />
                    )}
                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
