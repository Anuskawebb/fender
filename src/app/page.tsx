"use client"

import { FloatingNav } from "@/components/ui/floating-navbar"
import HeroSection from "@/components/Hero"
import Lenis from "lenis"
import { HomeIcon as IconHome, UserIcon as IconUser, MessageCircleIcon as IconMessage } from "lucide-react"
import { useEffect } from "react"
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Features } from "@/components/BentoUI"
import FAQSection from "@/components/FAQ"
import HowItWorks from "@/components/HowItworks"
import { Particles } from "@/components/magicui/particles"



export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({})

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative bg-[#000000] min-h-screen w-full overflow-hidden">
      <div className="relative bg-[#000000] min-h-screen w-full overflow-hidden">
     
    
 
        {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 py-4 ">
        <FloatingNav navItems={navItems} className="z-50"/>
      </div>

      {/* Hero Section */}
        
      <div className="mt-28">
        
        <HeroSection />
      </div>
      {/* Main particle layer */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={60}
        color={"#FFFFFF"}
        size={0.8}
        staticity={30}
        vx={0.2}
        vy={0.1}
        refresh
      />
      
      {/* Secondary particle layer for depth */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={40}
        color={"#A553FF"}
        size={0.4}
        staticity={50}
        vx={-0.1}
        vy={0.05}
        refresh
      />
      
      {/* Tertiary particle layer for subtle movement */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#06B6D4"}
        size={0.3}
        staticity={70}
        vx={0.05}
        vy={-0.15}
        refresh
      />
      
      {/* Subtle gradient overlay for better particle visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-10"></div>
      <Features />
      <HowItWorks/>
      <FAQSection />
      {/* <SmoothCursor /> */}
      {/* Optional dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/20 pointer-events-none -z-10"></div> */}

    </div>
    </div>
  )
}
