'use client';

import { UserProfile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#FECBCF",
    },
};

interface JourneyCardProps {
    profile: UserProfile | null;
    className?: string;
}

export const JourneyCard = ({ profile, className }: JourneyCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 min-[1371px]:p-8 h-full bg-[#F7F7F7] group/bento",
                className
            )}
        >
            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex items-center mb-6">
                    <div className="bg-[#F10073] p-2 rounded-xl shadow-sm">
                        <img
                            src="/images/skill/journey-head.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-lg object-contain"
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="font-bold text-lg text-neutral-800">Journey</h3>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                        {profile?.bio || "No biography available yet."}
                    </p>
                </div>

                {/* Socials Section */}
                {profile?.socials && profile.socials.length > 0 && (
                    <div className="mt-6 flex items-center gap-3">
                        {profile.socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm transition-all hover:bg-neutral-50"
                            >
                                <img
                                    src={social.imageUrl}
                                    alt="Social Link"
                                    className="w-5 h-5 object-contain"
                                />
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};