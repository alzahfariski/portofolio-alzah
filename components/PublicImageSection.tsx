"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PublicImageSectionProps {
    images: string[];
}

export default function PublicImageSection({ images }: PublicImageSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 second

        return () => clearInterval(interval);
    }, [images]);

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 h-full p-2">
            <div className="flex flex-col gap-2">
                <h1 className="flex items-center gap-3 text-xl font-bold text-neutral-800 dark:text-neutral-100">
                    Gallery
                </h1>
                <div className="w-full mt-2 h-px bg-neutral-600 dark:bg-neutral-600" />
            </div>

            <div className="relative w-full h-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Optional: Indicator dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                                idx === currentIndex ? "bg-white" : "bg-neutral-400/50"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
