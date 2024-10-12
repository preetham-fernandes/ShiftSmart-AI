import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowDownIcon, AlertTriangle } from 'lucide-react'

const staffingData = [
  { hour: '6AM', current: 2, optimal: 3 },
  { hour: '9AM', current: 4, optimal: 4 },
  { hour: '12PM', current: 6, optimal: 7 },
  { hour: '3PM', current: 5, optimal: 5 },
  { hour: '6PM', current: 7, optimal: 8 },
  { hour: '9PM', current: 4, optimal: 5 },
]

const efficiencyData = [
  { day: 'Mon', efficiency: 85 },
  { day: 'Tue', efficiency: 88 },
  { day: 'Wed', efficiency: 90 },
  { day: 'Thu', efficiency: 92 },
  { day: 'Fri', efficiency: 95 },
  { day: 'Sat', efficiency: 98 },
  { day: 'Sun', efficiency: 93 },
]

const Overview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#1D1D1B]">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Staff</CardTitle>
            <Badge variant="secondary">15</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15/18</div>
            <p className="text-xs text-muted-foreground">
              3 staff members short
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Rate</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">
              2% increase from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Labor Law Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-[#E30613]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Female employees working after 9 PM
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Staffing Levels</CardTitle>
            <CardDescription>Current vs Optimal Staffing</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={staffingData}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" fill="#F3B900" name="Current Staff" />
                <Bar dataKey="optimal" fill="#858992" name="Optimal Staff" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Efficiency Trend</CardTitle>
            <CardDescription>Weekly efficiency rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={efficiencyData}>
                <XAxis dataKey="day" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="efficiency" stroke="#E30613" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Overview