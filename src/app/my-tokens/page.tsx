"use client"

import { Sidebar } from "@/components/sidebar"
import { MyTokensTable } from "@/components/my-tokens-table"

export default function MyTokensPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#000000]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Tokens</h1>
            <p className="text-white/60">Track your token holdings and allocation details</p>
          </div>

          {/* Tokens Table */}
          <MyTokensTable />
        </div>
      </main>
    </div>
  )
}
