"use client"

import { Home, Building2, Coins, PieChart, Activity, HelpCircle, ChevronDown, Plus, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard", active: false },
  { name: "My Companies", icon: Building2, href: "/my-companies", active: false },
  { name: "My Tokens", icon: Coins, href: "/my-tokens", active: false },
  { name: "Allocations", icon: PieChart, href: "/allocations", active: false },
  { name: "Recent Activity", icon: Activity, href: "/recent-activity", active: false },
]

export function Sidebar() {
  return (
    <div className="w-80 h-screen bg-[#000000] border-r border-[color:var(--sidebar-border)] flex flex-col backdrop-blur-xl">
      {/* User Profile Section */}
      <div className="p-6 border-b border-[color:var(--sidebar-border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold bg-[color:var(--sidebar-primary)]">
            B
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[color:var(--sidebar-foreground)] font-medium">Bruno</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </div>
            <p className="text-white/60 text-sm">bruno@magna.so</p>
          </div>
        </div>
      </div>

      {/* Project Selector */}
      <div className="p-6 border-b border-[color:var(--sidebar-border)]">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-white/60" />
          <span className="text-[color:var(--sidebar-foreground)] font-semibold">Magna</span>
          <ChevronDown className="w-4 h-4 text-white/60" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 relative group ${
                  item.active
                    ? "text-white bg-[color:var(--secondary)] shadow-lg border border-[color:var(--sidebar-border)]"
                    : "text-slate-300 hover:bg-[color:var(--secondary)]/60 hover:text-white hover:border hover:border-[color:var(--sidebar-border)]"
                }`}
              >
                {item.active && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--sidebar-primary)] rounded-r" />
                )}
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-6 border-t border-white/10 space-y-4 mt-auto">
        <Button className="w-full bg-slate-800/60 hover:bg-slate-700/70 text-white border border-slate-700/50 backdrop-blur-sm rounded-xl transition-all duration-200 font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Create Project
        </Button>

        <div className="space-y-2">
          <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm">Help Center</span>
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
            Terms and Conditions
          </a>
          <p className="text-white/60 text-sm">
            powered by <span className="font-semibold">ⓜ magna</span>
          </p>
        </div>
      </div>
    </div>
  )
}
