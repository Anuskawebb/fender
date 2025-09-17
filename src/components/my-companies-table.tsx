"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ExternalLink, Edit, MoreHorizontal } from "lucide-react"

const companies = [
  {
    name: "TechCorp Inc.",
    totalTokens: "500K MAG",
    vestingProgress: 65,
    status: "Active",
    statusColor: "bg-green-500",
  },
  {
    name: "InnovateLabs",
    totalTokens: "750K MAG",
    vestingProgress: 40,
    status: "Vesting",
    statusColor: "bg-blue-500",
  },
  {
    name: "StartupXYZ",
    totalTokens: "300K MAG",
    vestingProgress: 100,
    status: "Completed",
    statusColor: "bg-gray-500",
  },
  {
    name: "FutureVision",
    totalTokens: "1.2M MAG",
    vestingProgress: 25,
    status: "Active",
    statusColor: "bg-green-500",
  },
]

export function MyCompaniesTable() {
  return (
    <Card className="bg-[color:var(--card)] border-[color:var(--border)] rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">My Companies</CardTitle>
        <p className="text-white/60 text-sm">Companies you have token allocations with</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/60 font-medium">Company Name</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Total Tokens</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Vesting Progress</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-white/60 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{company.name}</div>
                  </td>
                  <td className="py-4 px-4 text-white/80">{company.totalTokens}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Progress value={company.vestingProgress} className="w-20 h-2" />
                      <span className="text-white/80 text-sm">{company.vestingProgress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={`${company.statusColor} text-white border-0`}>{company.status}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
