import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productivityData = [
  { day: 'Mon', productivity: 85 },
  { day: 'Tue', productivity: 88 },
  { day: 'Wed', productivity: 90 },
  { day: 'Thu', productivity: 92 },
  { day: 'Fri', productivity: 95 },
  { day: 'Sat', productivity: 98 },
  { day: 'Sun', productivity: 93 },
]

const burnoutRiskData = [
  { employee: 'John', workload: 75, shiftPatterns: 60, risk: 67.5 },
  { employee: 'Jane', workload: 85, shiftPatterns: 70, risk: 77.5 },
  { employee: 'Mike', workload: 70, shiftPatterns: 80, risk: 75 },
  { employee: 'Sarah', workload: 80, shiftPatterns: 75, risk: 77.5 },
]

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#1D1D1B]">Reports & Analytics</h2>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>
      
      <Tabs defaultValue="productivity" className="space-y-4">
        <TabsList>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="burnout">Burnout Risk</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Data</TabsTrigger>
        </TabsList>
        <TabsContent value="productivity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Productivity</CardTitle>
              <CardDescription>Weekly productivity trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productivityData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="productivity" stroke="#F3B900" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="burnout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Burnout Risk Assessment</CardTitle>
              <CardDescription>Based on workload and shift patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={burnoutRiskData}>
                  <XAxis dataKey="employee" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="workload" stackId="a" fill="#F3B900" />
                  <Bar dataKey="shiftPatterns" stackId="a" fill="#E30613" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Data Export</CardTitle>
              <CardDescription>Generate payroll reports for integration</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Generate Payroll Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Reports