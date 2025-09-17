"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Coins, ArrowDownToLine, TrendingUp } from "lucide-react"

const activities = [
  {
    type: "company",
    icon: Building2,
    title: "New company added",
    description: "FutureVision joined your portfolio",
    time: "2 hours ago",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  {
    type: "vesting",
    icon: Coins,
    title: "Tokens vested",
    description: "125K MAG tokens from TechCorp Inc.",
    time: "1 day ago",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    type: "withdrawal",
    icon: ArrowDownToLine,
    title: "Funds withdrawn",
    description: "$75,000 withdrawn to wallet",
    time: "2 days ago",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/20",
  },
  {
    type: "vesting",
    icon: TrendingUp,
    title: "Vesting milestone",
    description: "50% vesting completed for INNO tokens",
    time: "3 days ago",
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/20",
  },
  {
    type: "company",
    icon: Building2,
    title: "Company updated",
    description: "StartupXYZ completed token distribution",
    time: "5 days ago",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-white/10 rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <p className="text-white/60 text-sm">Latest updates on your investments and tokens</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className={`p-2 rounded-xl ${activity.bgColor}`}>
                <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium">{activity.title}</h4>
                  <span className="text-white/60 text-sm">{activity.time}</span>
                </div>
                <p className="text-white/70 text-sm mt-1">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
