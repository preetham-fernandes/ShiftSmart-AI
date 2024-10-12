import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Users, Zap } from "lucide-react"

const Shifts = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      
      <main className="container mx-auto p-4">
        <Tabs defaultValue="location1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#F3F3F3]">
            <TabsTrigger value="location1" className="data-[state=active]:bg-[#F3B900] data-[state=active]:text-[#1D1D1B]">Location 1</TabsTrigger>
            <TabsTrigger value="location2" className="data-[state=active]:bg-[#F3B900] data-[state=active]:text-[#1D1D1B]">Location 2</TabsTrigger>
            <TabsTrigger value="location3" className="data-[state=active]:bg-[#F3B900] data-[state=active]:text-[#1D1D1B]">Location 3</TabsTrigger>
          </TabsList>
          {["location1", "location2", "location3"].map((location) => (
            <TabsContent key={location} value={location}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1D1D1B]">Schedule for {location}</CardTitle>
                  <CardDescription>View and adjust schedules, approve changes, and optimize shifts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <Button className="w-full bg-[#F3B900] text-[#1D1D1B] hover:bg-[#E30613] hover:text-white">
                        <Calendar className="mr-2 h-4 w-4" /> View Full Schedule
                      </Button>
                      <Button className="w-full bg-[#F3B900] text-[#1D1D1B] hover:bg-[#E30613] hover:text-white">
                        <Calendar className="mr-2 h-4 w-4" /> Adjust Schedule
                      </Button>
                      <Button className="w-full bg-[#F3B900] text-[#1D1D1B] hover:bg-[#E30613] hover:text-white">
                        <Bell className="mr-2 h-4 w-4" /> Approve Changes
                      </Button>
                      <Button className="w-full bg-[#E30613] text-white hover:bg-[#F3B900] hover:text-[#1D1D1B]">
                        <Zap className="mr-2 h-4 w-4" /> AI Optimize Schedule
                      </Button>
                      <Button className="w-full bg-[#858992] text-white hover:bg-[#F3B900] hover:text-[#1D1D1B]">
                        <Users className="mr-2 h-4 w-4" /> Bulk Create Shifts
                      </Button>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-[#1D1D1B]">Today's Overview</CardTitle>
                        <CardDescription>Quick view of today's shifts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {["Morning", "Afternoon", "Evening"].map((shift) => (
                            <div key={shift} className="flex items-center justify-between p-2 bg-white rounded-md">
                              <span className="font-medium text-[#1D1D1B]">{shift} Shift</span>
                              <div className="space-x-2">
                                <Badge className="bg-[#F3B900] text-[#1D1D1B]">5 Staff</Badge>
                                <Badge className="bg-[#858992]">2 Open</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-[#1D1D1B]">AI-based Schedule Optimization</CardTitle>
            <CardDescription>Optimize schedules based on past sales and footfall data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-[#1D1D1B]">Our AI system analyzes historical data to suggest optimal staffing levels:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#1D1D1B]">
              <li>Considers past sales trends</li>
              <li>Accounts for seasonal variations</li>
              <li>Adjusts for special events and holidays</li>
              <li>Balances staff skills and availability</li>
            </ul>
            <Button className="mt-4 bg-[#E30613] text-white hover:bg-[#F3B900] hover:text-[#1D1D1B]">
              <Zap className="mr-2 h-4 w-4" /> Run AI Optimization
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Shifts
