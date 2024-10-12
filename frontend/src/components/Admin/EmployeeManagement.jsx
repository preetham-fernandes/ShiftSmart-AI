// EmployeeManagement.jsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const employeeData = [
  { id: 1, name: 'John Doe', position: 'Waiter', performance: 85, attendance: 95, shiftFulfillment: 98 },
  { id: 2, name: 'Jane Smith', position: 'Chef', performance: 92, attendance: 98, shiftFulfillment: 100 },
  { id: 3, name: 'Mike Johnson', position: 'Bartender', performance: 88, attendance: 92, shiftFulfillment: 95 },
  { id: 4, name: 'Sarah Brown', position: 'Host', performance: 90, attendance: 97, shiftFulfillment: 99 },
]

const EmployeeManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#1D1D1B]">Employee Management</h2>
        <Button>Add New Employee</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Employee Performance</CardTitle>
          <CardDescription>Track employee metrics and manage staff</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance" className="space-y-4">
            <TabsList>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="history">Shift History</TabsTrigger>
            </TabsList>
            <TabsContent value="performance">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Shift Fulfillment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeData.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <Progress value={employee.performance} className="w-[60px]" />
                        <span className="ml-2">{employee.performance}%</span>
                      </TableCell>
                      <TableCell>
                        <Progress value={employee.attendance} className="w-[60px]" />
                        <span className="ml-2">{employee.attendance}%</span>
                      </TableCell>
                      <TableCell>
                        <Progress value={employee.shiftFulfillment} className="w-[60px]" />
                        <span className="ml-2">{employee.shiftFulfillment}%</span>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="availability">
              <p>Employee availability management will be displayed here.</p>
            </TabsContent>
            <TabsContent value="history">
              <p>Employee shift history and attendance records will be shown here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hiring Recommendations</CardTitle>
          <CardDescription>AI-generated suggestions based on predicted staff shortages</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Generate Hiring Recommendations</Button>
        </CardContent>
      </Card>
    </div>
  )
};

export default EmployeeManagement; 
