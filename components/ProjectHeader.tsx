"use client";

import { motion } from "framer-motion";

export default function ProjectHeader() {
    // Kita definisikan animasi untuk masing-masing elemen
    const cardVariants = {
        initial: { rotate: 22, y: 0, x: 0 },
        hover: { rotate: 15, y: -15, x: -5 }
    };

    const phoneVariants = {
        initial: { y: 20, scale: 1 },
        hover: { y: -10, scale: 1.1 }
    };

    const elementVariants = {
        initial: { rotate: -11, y: 0 },
        hover: { rotate: 0, y: 10 }
    };

    return (
        <div className="relative w-full h-48 bg-[#F7F7F7] dark:bg-neutral-900 rounded-t-xl overflow-hidden">
            {/* Background UI Card */}
            <motion.img
                src="https://framerusercontent.com/images/sZ8qiRvlKLl2e5letqhxTYLbIw.jpg"
                variants={cardVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute top-4 left-4 w-40 rounded-lg shadow-lg z-10"
                alt="UI Card"
            />

            {/* Phone Mockup */}
            <motion.img
                src="https://framerusercontent.com/images/NqSrlYNwmwj33xpEIrDVbfETVUs.png"
                variants={phoneVariants}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute bottom-[-30px] right-6 w-28 z-20"
                alt="Phone Mockup"
            />

            {/* Small UI Element */}
            <motion.img
                src="https://framerusercontent.com/images/EzpapKUj9E1QZ6p1DjxUHt79Q.jpg"
                variants={elementVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute bottom-12 left-6 w-24 rounded-md shadow-md z-30"
                alt="UI Element"
            />
        </div>
    );
}