"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Investors", value: 28.4058, color: "#8B5CF6" },
  { name: "Core Team Member", value: 20, color: "#C4B5FD" },
  { name: "Community Rewards", value: 15, color: "#FBCFE8" },
  { name: "MXM Launchpad", value: 5, color: "#FDE68A" },
  { name: "Community", value: 4.4011, color: "#A7F3D0" },
  { name: "Liquidity", value: 4, color: "#BFDBFE" },
  { name: "Unallocated", value: 20.5153, color: "#FFC0CB" },
]

export function OwnershipChart() {
  return (
    <Card className="bg-[#2C2C2C] border-[#444444] p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Ownership</h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Legend */}
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[#E0E0E0] text-sm">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
