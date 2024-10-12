import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';  
import { Clock, User, Users, UserCog } from "lucide-react";
import { db } from '../firebase/Firebase'; // Import your Firebase config
import { collection, addDoc, Timestamp, updateDoc, doc } from 'firebase/firestore'; 

export default function Register() {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    restaurantName: '',
    location: '',
    shiftPreference: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const createdAt = Timestamp.now();
      let docRef;

      if (userType === 'employee') {
        // Add employee document and get Firestore-generated ID
        docRef = await addDoc(collection(db, 'employee'), {
          name: formData.name,
          email: formData.email,
          password: formData.password, // Store the password securely!
          role: formData.role,
          location: formData.location,
          shift_preference: formData.shiftPreference,
          gender: formData.gender,
          availability: true,
          last_shift: null,
          hours_worked: 0,
          created_at: createdAt,
          status: 'Active'
        });

      } else if (userType === 'admin') {
        // Add admin document and get Firestore-generated ID
        docRef = await addDoc(collection(db, 'admin'), {
          name: formData.restaurantName,
          email: formData.email,
          password: formData.password, // Store the password securely!
          created_at: createdAt,
          location:formData.location,c
        });

      } else if (userType === 'superadmin') {
        // Add superadmin document and get Firestore-generated ID
        docRef = await addDoc(collection(db, 'superadmin'), {
          email: formData.email,
          password: formData.password, // Store the password securely!
          created_at: createdAt
        });
      }

      // Update the document to include Firestore-generated ID
      await updateDoc(doc(db, userType, docRef.id), {
        id: docRef.id
      });

      console.log(`${userType} registered with ID:`, docRef.id);

      // Clear the form data after successful registration
      setFormData({
        name: '',
        email: '',
        password: '',
        role: '',
        restaurantName: '',
        location: '',
        shiftPreference: '',
        gender: ''
      });
      setUserType(''); // Reset user type
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F3F3] bg-opacity-80 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-blend-overlay">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[#1D1D1B] text-[#F3B900]">
        <Link className="flex items-center justify-center" to="#">
          <Clock className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">ShiftSmart AI</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-white shadow-lg backdrop-blur-sm bg-opacity-90">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-[#1D1D1B]">Join ShiftSmart AI</CardTitle>
            <CardDescription className="text-center text-[#858992]">Choose your role to get started</CardDescription>
          </CardHeader>
          <CardContent>
            {!userType ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { type: 'employee', icon: User, title: 'Employee', description: 'Join as a team member' },
                  { type: 'admin', icon: UserCog, title: 'Admin', description: 'Manage your restaurant' },
                  { type: 'superadmin', icon: Users, title: 'Super Admin', description: 'Oversee multiple locations' },
                ].map((role) => (
                  <Card 
                    key={role.type} 
                    className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                    onClick={() => setUserType(role.type)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <role.icon className="h-12 w-12 mb-4 text-[#F3B900]" />
                      <h3 className="text-xl font-bold mb-2 text-[#1D1D1B]">{role.title}</h3>
                      <p className="text-center text-[#858992]">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                {userType === 'employee' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#1D1D1B]">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-[#1D1D1B]">Role</Label>
                      <Select onValueChange={(value) => handleSelectChange('role', value)}>
                        <SelectTrigger className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="server">Server</SelectItem>
                          <SelectItem value="chef">Chef</SelectItem>
                          <SelectItem value="cleaner">Cleaner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shiftPreference" className="text-[#1D1D1B]">Shift Preference</Label>
                      <Select onValueChange={(value) => handleSelectChange('shiftPreference', value)}>
                        <SelectTrigger className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]">
                          <SelectValue placeholder="Select shift preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning</SelectItem>
                          <SelectItem value="afternoon">Afternoon</SelectItem>
                          <SelectItem value="night">Night</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-[#1D1D1B]">Gender</Label>
                      <Select onValueChange={(value) => handleSelectChange('gender', value)}>
                        <SelectTrigger className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {(userType === 'employee' || userType === 'admin') && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="restaurantName" className="text-[#1D1D1B]">Restaurant Name</Label>
                      <Input id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={handleInputChange} required className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-[#1D1D1B]">Location</Label>
                      <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]" />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1D1D1B]">Email</Label>
                  <Input id="email" name="email" value={formData.email} onChange={handleInputChange} required type="email" className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#1D1D1B]">Password</Label>
                  <Input id="password" name="password" value={formData.password} onChange={handleInputChange} required type="password" className="border-[#858992] focus:border-[#F3B900] focus:ring-[#F3B900]" />
                </div>

                <Button type="submit" className="w-full text-lg bg-[#F3B900] hover:bg-yellow-500">Register</Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-[#1D1D1B]">
              Already have an account? <Link to="/login" className="font-semibold text-[#F3B900] hover:text-yellow-500">Login here</Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
