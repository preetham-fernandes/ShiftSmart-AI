import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileCheck, UserPlus, Star, DollarSign, HelpCircle } from "lucide-react"
import Login from './components/Login';
import Super_Dashboard from './components/SuperAdmin/Super_Dashboard';
import Adm_Dashboard from './components/Admin/Adm_Dashboard';
import Emp_Dashboard from './components/Employee/Emp_Dashboard';
import Register from './components/Register';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col min-h-screen bg-white">
            <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
              <Link className="flex items-center justify-center" href="#">
                <Clock className="h-6 w-6 text-yellow-500" />
                <span className="ml-2 text-2xl font-bold text-gray-900">ShiftSmart AI</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                <div className="flex items-center">
                <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 px-4" href="#">
                  Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 px-4" href="#">
                  Pricing
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 px-4" href="#">
                  About
                </Link>
                </div>
                <Link to="/login">
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">Login</Button>
                </Link>
              </nav>
            </header>
            <main className="flex-1">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-yellow-500">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                        Revolutionize Your Workforce Management
                      </h1>
                      <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl">
                        ShiftAI uses cutting-edge artificial intelligence to optimize shift scheduling, improve staffing efficiency, and ensure compliance.
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Button className="bg-gray-900 text-white hover:bg-gray-800">Start Free Trial</Button>
                      <Button variant="outline" className="bg-white text-gray-900 border-gray-900 hover:bg-gray-100">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
                    Powerful Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <Calendar className="h-12 w-12 mb-4 text-yellow-500" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Scheduling</h3>
                      <p className="text-gray-600">Our advanced algorithms create optimal schedules based on historical data, employee preferences, and business needs.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <Clock className="h-12 w-12 mb-4 text-yellow-500" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Real-Time Adjustments</h3>
                      <p className="text-gray-600">Instantly adapt to unexpected changes with our dynamic scheduling system that updates in real-time.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <FileCheck className="h-12 w-12 mb-4 text-yellow-500" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Compliance Assurance</h3>
                      <p className="text-gray-600">Stay compliant with labor laws and industry regulations. Our system automatically flags potential issues.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <UserPlus className="h-12 w-12 mb-4 text-yellow-500" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Staffing</h3>
                      <p className="text-gray-600">Receive AI-driven recommendations for hiring and resource allocation based on predictive analytics.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
                    What Our Clients Say
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
                      <Star className="h-8 w-8 mb-4 text-yellow-500" />
                      <p className="text-gray-600 mb-4">"ShiftAI has transformed our scheduling process. We've seen a 30% increase in efficiency since implementing it."</p>
                      <p className="font-bold text-gray-900">- Sarah Johnson, HR Director</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
                      <Star className="h-8 w-8 mb-4 text-yellow-500" />
                      <p className="text-gray-600 mb-4">"The compliance features alone have saved us countless hours and potential legal issues. It's a game-changer."</p>
                      <p className="font-bold text-gray-900">- Michael Chen, Operations Manager</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
                      <Star className="h-8 w-8 mb-4 text-yellow-500" />
                      <p className="text-gray-600 mb-4">"Our employees love the flexibility and fairness that ShiftAI brings to our scheduling. It's a win-win for everyone."</p>
                      <p className="font-bold text-gray-900">- Emily Rodriguez, Team Lead</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
                    Pricing Plans
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-6">$99<span className="text-xl font-normal">/month</span></p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Up to 50 employees</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Basic AI scheduling</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Email support</span>
                        </li>
                      </ul>
                      <Button className="mt-auto">Choose Plan</Button>
                    </div>
                    <div className="flex flex-col p-6 bg-yellow-500 rounded-lg shadow border border-yellow-600">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-6">$299<span className="text-xl font-normal">/month</span></p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-gray-900" />
                          <span>Up to 200 employees</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-gray-900" />
                          <span>Advanced AI features</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-gray-900" />
                          <span>24/7 priority support</span>
                        </li>
                      </ul>
                      <Button className="mt-auto bg-gray-900 text-white hover:bg-gray-800">Choose Plan</Button>
                    </div>
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-6">Custom</p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Unlimited employees</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Custom AI solutions</span>
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                          <span>Dedicated account manager</span>
                        </li>
                      </ul>
                      <Button className="mt-auto">Contact Sales</Button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">How does AI improve scheduling?</h3>
                      <p className="text-gray-600">AI analyzes historical data, employee preferences, and business needs to create optimal schedules that maximize efficiency and employee satisfaction.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Is ShiftAI compliant with labor laws?</h3>
                      <p className="text-gray-600">Yes, our system is regularly updated to ensure compliance with the latest labor laws and regulations across various industries and regions.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Can ShiftAI integrate with our existing systems?</h3>
                      <p className="text-gray-600">ShiftAI offers robust API integrations and can be customized to work seamlessly with your current HR and payroll systems.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">How secure is our data with ShiftAI?</h3>
                      <p className="text-gray-600">We prioritize data security and use industry-standard encryption and security protocols to protect your sensitive information.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                        Ready to Transform Your Workforce?
                      </h2>
                      <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl">
                        Join thousands of businesses already benefiting from ShiftAI's intelligent scheduling solution.
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Button className="bg-gray-900 text-white hover:bg-gray-800">Start Free Trial</Button>
                      <Button variant="outline" className="bg-white text-gray-900 border-gray-900 hover:bg-gray-100">
                        Schedule a Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300">
              <p className="text-xs text-gray-600">© 2024 ShiftAI. All rights reserved.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
                  
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
                  Privacy Policy
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
                  Support
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
                  Contact
                </Link>
              </nav>
            </footer>
          </div>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/employee" element={<Emp_Dashboard />} />
          <Route path="/dashboard/admin" element={<Adm_Dashboard />} />
          <Route path="/dashboard/superadmin" element={<Super_Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
