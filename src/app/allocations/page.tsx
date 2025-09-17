"use client"

import { Sidebar } from "@/components/sidebar"
import { AllocationMetricsChart } from "@/components/allocation-metrics-chart"
import { FundsDistributionChart } from "@/components/funds-distribution-chart"

export default function AllocationsPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#000000]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Allocations</h1>
            <p className="text-white/60">View detailed token allocation metrics and distribution charts</p>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FundsDistributionChart />
            <AllocationMetricsChart />
          </div>
        </div>
      </main>
    </div>
  )
}
