"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Github, Twitter, Linkedin } from "lucide-react"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Logos } from "./LogoCloud"
// import { AnimatedShinyTextDemo } from "./ShinyText"
import { FlipWords } from "./ui/flip-words";
import { Safari } from "./ui/safari"
import { DashboardCard } from "./ui/dashboardcard"
import { Card } from "@/components/ui/card"
import { Clock, Heart } from "lucide-react"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export default function HeroSection() {
  //@ts-ignore
  const [count, setCount] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  //@ts-ignore
  const y2 = useTransform(scrollY, [0, 300], [0, -30])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 2400) {
            return prev + 50
          }
          clearInterval(interval)
          return 2400
        })
      }, 30)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  const words = ["Investors", "Protocols","Founders"];

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-6 text-center relative",
        poppins.className,
      )}
      style={{ y: y1, opacity }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Waitlist Counter */}
     
      {/* <AnimatedShinyTextDemo /> */}
      {/* Main Heading without typewriter effect */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-7xl font-thin text-white mb-4 max-w-7xl leading-tight mt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        
        Digital Asset Management
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl text-white italic mb-8 max-w-4xl font-extralight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Built for <FlipWords className="text-purple-500" words={words} /> <br />
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-white/70 text-lg md:text-1xl mb-12 max-w-4xl leading-relaxed font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        Manage your token cap table, automate on-or-off chain vesting, account for tax deductions, execute airdrops, distribute conditional grants, utilize dynamic custody solutions and onboard in under a day.
      </motion.p>
      
      {/* Email Signup Form */}
      <motion.div
        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="bg-black/50 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 flex-1 h-12 rounded-full px-6 font-light"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 h-12 rounded-full whitespace-nowrap transition-all duration-200 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#df500f] to-[#ff6b35] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <span className="relative z-10">Join The Waitlist</span>
          </Button>
        </motion.div>
      </motion.div>
      <div className="mt-2 ">
      <Safari
        url="magicui.design"
        className="size-half bg-black"
        imageSrc="/images/dashboard.png"
      />
      
      
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="flex items-center space-x-8 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <Logos />
      </motion.div>
      
    </motion.div>
  )
}


// <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
//           {/* Left Card - The Decal Felix */}
//           <Card className="bg-card border-border p-6 rounded-2xl w-full max-w-sm card-glow">
//             <div className="relative mb-4">
//               <img
//                 src="/futuristic-blue-bunny-creature-with-cyberpunk-elem.jpg"
//                 alt="The Decal Felix"
//                 className="w-full h-64 object-cover rounded-xl"
//               />
//               <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2">
//                 <Heart className="w-4 h-4 text-muted-foreground" />
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold text-card-foreground mb-2">The Decal Felix</h3>
//             <p className="text-muted-foreground text-sm mb-4">Ian Fang</p>
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <p className="text-xs text-muted-foreground">Current Bid</p>
//                 <p className="text-lg font-bold text-card-foreground">5.00 ETH</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xs text-muted-foreground">Ends in</p>
//                 <div className="flex items-center space-x-1 text-sm">
//                   <Clock className="w-3 h-3" />
//                   <span>12h 43m 42s</span>
//                 </div>
//               </div>
//             </div>
//             <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
//               Place Bid
//             </Button>
//           </Card>

//           {/* Center Card - Emperor's Guard */}
//           <Card className="bg-card border-border p-6 rounded-2xl w-full max-w-sm card-glow transform lg:scale-110 z-10">
//             <div className="relative mb-4">
//               <img
//                 src="/purple-cosmic-bunny-creature-with-mystical-element.jpg"
//                 alt="Emperor's Guard"
//                 className="w-full h-64 object-cover rounded-xl"
//               />
//               <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2">
//                 <Heart className="w-4 h-4 text-muted-foreground" />
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold text-card-foreground mb-2">Emperor's Guard</h3>
//             <p className="text-muted-foreground text-sm mb-4">@nebula_art</p>
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <p className="text-xs text-muted-foreground">Current Bid</p>
//                 <p className="text-lg font-bold text-card-foreground">8.50 ETH</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xs text-muted-foreground">Ends in</p>
//                 <div className="flex items-center space-x-1 text-sm">
//                   <Clock className="w-3 h-3" />
//                   <span>8h 12m 18s</span>
//                 </div>
//               </div>
//             </div>
//             <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
//               Place Bid
//             </Button>
//           </Card>

//           {/* Right Card - Snow Bunny */}
//           <Card className="bg-card border-border p-6 rounded-2xl w-full max-w-sm card-glow">
//             <div className="relative mb-4">
//               <img src="/orange-warm-toned-bunny-creature-with-fire-element.jpg" alt="Snow Bunny" className="w-full h-64 object-cover rounded-xl" />
//               <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2">
//                 <Heart className="w-4 h-4 text-muted-foreground" />
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold text-card-foreground mb-2">Snow Bunny</h3>
//             <p className="text-muted-foreground text-sm mb-4">@winter_dreams</p>
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <p className="text-xs text-muted-foreground">Current Bid</p>
//                 <p className="text-lg font-bold text-card-foreground">3.25 ETH</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xs text-muted-foreground">Ends in</p>
//                 <div className="flex items-center space-x-1 text-sm">
//                   <Clock className="w-3 h-3" />
//                   <span>15h 28m 55s</span>
//                 </div>
//               </div>
//             </div>
//             <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
//               Place Bid
//             </Button>
//           </Card>
//         </div>
