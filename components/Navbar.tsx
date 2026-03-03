"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/project" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-[5000]">
            <div className="flex space-x-1 bg-white backdrop-blur-xl border border-neutral-200/50 rounded-full p-2 shadow-2xl items-center justify-center">
                {navItems.map((navItem, idx) => {
                    const isActive = pathname === navItem.link;

                    return (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                isActive 
                                    ? "text-neutral-900 " 
                                    : "text-neutral-500 hover:text-neutral-900 "
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-[#FFE500]  border border-neutral-200/50  rounded-full -z-10 shadow-sm"
                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
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
