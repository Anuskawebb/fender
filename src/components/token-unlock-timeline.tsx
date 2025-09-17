"use client"

import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { date: "1 Jul '24", investors: 20, coreTeam: 15, community: 10, mxm: 5, liquidity: 3, communityRewards: 8 },
  { date: "1 Jan '25", investors: 35, coreTeam: 25, community: 18, mxm: 8, liquidity: 6, communityRewards: 12 },
  { date: "1 Jul '25", investors: 50, coreTeam: 35, community: 25, mxm: 12, liquidity: 10, communityRewards: 18 },
  { date: "1 Jan '26", investors: 65, coreTeam: 45, community: 32, mxm: 15, liquidity: 15, communityRewards: 25 },
  { date: "1 Jan '27", investors: 75, coreTeam: 55, community: 40, mxm: 18, liquidity: 20, communityRewards: 32 },
  { date: "1 Jan '28", investors: 85, coreTeam: 65, community: 48, mxm: 22, liquidity: 25, communityRewards: 40 },
  { date: "1 Jan '29", investors: 95, coreTeam: 75, community: 55, mxm: 25, liquidity: 30, communityRewards: 48 },
]

export function TokenUnlockTimeline() {
  return (
    <Card className="bg-[#2C2C2C] border-[#444444] p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Token Unlock Timeline</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#A0A0A0", fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0", fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
            />
            <Area type="monotone" dataKey="investors" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.8} />
            <Area type="monotone" dataKey="coreTeam" stackId="1" stroke="#C4B5FD" fill="#C4B5FD" fillOpacity={0.8} />
            <Area
              type="monotone"
              dataKey="communityRewards"
              stackId="1"
              stroke="#FBCFE8"
              fill="#FBCFE8"
              fillOpacity={0.8}
            />
            <Area type="monotone" dataKey="mxm" stackId="1" stroke="#FDE68A" fill="#FDE68A" fillOpacity={0.8} />
            <Area type="monotone" dataKey="community" stackId="1" stroke="#A7F3D0" fill="#A7F3D0" fillOpacity={0.8} />
            <Area type="monotone" dataKey="liquidity" stackId="1" stroke="#BFDBFE" fill="#BFDBFE" fillOpacity={0.8} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
