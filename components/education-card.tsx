'use client';

import { Education } from "@/lib/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#E3F2FD",
    },
};

interface EducationCardProps {
    educations: Education[];
    className?: string;
}

export const EducationCard = ({ educations, className }: EducationCardProps) => {
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
                        src="/images/edu/edu-1.png"
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
                        src="/images/edu/edu-2.png"
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
                            src="/images/edu/edu-head.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-lg object-contain"
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="font-bold text-lg text-neutral-800">Educations</h3>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1 pr-1">
                    {educations.map((edu, index) => (
                        <div key={index} className="flex flex-col gap-1 border-l-2 border-neutral-200 pl-4 hover:border-[#FFE500] transition-colors">
                            <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold text-neutral-800">{edu.institution}</h4>
                                <span className="text-[10px] font-medium text-neutral-400">{edu.period}</span>
                            </div>
                            <p className="text-xs text-neutral-600 font-medium">{edu.degree}</p>
                            <p className="text-[10px] text-neutral-400 italic">GPA: {edu.gpa}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};