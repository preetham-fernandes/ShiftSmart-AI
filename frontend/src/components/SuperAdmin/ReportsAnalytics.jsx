import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const performanceData = [
  { week: 'Week 1', sales: 15000, labor: 4500 },
  { week: 'Week 2', sales: 18000, labor: 5000 },
  { week: 'Week 3', sales: 16500, labor: 4800 },
  { week: 'Week 4', sales: 19000, labor: 5200 },
]

const satisfactionData = [
  { location: 'Restaurant A', satisfaction: 4.2 },
  { location: 'Restaurant B', satisfaction: 3.8 },
  { location: 'Restaurant C', satisfaction: 4.5 },
  { location: 'Restaurant D', satisfaction: 4.0 },
]

const complianceData = [
  { id: 1, date: '2023-06-01', location: 'Restaurant A', type: 'Overtime', description: 'Employee worked 2 hours overtime' },
  { id: 2, date: '2023-06-02', location: 'Restaurant B', type: 'Late Night Shift', description: 'Shift ended after 11 PM' },
  { id: 3, date: '2023-06-03', location: 'Restaurant C', type: 'Overtime', description: 'Employee worked 1.5 hours overtime' },
  { id: 4, date: '2023-06-04', location: 'Restaurant D', type: 'Break Violation', description: 'Employee missed required break' },
]

export function ReportsAnalytics() {
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
      
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Sales vs Labor Cost</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#F3B900" name="Sales" />
                  <Bar dataKey="labor" fill="#858992" name="Labor Cost" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="satisfaction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Satisfaction</CardTitle>
              <CardDescription>Across locations</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={satisfactionData}>
                  <XAxis dataKey="location" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="satisfaction" stroke="#E30613" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Logs</CardTitle>
              <CardDescription>Overview of overtime and late-night shifts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceData.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.location}</TableCell>
                      <TableCell>{log.type}</TableCell>
                      <TableCell>{log.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}