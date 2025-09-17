"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { ShimmerButton } from "../magicui/shimmer-button";
import { BorderBeam } from "../magicui/border-beam";

// --- Type Definitions ---
interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
  connected?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const FloatingNav = ({ navItems, className, connected, onConnect, onDisconnect }: FloatingNavProps) => {
  const isConnected = Boolean(connected);
  const handleConnect = onConnect ?? (() => {});
  const handleDisconnect = onDisconnect ?? (() => {});
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        className={cn(
          "flex max-w-4xl fixed top-10 inset-x-0 mx-auto border border-white rounded-3xl bg-white backdrop-blur-md shadow-lg z-50 px-4 py-2 items-center justify-between space-x-2 overflow-hidden",
          className,
        )}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 z-[-1] bg-gradient-to-r from-white/5 via-gray-100/10 to-white/5 rounded-3xl"
          animate={{
            scale: [1, 1.03, 0.97, 1.02, 1],
            y: [0, -2, 3, -2, 0],
            rotate: [0, 0.5, -0.5, 0.3, 0],
            opacity: [0.3, 0.5, 0.4, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.jpg" alt="Fenders" width={50} height={50} className="rounded-full" />
          <span className={cn("text-2xl font-semibold text-black dark:text-white", poppins.className)}>Fenders</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-800 dark:text-neutral-50 items-center flex space-x-1 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
                poppins.className,
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Wallet Connection Section */}
        <div className="flex items-center">
          <ShimmerButton onClick={handleConnect}>
            <BorderBeam duration={8} colorFrom="#800080" size={40} colorTo="#800080" />
            Connect Wallet
          </ShimmerButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
