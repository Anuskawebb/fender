"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  {
    group: "Investors",
    allocated: 28404580,
    remaining: 71595420,
  },
  {
    group: "Core Team Member",
    allocated: 20000000,
    remaining: 80000000,
  },
  {
    group: "Community Rewards",
    allocated: 15000000,
    remaining: 85000000,
  },
  {
    group: "MXM Launchpad",
    allocated: 5000000,
    remaining: 95000000,
  },
  {
    group: "Community",
    allocated: 4440110,
    remaining: 95559890,
  },
  {
    group: "Liquidity",
    allocated: 4000000,
    remaining: 96000000,
  },
]

export function AllocationMetricsChart() {
  return (
    <Card className="bg-[color:var(--card)] border-[color:var(--border)] rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Allocation Metrics</CardTitle>
        <p className="text-white/60 text-sm">Allocated vs remaining tokens by group</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis
                dataKey="group"
                tick={{ fill: "white", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
              />
              <YAxis tick={{ fill: "white", fontSize: 12 }} axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
              <Legend wrapperStyle={{ color: "#e6e6e6" }} />
              <Bar dataKey="allocated" fill="#A553FF" name="Allocated" radius={[4, 4, 0, 0]} />
              <Bar dataKey="remaining" fill="#9CA3AF" name="Remaining" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
