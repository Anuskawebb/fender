"use client"

import { Sidebar } from "@/components/sidebar"
import { MyCompaniesTable } from "@/components/my-companies-table"

export default function MyCompaniesPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#000000]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Companies</h1>
            <p className="text-white/60">Manage your company token allocations and vesting schedules</p>
          </div>

          {/* Companies Table */}
          <MyCompaniesTable />
        </div>
      </main>
    </div>
  )
}
