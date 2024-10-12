import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

const laborData = [
  { location: 'Restaurant A', ratio: 0.25 },
  { location: 'Restaurant B', ratio: 0.3 },
  { location: 'Restaurant C', ratio: 0.22 },
  { location: 'Restaurant D', ratio: 0.28 },
]

const complianceData = [
  { month: 'Jan', violations: 2 },
  { month: 'Feb', violations: 1 },
  { month: 'Mar', violations: 3 },
  { month: 'Apr', violations: 0 },
  { month: 'May', violations: 2 },
  { month: 'Jun', violations: 1 },
]

export function Overview() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#1D1D1B]">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Restaurants</CardTitle>
            <Badge variant="secondary">+2</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              2 new locations added this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Labor-to-Sales Ratio</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26.25%</div>
            <p className="text-xs text-muted-foreground">
              2.5% decrease from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Compliance Violations</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">
              3 more than last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Labor-to-Sales Ratio</CardTitle>
            <CardDescription>Efficiency across locations</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={laborData}>
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ratio" fill="#F3B900" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
            <CardDescription>Labor law violations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={complianceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="violations" stroke="#E30613" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}