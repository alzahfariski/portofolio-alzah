'use client';

import { CompanyExperience } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#FFE8E0",
    },
};

interface ExperienceCardProps {
    experiences: CompanyExperience[] | null;
    className?: string;
}

export const ExperienceCard = ({ experiences, className }: ExperienceCardProps) => {
    // Helper to format date
    const formatDate = (dateValue: any) => {
        if (!dateValue) return 'Present';
        const date = dateValue.seconds
            ? new Date(dateValue.seconds * 1000)
            : new Date(dateValue);

        return date.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
        });
    };

    // Helper to calculate duration
    const calculateDuration = (start: any, end: any) => {
        const startDate = start?.seconds ? new Date(start.seconds * 1000) : new Date(start);
        const endDate = end
            ? (end.seconds ? new Date(end.seconds * 1000) : new Date(end))
            : new Date();

        let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        totalMonths += endDate.getMonth() - startDate.getMonth();
        totalMonths += 1;

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
        const monthText = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

        return [yearText, monthText].filter(Boolean).join(' ');
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl p-5 min-[1371px]:p-6 h-full bg-[#F7F7F7] group/bento",
                className
            )}
        >
            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex items-center">
                    <div className="bg-[#FF5C0C] p-2 rounded-xl shadow-sm">
                        <img
                            src="/images/work/work-head.png"
                            alt="Logo"
                            className="w-7 h-7 rounded-lg object-contain"
                        />
                    </div>

                    <div className="ml-3">
                        <h3 className="font-bold text-base text-neutral-800">Experiences</h3>
                    </div>
                </div>

                {/* Experience List (Simplified for Bento) */}
                <div className="mt-5 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-1 flex-1 max-h-[620px]">
                    {experiences?.slice(0, 3).map((exp, index) => (
                        <div key={index} className="flex flex-col gap-2 border-l border-neutral-200 pl-4 group/item hover:border-[#FF5C0C] transition-colors relative">
                             {/* Dot Indicator for Company */}
                             <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-neutral-300 group-hover/item:bg-[#FF5C0C] transition-colors" />

                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                                    {exp.type}
                                </span>
                                <span className="text-[9px] font-bold text-neutral-400">
                                    {calculateDuration(exp.periodStart, exp.periodEnd)}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2 -mt-1">
                                {exp.imageUrl && (
                                    <img
                                        src={Array.isArray(exp.imageUrl) ? exp.imageUrl[0] : exp.imageUrl}
                                        alt={exp.company}
                                        className="w-5 h-5 object-contain rounded-md bg-white p-0.5 border border-neutral-100"
                                    />
                                )}
                                <h4 className="text-sm font-bold text-neutral-800 leading-tight">
                                    {exp.company}
                                </h4>
                            </div>

                            {/* Roles Loop */}
                            <div className="flex flex-col gap-4 mt-1">
                                {[...exp.work].reverse().map((role, rIndex) => (
                                    <div key={rIndex} className="flex flex-col gap-1 relative pl-3 border-l border-neutral-100">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs text-neutral-700 font-bold leading-none">
                                                {role.role}
                                            </span>
                                            <span className="text-[8px] text-neutral-400 font-medium whitespace-nowrap ml-2">
                                                {formatDate(role.periodStart)} — {formatDate(role.periodEnd)}
                                            </span>
                                        </div>
                                        
                                        {role.description && (
                                            <ul className="flex flex-col gap-1.5 mt-1">
                                                {role.description.split('•').filter(p => p.trim()).map((point, pIndex) => (
                                                    <li key={pIndex} className="text-[10px] text-neutral-500 leading-relaxed flex gap-2">
                                                        <span className="text-[#FF5C0C]/50 mt-0.5">•</span>
                                                        <span>{point.trim()}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer/More CTA */}
                <div className="mt-3 flex justify-end items-center">
                    <span className={`text-lg text-neutral-400 italic ${caveat.className}`}>
                        and more professional journey...
                    </span>
                </div>
            </div>
        </motion.div>
    );
};