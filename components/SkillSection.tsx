'use client';

import React from 'react';
import { UserProfile } from '@/lib/types';
import { motion } from 'framer-motion';

interface SkillSectionProps {
    skills: UserProfile['skills'] | undefined;
}

const MarqueeRow = ({ skills, reverse = false, duration = 40 }: { skills: UserProfile['skills'], reverse?: boolean, duration?: number }) => {
    return (
        <div className="flex overflow-hidden relative w-full">
            <motion.div
                className="flex"
                initial={{ x: reverse ? "-33.33%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-33.33%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration,
                    repeatType: "loop"
                }}
            >
                {/* Triple the skills to ensure smooth looping */}
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full hover:bg-neutral-200 transition-colors cursor-default w-fit mr-4 whitespace-nowrap"
                    >
                        {skill.imageUrl && (
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className="w-5 h-5 object-contain"
                            />
                        )}
                        <span className="text-sm font-medium text-neutral-700 pr-4 ">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function SkillSection({ skills }: SkillSectionProps) {
    if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

    // Split skills into 2 or 3 rows for better visual density
    const row1: UserProfile['skills'] = [];
    const row2: UserProfile['skills'] = [];

    skills.forEach((skill, index) => {
        if (index % 2 === 0) row1.push(skill);
        else if (index % 2 === 1) row2.push(skill);
    });

    return (
        <div
            className="flex flex-col gap-6 w-full overflow-hidden py-10"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <MarqueeRow skills={row1} duration={35} />
            <MarqueeRow skills={row2} reverse={true} duration={50} />
        </div>
    );
}
