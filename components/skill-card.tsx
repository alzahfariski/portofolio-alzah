'use client';

import { UserProfile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import SkillSection from './SkillSection';

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#FFF6A0",
    },
};

interface SkillCardProps {
    skills: UserProfile['skills'] | undefined;
    className?: string;
}

export const SkillCard = ({ skills, className }: SkillCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 lg:p-8 h-full bg-[#F7F7F7] group/bento",
                className
            )}
        >
            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Header Section */}
                <div className="flex items-center">
                    <div className="bg-[#FFE500] p-2 rounded-xl shadow-sm">
                        <img
                            src="/images/skill/skill-head.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-lg object-contain"
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="font-bold text-lg text-neutral-800">Tech stack</h3>
                    </div>
                </div>

                {/* Skill Section */}
                <div className="flex-1 flex items-center">
                    <SkillSection skills={skills} />
                </div>
            </div>
        </motion.div>
    );
};
