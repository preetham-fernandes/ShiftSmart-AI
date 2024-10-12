import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Home, Users, Calendar, ShieldAlert, BarChart, Bell, Settings } from 'lucide-react';
import EmployeeManagement from './EmployeeManagement';
import LegalCompliance from './LegalCompliance';
import Shifts from './Shifts';
import Reports from './Reports';
import Overview from './Overview';

export default function Adm_Dashboard() {
  const [activePage, setActivePage] = useState('overview'); // State to track active page

  return (
    <div className="flex h-screen bg-[#F3F3F3]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1D1D1B] text-white p-4 flex flex-col">
        <div className="flex items-center mb-6">
          {/* <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <h1 className="text-2xl font-bold text-[#F3B900]">Restaurant Admin</h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activePage === 'overview' ? 'bg-[#F3B900] text-[#1D1D1B]' : 'hover:bg-[#F3B900] hover:text-[#1D1D1B]'}`} 
                onClick={() => setActivePage('overview')}
              >
                <Home className="mr-2 h-4 w-4" />
                Overview
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activePage === 'scheduling' ? 'bg-[#F3B900] text-[#1D1D1B]' : 'hover:bg-[#F3B900] hover:text-[#1D1D1B]'}`} 
                onClick={() => setActivePage('scheduling')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Shift Scheduling
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activePage === 'employees' ? 'bg-[#F3B900] text-[#1D1D1B]' : 'hover:bg-[#F3B900] hover:text-[#1D1D1B]'}`} 
                onClick={() => setActivePage('employees')}
              >
                <Users className="mr-2 h-4 w-4" />
                Employee Management
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activePage === 'compliance' ? 'bg-[#F3B900] text-[#1D1D1B]' : 'hover:bg-[#F3B900] hover:text-[#1D1D1B]'}`} 
                onClick={() => setActivePage('compliance')}
              >
                <ShieldAlert className="mr-2 h-4 w-4" />
                Legal & Safety
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activePage === 'reports' ? 'bg-[#F3B900] text-[#1D1D1B]' : 'hover:bg-[#F3B900] hover:text-[#1D1D1B]'}`} 
                onClick={() => setActivePage('reports')}
              >
                <BarChart className="mr-2 h-4 w-4" />
                Reports & Analytics
              </Button>
            </li>
          </ul>
        </nav>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start p-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <span className="ml-2">Jane Smith</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#1D1D1B]">Restaurant Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div className="p-4">
          {activePage === 'overview' && <Overview />}
          {activePage === 'scheduling' && <Shifts />}
          {activePage === 'employees' && <EmployeeManagement />}
          {activePage === 'compliance' && <LegalCompliance />}
          {activePage === 'reports' && <Reports />}
        </div>
      </div>
    </div>
  );
}
