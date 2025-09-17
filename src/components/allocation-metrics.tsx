"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { name: "Investors", value: 280, color: "#8B5CF6" },
  { name: "Core Team...", value: 200, color: "#C4B5FD" },
  { name: "Community...", value: 150, color: "#FBCFE8" },
  { name: "MXM Launc...", value: 50, color: "#FDE68A" },
  { name: "Community", value: 44, color: "#A7F3D0" },
  { name: "Liquidity", value: 40, color: "#BFDBFE" },
]

const legendData = [
  { name: "Investors", color: "#8B5CF6" },
  { name: "Core Team...", color: "#C4B5FD" },
  { name: "Community...", color: "#FBCFE8" },
  { name: "MXM Launchpad", color: "#FDE68A" },
  { name: "Community", color: "#A7F3D0" },
  { name: "Liquidity", color: "#BFDBFE" },
]

export function AllocationMetrics() {
  return (
    <Card className="bg-[#2C2C2C] border-[#444444] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Allocation Metrics</h3>
        <span className="text-[#A0A0A0] text-sm">Remaining</span>
      </div>

      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#A0A0A0", fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0", fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} fill={(entry) => entry.color}>
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        {legendData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[#A0A0A0]">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
