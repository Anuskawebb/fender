"use client";

import {
  ChevronRight,
  Clock,
  Code,
  Leaf,
  Database,
  FileText,
  Shield,
  Zap,
  Users,
  BarChart3,
  Lock,
  TrendingUp,
  Globe,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
// import { AuroraText } from "@/components/magicui/aurora-text"
import Link from "next/link";
import AnimatedListDemo from "@/components/Notification";
import { Bento1 } from "./bento1";
// import { Notification } from "@/components/Notification"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function BentoGrid() {
  // Animation variants
  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={cn("relative text-white px-4 md:px-6 z-10 py-20", poppins.className)}>
      <div className="w-full max-w-[95vw] lg:max-w-[1800px] mx-auto relative">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px] ">
          <motion.h1
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-thin text-center mb-32 col-span-12 ",
              poppins.className,
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-5xl text-white/80 leading-tight">Why Choose Fenders?</span>
            <br />
            <span className="text-xl md:text-2xl font-light text-white/70 ">
              Token vesting and streaming platform—Built on Algorand.
            </span>
          </motion.h1>

          {/* Security First - Top Left (Large) */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#df500f]/20 rounded-xl flex items-center justify-center border border-white/10 mr-4">
                    <Shield className="w-6 h-6 text-[#df500f]" />
                  </div>
                  <h2 className="text-2xl font-thin leading-tight text-white">Security First</h2>
                </div>
                <p className="text-white/90 text-sm font-light mb-4">
                  Bank-grade security with Algorand's proven blockchain technology
                </p>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-signature wallet support</li>
                  <li>• Encrypted data storage</li>
                  <li>• Smart contract audits</li>
                  <li>• Zero-knowledge proofs</li>
                </ul>
              </div>
            </motion.div>
          </Link>

          {/* Ultra-Low Fees - Top Center */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#df500f]/20 rounded-xl flex items-center justify-center border border-white/10 mr-4">
                    <Zap className="w-6 h-6 text-[#df500f]" />
                  </div>
                  <h3 className="text-xl font-thin text-white">Ultra-Low Fees</h3>
                </div>
                <p className="text-white/90 text-sm font-light mb-4">Affordable for everyone, always</p>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• $0.001 transaction fees</li>
                  <li>• No hidden costs</li>
                  <li>• Volume discounts</li>
                  <li>• Enterprise pricing</li>
                </ul>
              </div>
            </motion.div>
          </Link>

          {/* Why Algorand - Top Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-2 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={2}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#df500f]/20 rounded-xl flex items-center justify-center border border-white/10 mr-3">
                    <Globe className="w-5 h-5 text-[#df500f]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-thin text-white">Why Algorand</h3>
                    <p className="text-white/90 text-sm font-light">Security, speed, and future-proofing</p>
                  </div>
                </div>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• 4.5s finality</li>
                  <li>• Carbon negative</li>
                  <li>• Quantum-resistant</li>
                </ul>
              </div>
            </motion.div>
          </Link>

          {/* Data Transparency - Middle Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-1 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-thin text-white">Transparent & Trustless</h3>
                  <p className="text-lg font-thin text-white/90">No middlemen, no secrets</p>
                </div>
                <div className="w-10 h-10 bg-[#df500f]/20 rounded-xl flex items-center justify-center border border-white/10">
                  <Database className="w-5 h-5 text-[#df500f]" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Will Creation - Bottom Left */}
          <Link href="/" className="col-span-12 md:col-span-3 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={4}
            >
              <Bento1 />
            </motion.div>
          </Link>

          {/* Eco-Friendly Features - Bottom Center */}
          <Link href="/" className="col-span-12 md:col-span-5 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={5}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-thin mb-2 text-white">Vesting, Verified by the People</h3>
                  <p className="text-white/90 text-sm font-light">
                    DAO-approved schedules, real-time analytics, and alerts.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Smart Contract Features - Bottom Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={6}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Smart Contract Cards */}
                <div className="mb-4 flex-1 flex flex-col justify-start">{/* <AnimatedListDemo /> */}</div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
