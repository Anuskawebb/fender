"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Investors", value: 28.40458, color: "#A553FF" },
  { name: "Core Team Member", value: 20, color: "#525252" },
  { name: "Community Rewards", value: 15, color: "#10B981" },
  { name: "MXM Launchpad", value: 5, color: "#06B6D4" },
  { name: "Community", value: 4.44011, color: "#F59E0B" },
  { name: "Liquidity", value: 4, color: "#EAB308" },
  { name: "Unallocated", value: 20.5153, color: "#9CA3AF" },
]

export function FundsDistributionChart() {
  return (
    <Card className="bg-[color:var(--card)] border-[color:var(--border)] rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Ownership</CardTitle>
        <p className="text-white/60 text-sm">Token allocation across different groups</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
              <Legend wrapperStyle={{ color: "#e6e6e6" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
