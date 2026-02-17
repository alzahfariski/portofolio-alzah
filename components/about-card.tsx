"use client";

import { UserProfile } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

interface AboutCardProps {
    profile: UserProfile | null;
    className?: string;
}

const cardVariants = {
    initial: {
        backgroundColor: "#F7F7F7",
    },
    hover: {
        backgroundColor: "#DCD0FF",
    },
};

export const AboutCard = ({ profile, className }: AboutCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 lg:p-8 h-full min-h-[400px] dark:bg-neutral-900",
                className
            )}
        >
            {/* Decorative Background Elements mimicking the Framer design */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Image 1 (Top Right) */}
                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: 0 },
                        hover: { x: -20, y: 220, rotate: -2 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-[-100px] right-[10px] w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden z-11"
                >
                    <img
                        src="/images/about/about-3.png"
                        alt="Background 1"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Image 2 (Bottom Left) */}
                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: -8 },
                        hover: { x: 140, y: -110, rotate: -8 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[80px] left-[-120px] w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden z-11"
                >
                    <img
                        src="/images/about/about-2.png"
                        alt="Background 2"
                        className="w-full h-full object-cover"
                    />
                </motion.div>


                {/* Image 3 (Bottom Right) */}
                <motion.div
                    variants={{
                        initial: { x: 0, y: 0, rotate: -12 },
                        hover: { x: -150, y: -150, rotate: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[-20px] right-[-40px] w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden z-12"
                >
                    <img
                        src="/images/about/about-1.png"
                        alt="Background 3"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between">

                {/* Header Section */}
                <div className="flex items-center">
                    <div className="bg-[#A786FF] p-2 rounded-xl shadow-sm">
                        <img
                            src="/images/about/about-head.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-lg object-contain"
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="font-bold text-lg text-neutral-800">About Me</h3>
                    </div>
                </div>

                {/* Center Floating Card with text */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="self-center mt-8 relative"
                >
                    <div className="relative w-full max-w-sm aspect-[1.6/1] rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/images/about/bg-about.png"
                            alt="Main Visual"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">

                            <h2 className={`text-3xl text-black drop-shadow-md transform -rotate-2 ${caveat.className}`}>
                                Hello!
                            </h2>

                            <h2 className={`text-2xl md:text-3xl text-black drop-shadow-md mt-1 ${caveat.className}`}>
                                I&apos;m <span className="font-bold">{profile?.name}</span>
                            </h2>

                        </div>
                    </div>
                </motion.div>

                {/* Footer/Description Area */}
                <div className="mt-8 relative z-20">
                    <h2 className="text-xs md:text-xs font-bold text-neutral-800 leading-tight">
                        {profile?.title.split("|").slice(0, 1).join(" ")} <br />
                        {profile?.title.split("|").slice(1).join(" ")}
                    </h2>
                </div>

            </div>
        </motion.div>
    );
};
