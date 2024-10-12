import { useState } from 'react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Clock } from "lucide-react";
import { db } from '../firebase/Firebase'; // Firebase Firestore config
import { collection, query, where, getDocs } from 'firebase/firestore'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      let collectionName = '';

      // Determine the correct collection based on the selected role
      if (role === 'employee') {
        collectionName = 'employee';
      } else if (role === 'admin') {
        collectionName = 'admin';
      } else if (role === 'superadmin') {
        collectionName = 'superadmin';
      }

      // Query the Firestore collection to check if the user exists and verify credentials
      const userQuery = query(
        collection(db, collectionName), 
        where('email', '==', email), 
        where('password', '==', password)  // This is only for demonstration; passwords should be hashed in production!
      );
      
      const querySnapshot = await getDocs(userQuery);
      
      if (!querySnapshot.empty) {
        console.log('Login successful!');

        // Redirect based on user role
        if (role === 'employee') {
          navigate('/dashboard/employee');
        } else if (role === 'admin') {
          navigate('/dashboard/admin');
        } else if (role === 'superadmin') {
          navigate('/dashboard/superadmin');
        }
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F3F3] bg-opacity-80 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-blend-overlay">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[#1D1D1B] text-[#F3B900]">
        <Link className="flex items-center justify-center" to="#">
          <Clock className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">ShiftAI</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white shadow-lg backdrop-blur-sm bg-opacity-90">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-[#1D1D1B]">Welcome Back</CardTitle>
            <CardDescription className="text-center text-[#858992]">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1D1D1B]">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#1D1D1B]">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-[#1D1D1B]">Role</Label>
                  <Select onValueChange={setRole} required>
                    <SelectTrigger className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">Employee</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="superadmin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <Button type="submit" className="w-full mt-6 bg-[#F3B900] text-[#1D1D1B] hover:bg-[#E30613] hover:text-white transition-colors">
                Log In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to="/forgot-password" className="text-sm text-[#E30613] hover:underline">
              Forgot password?
            </Link>
            <Link to="/register" className="text-sm text-[#E30613] hover:underline">
              Register new account
            </Link>
          </CardFooter>
        </Card>
      </main>
      <footer className="py-6 text-center text-sm text-[#F3B900] bg-[#1D1D1B]">
        © 2024 ShiftAI. All rights reserved.
      </footer>
    </div>
  );
}
