import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const complianceData = [
  { id: 1, date: '2023-06-15', type: 'Late Night Shift', description: 'Female employee scheduled after 9 PM', status: 'Violation' },
  { id: 2, date: '2023-06-14', type: 'Overtime', description: 'Employee exceeded 40 hours this week', status: 'Warning' },
  { id: 3, date: '2023-06-13', type: 'Break Violation', description: 'Employee did not take required break', status: 'Violation' },
  { id: 4, date: '2023-06-12', type: 'Safe Transport', description: 'Safe transport arranged for late-night worker', status: 'Compliant' },
]

const LegalCompliance = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#1D1D1B]">Legal & Safety Compliance</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Compliance Overview</CardTitle>
          <CardDescription>Monitor and manage labor law compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="current" className="space-y-4">
            <TabsList>
              <TabsTrigger value="current">Current Issues</TabsTrigger>
              <TabsTrigger value="history">Compliance History</TabsTrigger>
              <TabsTrigger value="transport">Safe Transport</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceData.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell>{issue.date}</TableCell>
                      <TableCell>{issue.type}</TableCell>
                      <TableCell>{issue.description}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            issue.status === 'Violation' ? 'destructive' : 
                            issue.status === 'Warning' ? 'warning' : 
                            'success'
                          }
                        >
                          {issue.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Resolve</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="history">
              <p>Compliance history and audit logs will be displayed here.</p>
            </TabsContent>
            <TabsContent value="transport">
              <p>Safe transport arrangements for late-night workers will be managed here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Check</CardTitle>
          <CardDescription>Run a compliance check on current schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Run Compliance Check</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default LegalCompliance