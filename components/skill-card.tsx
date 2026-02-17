'use client';

import { UserProfile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import SkillSection from './SkillSection';

interface SkillCardProps {
    skills: UserProfile['skills'] | undefined;
    className?: string;
}

export const SkillCard = ({ skills, className }: SkillCardProps) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 lg:p-8 h-full min-h-[300px] bg-[#F7F7F7] group/bento",
                className
            )}
        >
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="flex items-center gap-3 text-xl font-bold text-neutral-800 ">
                    My Stacks & Tools
                </h1>
                <div className="w-full h-px bg-neutral-600" />
            </div>

            <div className="flex-1 flex items-center">
                <SkillSection skills={skills} />
            </div>
        </motion.div>
    );
};
