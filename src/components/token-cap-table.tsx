"use client"

import { ChevronDown, ExternalLink, Edit, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { OwnershipChart } from "@/components/ownership-chart"
import { AllocationMetrics } from "@/components/allocation-metrics"
import { TokenUnlockTimeline } from "@/components/token-unlock-timeline"

export function TokenCapTable() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-white">Token Cap Table</h1>
          <div className="flex items-center gap-2 text-[#E0E0E0]">
            <span>MAG</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#A855F7] transition-colors">
            <span>View in Explorer</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Button className="bg-[#333333] hover:bg-[#444444] text-white border-0">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      {/* Token Status Card */}
      <Card className="bg-[#2C2C2C] border-[#444444] p-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#E0E0E0]">Token Status:</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                <span className="text-[#10B981] font-semibold">Minted</span>
              </div>
            </div>
            <div className="text-[#A0A0A0]">Mint Date: 02/09/2024 02:17 PM UTC &lt;&gt;</div>
          </div>
          <div className="space-y-2 text-right">
            <div className="text-[#E0E0E0]">
              <span className="text-[#A0A0A0]">Total Supply:</span> 100,000,000 MAG
            </div>
            <div className="text-[#E0E0E0]">
              <span className="text-[#A0A0A0]">Allocated:</span> 82,532,800 MAG
            </div>
            <div className="text-[#E0E0E0]">
              <span className="text-[#A0A0A0]">Valuation (USD Per Token):</span> $76.66
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[#A0A0A0]">Live Price:</span>
              <span className="text-[#10B981] font-bold">$76.66</span>
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] font-bold">2.40%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Ownership & Allocation Metrics */}
      <div className="grid grid-cols-2 gap-6">
        <OwnershipChart />
        <AllocationMetrics />
      </div>

      {/* Token Unlock Timeline */}
      <TokenUnlockTimeline />
    </div>
  )
}
