"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Coins, TrendingUp, ArrowDownToLine } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Total Companies",
      value: "12",
      icon: Building2,
      change: "+2 this month",
      changeType: "positive" as const,
    },
    {
      title: "Total Tokens Allocated",
      value: "2.4M",
      icon: Coins,
      change: "+15% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Total Vested",
      value: "$1.2M",
      icon: TrendingUp,
      change: "+8.2% this week",
      changeType: "positive" as const,
    },
    {
      title: "Total Withdrawn",
      value: "$450K",
      icon: ArrowDownToLine,
      change: "Last withdrawal 2 days ago",
      changeType: "neutral" as const,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="bg-[color:var(--card)] border-[color:var(--border)] rounded-xl hover:bg-[#141820] transition-all duration-200"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                <p
                  className={`text-sm mt-2 ${
                    stat.changeType === "positive"
                      ? "text-green-400"
                      : stat.changeType === "negative"
                        ? "text-red-400"
                        : "text-white/60"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-xl">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
