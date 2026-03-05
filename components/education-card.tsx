'use client';

import { Education } from "@/lib/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#B0F9B5",
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
                        hover: { x: 105, y: 0, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[30px] left-[90px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/edu/edu-5.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: 80, y: 0, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[30px] left-[70px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/edu/edu-4.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: 60, y: 0, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[30px] left-[50px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
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
                        hover: { x: 40, y: 0, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[30px] left-[30px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/edu/edu-2.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: 20, y: 0, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[30px] left-[10px] w-12 h-12 md:w-12 md:h-12 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/edu/edu-3.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                
            </div>

            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Header Section */}
                <div className="flex items-center">
                    <div className="bg-[#58CA81] p-2 rounded-xl shadow-sm">
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
                            {edu.activities && edu.activities.length > 0 && (
                                <div className="mt-1.5 flex flex-wrap gap-1">
                                    {edu.activities.map((activity, actIndex) => (
                                        <span 
                                            key={actIndex} 
                                            className="text-[9px] leading-tight text-neutral-500 px-2 py-0.5"
                                        >
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};