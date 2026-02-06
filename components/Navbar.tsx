"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", link: "/" },
    { name: "Project", link: "/project" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-[5000]">
            <div className="flex space-x-2 bg-neutral-900/50 dark:bg-black/50 backdrop-blur-md border border-neutral-800/50 rounded-full px-4 py-2 shadow-xl items-center justify-center">
                {navItems.map((navItem, idx) => {
                    const isActive = pathname === navItem.link;

                    return (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-sm font-medium hover:text-neutral-300 transition-colors px-4 py-1.5 rounded-full"
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-neutral-500 dark:bg-neutral-800 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{navItem.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
