import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

const restaurantData = [
  { id: 1, name: 'Restaurant A', staffing: 15, status: 'Open', alert: 'Understaffed' },
  { id: 2, name: 'Restaurant B', staffing: 20, status: 'Open', alert: null },
  { id: 3, name: 'Restaurant C', staffing: 18, status: 'Closed', alert: 'Overtime issue' },
  { id: 4, name: 'Restaurant D', staffing: 22, status: 'Open', alert: null },
]

export function RestaurantManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#1D1D1B]">Restaurant Management</h2>
        <Button>Add New Restaurant</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Locations</CardTitle>
          <CardDescription>Overview of all restaurant locations and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input
              placeholder="Search restaurants..."
              className="max-w-sm"
            />
            <Button variant="secondary">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Staffing Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Alerts</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {restaurantData.map((restaurant) => (
                <TableRow key={restaurant.id}>
                  <TableCell className="font-medium">{restaurant.name}</TableCell>
                  <TableCell>{restaurant.staffing}</TableCell>
                  <TableCell>
                    <Badge variant={restaurant.status === 'Open' ? 'success' : 'secondary'}>
                      {restaurant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {restaurant.alert ? (
                      <Badge variant="destructive" className="flex items-center">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        {restaurant.alert}
                      </Badge>
                    ) : (
                      <Badge variant="outline">No alerts</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}