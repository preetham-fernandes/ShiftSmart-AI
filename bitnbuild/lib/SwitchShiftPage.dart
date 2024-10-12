import 'package:flutter/material.dart';

class ShiftSwapPage extends StatelessWidget {
  // Dummy data for available employees
  final List<Map<String, String>> availableEmployees = [
    {
      'name': 'John Doe',
      'position': 'Waiter',
      'availability': 'Available for shift swap',
      'image': 'assets/employee1.jpg' // Ensure this path is correct
    },
    {
      'name': 'Jane Smith',
      'position': 'Chef',
      'availability': 'Available for shift swap',
      'image': 'assets/employee2.jpg' // Ensure this path is correct
    },
    // Add more dummy data as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Shift Swap'),
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: ListView.builder(
        padding: EdgeInsets.all(20),
        itemCount: availableEmployees.length,
        itemBuilder: (context, index) {
          final employee = availableEmployees[index];
          return ListTile(
            leading: CircleAvatar(
              backgroundImage: AssetImage(employee['image']!), // Use employee image
            ),
            title: Text(employee['name']!),
            subtitle: Text(employee['position']!),
            trailing: ElevatedButton(
              onPressed: () {
                // Handle shift swap request here
              },
              child: Text('Request Swap'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF6925EC), // Set button color
              ),
            ),
          );
        },
      ),
    );
  }
}