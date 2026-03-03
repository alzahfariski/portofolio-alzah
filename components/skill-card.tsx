'use client';

import { UserProfile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import SkillSection from './SkillSection';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

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
                "relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 lg:p-8 h-full min-h-[300px] bg-[#F7F7F7] group/bento",
                className
            )}
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
            <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: 30, y: -20, rotate: 90 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[-10px] left-[-10px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/skill/skill-1.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: -20, y: 30, rotate: -90 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-[10px] right-[10px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/skill/skill-2.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

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
                        <h3 className="font-bold text-lg text-neutral-800">My Stacks & Tools</h3>
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
