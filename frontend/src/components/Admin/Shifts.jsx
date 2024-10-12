import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock data for demonstration
const employees = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
  { id: 4, name: "Sarah Brown" },
];

const initialShifts = [
  { id: 1, employeeId: 1, date: "2023-06-15", startTime: "09:00", endTime: "17:00", status: "Confirmed" },
  { id: 2, employeeId: 2, date: "2023-06-15", startTime: "12:00", endTime: "20:00", status: "Pending" },
  { id: 3, employeeId: 3, date: "2023-06-15", startTime: "18:00", endTime: "02:00", status: "Confirmed" },
  { id: 4, employeeId: 4, date: "2023-06-15", startTime: "11:00", endTime: "19:00", status: "Confirmed" },
];

const Shifts = () => {
  const [selectedDate, setSelectedDate] = useState("2023-06-15");
  const [shifts, setShifts] = useState(initialShifts);

  // Filter shifts based on selected date
  const filteredShifts = shifts.filter(shift => shift.date === selectedDate);

  return (
    <div className="space-y-6 bg-[#F3F3F3] p-6">
      <h2 className="text-3xl font-bold text-[#1D1D1B]">Shift Scheduling</h2>

      <Card className="bg-[#FFFFFF]">
        <CardHeader>
          <CardTitle className="text-[#1D1D1B]">Schedule Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Label htmlFor="date-select" className="text-[#1D1D1B]">Select Date:</Label>
            <Input
              id="date-select"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-auto border-[#858992]"
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableCell className="text-left text-[#1D1D1B]">Employee</TableCell>
                <TableCell className="text-left text-[#1D1D1B]">Start Time</TableCell>
                <TableCell className="text-left text-[#1D1D1B]">End Time</TableCell>
                <TableCell className="text-left text-[#1D1D1B]">Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredShifts.map(shift => {
                const employee = employees.find(emp => emp.id === shift.employeeId);
                return (
                  <TableRow key={shift.id} className="hover:bg-gray-100">
                    <TableCell>{employee?.name}</TableCell>
                    <TableCell>{shift.startTime}</TableCell>
                    <TableCell>{shift.endTime}</TableCell>
                    <TableCell>{shift.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <div className="text-[#1D1D1B] font-bold">
          Total Shifts: {shifts.length}, Confirmed Shifts: {shifts.filter(shift => shift.status === "Confirmed").length}, Pending Shifts: {shifts.filter(shift => shift.status === "Pending").length}
        </div>
      </div>
    </div>
  );
}

export default Shifts;
