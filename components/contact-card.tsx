'use client';

import { UserProfile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#FFD700", // Gold-ish for awards
    },
};

interface ContactCardProps {
    className?: string;
}

export const ContactCard = ({ className }: ContactCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl p-6 lg:p-8 h-full bg-[#F7F7F7] group/bento",
                className
            )}
        >
            {/* Header Section */}
            <div className="flex items-center mb-6 relative z-10">
                <div className="bg-[#FFE500] p-2 rounded-xl shadow-sm">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-5 h-5 text-neutral-800"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </div>

                <div className="ml-4">
                    <h3 className="font-bold text-lg text-neutral-800">Contact</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 relative z-10">
                {/* CV Card */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 bg-white group/cv cursor-pointer border border-neutral-100 hover:border-[#FF5600] transition-all shadow-sm h-full"
                >
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="bg-[#FF5C0C]/10 p-2 rounded-lg w-fit mb-3 group-hover/cv:bg-[#FF5C0C] transition-colors">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="text-[#FF5C0C] group-hover/cv:text-white transition-colors"
                                >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-base text-neutral-800">CV</h4>
                            <p className="text-[9px] text-neutral-500 uppercase tracking-wider font-bold">Curriculum Vitae</p>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                            <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-tighter">PDF • 2.4 MB</span>
                            <div className="bg-neutral-50 p-1.5 rounded-full text-neutral-300 group-hover/cv:text-[#FF5C0C] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            </div>
                        </div>
                    </div>
                </motion.a>

                {/* Email Card */}
                <motion.a
                    href="mailto:hire@alzahfariski.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 bg-white group/email cursor-pointer border border-neutral-100 hover:border-[#58CA81] transition-all shadow-sm h-full"
                >
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="bg-[#58CA81]/10 p-2 rounded-lg w-fit mb-3 group-hover/email:bg-[#58CA81] transition-colors">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="text-[#58CA81] group-hover/email:text-white transition-colors"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-base text-neutral-800">Email</h4>
                            <p className="text-[9px] text-neutral-500 uppercase tracking-wider font-bold">Get In Touch</p>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                            <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-tighter truncate max-w-[80px]">hire@alzah...</span>
                            <div className="bg-neutral-50 p-1.5 rounded-full text-neutral-300 group-hover/email:text-[#58CA81] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </div>
                    </div>
                </motion.a>
            </div>
            
            {/* Minimal Footer */}
            <div className="mt-6 flex justify-center relative z-10 border-t border-neutral-100 pt-4">
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest">Let's work together</p>
            </div>
        </motion.div>
    );
};