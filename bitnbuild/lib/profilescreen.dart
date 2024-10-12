import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key}); // Ensure the constructor is const

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center, // Center align all elements
            children: [
              // Profile Image
              CircleAvatar(
                radius: 50.0,
                backgroundImage: AssetImage('assets/girl.jpg'), // Replace with your image path
              ),
              const SizedBox(height: 16.0),

              // Contact Information
              const Text(
                'CONTACT',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Icon(Icons.phone),
                    const SizedBox(width: 8.0),
                    Text('9876-432-100'),
                  ],
                ),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Icon(Icons.email),
                    const SizedBox(width: 8.0),
                    Text('Bala123@gmail.com'),
                  ],
                ),
              ),

              // Add spacing after Contact Information
              const SizedBox(height: 24.0), // Add spacing between sections
              
              // Basic Information
              const Text(
                'BASIC INFORMATION',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Text('First Name: '),
                    Text('Bala'),
                  ],
                ),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Text('Second Name: '),
                    Text('Rupesh'),
                  ],
                ),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Text('Birth Date: '),
                    Text('02-12-2002'),
                  ],
                ),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Text('Gender: '),
                    Text('Male'),
                  ],
                ),
              ),

              // Add spacing after Basic Information
              const SizedBox(height: 24.0), // Add spacing between sections

              // Additional Information
              const Text(
                'ADDITIONAL INFORMATION',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Icon(Icons.location_on),
                    const SizedBox(width: 8.0),
                    Text('26, Kambar Street, Mahalingapuram, Pollachi'),
                  ],
                ),
              ),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center, // Center align row
                  children: [
                    const Text('Emergency No: '),
                    Text('872150001, 872150002'),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      // Removed bottomNavigationBar
    );
  }
}
