"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tokens = [
  {
    tokenName: "MAG Token",
    allocationPercent: "15.5%",
    vestedAmount: "775K MAG",
    cliff: "12 months",
    startDate: "Jan 15, 2024",
    endDate: "Jan 15, 2028",
  },
  {
    tokenName: "TECH Token",
    allocationPercent: "8.2%",
    vestedAmount: "410K TECH",
    cliff: "6 months",
    startDate: "Mar 1, 2024",
    endDate: "Mar 1, 2027",
  },
  {
    tokenName: "INNO Token",
    allocationPercent: "12.0%",
    vestedAmount: "600K INNO",
    cliff: "18 months",
    startDate: "Feb 10, 2024",
    endDate: "Feb 10, 2029",
  },
  {
    tokenName: "START Token",
    allocationPercent: "5.8%",
    vestedAmount: "290K START",
    cliff: "9 months",
    startDate: "Apr 5, 2024",
    endDate: "Apr 5, 2026",
  },
]

export function MyTokensTable() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-white/10 rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">My Tokens</CardTitle>
        <p className="text-white/60 text-sm">Your token allocations and vesting schedules</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/60 font-medium">Token Name</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Allocation %</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Vested Amount</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Cliff</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Start Date</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">End Date</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{token.tokenName}</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {token.allocationPercent}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-white/80 font-medium">{token.vestedAmount}</td>
                  <td className="py-4 px-4 text-white/80">{token.cliff}</td>
                  <td className="py-4 px-4 text-white/80">{token.startDate}</td>
                  <td className="py-4 px-4 text-white/80">{token.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
