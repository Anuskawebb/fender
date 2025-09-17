
"use client"

import { Sidebar } from "@/components/sidebar"
import { StatsCards } from "@/components/stats-cards"
import { FundsDistributionChart } from "@/components/funds-distribution-chart"
import { AllocationMetricsChart } from "@/components/allocation-metrics-chart"
import { MyCompaniesTable } from "@/components/my-companies-table"
import { MyTokensTable } from "@/components/my-tokens-table"
import { RecentActivity } from "@/components/recent-activity"
import { Particles } from "@/components/magicui/particles"

export default function Page() {
  return (
    <div
      className="relative flex h-screen w-full bg-[#000000] overflow-hidden"
      style={{
        background: `
      linear-gradient(to bottom, #000000 0%, #000000 100%),
      url('/images/background1.jpg')
    `,
        backgroundPosition: "top center, top center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% auto, 100% auto",
        backgroundBlendMode: "normal, normal",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <Particles className="inset-0" quantity={100} ease={80} color={"#FFFFFF"} refresh />
      </div>
      <div className="relative z-10 h-screen">
        <Sidebar />
      </div>
      <main className="relative z-10 flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/60">Overview of your token allocations and company investments</p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FundsDistributionChart />
            <AllocationMetricsChart />
          </div>

          {/* Tables */}
          <MyCompaniesTable />
          <MyTokensTable />

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </main>
    </div>
  )
}

