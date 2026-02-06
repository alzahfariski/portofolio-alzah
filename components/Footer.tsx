"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
    const textRef = useRef<HTMLDivElement>(null);

    const spawnHeart = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!textRef.current) return;

        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const id = Date.now() + Math.random();

        setHearts((prev) => [...prev, { id, x, y }]);
        setTimeout(() => {
            setHearts((prev) => prev.filter((h) => h.id !== id));
        }, 2000); // Remove heart after 2 seconds
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Throttle spawning to avoid too many hearts
        if (Math.random() > 0.1) return;
        spawnHeart(e);
    };

    return (
        <footer className="w-full py-10 px-6 border-t border-neutral-100 dark:border-neutral-900 relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

                {/* Copyright */}
                <div className="text-neutral-500 dark:text-neutral-400 font-medium tracking-tight text-sm">
                    ⓒ {currentYear}
                </div>

                {/* Message */}
                <div
                    className="flex-1 flex justify-center text-center relative pointer-events-auto"
                >
                    <div
                        ref={textRef}
                        className="relative inline-block cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onClick={spawnHeart}
                    >
                        <p className="text-neutral-800 dark:text-neutral-200 font-medium text-base tracking-tight max-w-xs md:max-w-none hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 select-none">
                            I hope you enjoyed exploring my portfolio! Have a fantastic day
                        </p>
                        <AnimatePresence>
                            {hearts.map((heart) => (
                                <motion.div
                                    key={heart.id}
                                    initial={{ opacity: 1, y: 0, x: 0, scale: 0.5 }}
                                    animate={{
                                        opacity: 0,
                                        y: -100 - Math.random() * 50, // Fly up variably
                                        x: (Math.random() - 0.5) * 50, // Drift left/right
                                        scale: 1.5
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute text-red-500 pointer-events-none"
                                    style={{
                                        left: heart.x,
                                        top: heart.y,
                                        transform: 'translate(-50%, -50%)' // Center on cursor
                                    }}
                                >
                                    ❤️
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                    <FooterLink href="https://linkedin.com/in/alzahfariski" label="LinkedIn" />
                    <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-800" />
                    <FooterLink href="https://instagram.com/alzahfariski" label="Instagram" />
                    <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-800" />
                    <FooterLink href="/cv.pdf" label="CV" isDownload />
                </div>

            </div>
        </footer>
    );
};

// Sub-component untuk link agar kode lebih rapi
const FooterLink = ({ href, label, isDownload }: { href: string, label: string, isDownload?: boolean }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={isDownload}
        className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors px-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
        {label}
    </a>
);

export default Footer;