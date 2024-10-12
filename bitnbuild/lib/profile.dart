import 'package:flutter/material.dart';
import 'profilescreen.dart'; // Import your ProfileScreen here
import 'dashboard.dart'; // Import your Dashboard file here

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // Handle back button press
            Navigator.pop(context);
          },
        ),
        title: Text('Profile'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center, // Center alignment
          children: [
            // Profile header
            Container(
              padding: EdgeInsets.symmetric(vertical: 20),
              child: Column(
                children: [
                  CircleAvatar(
                    radius: 50,
                    backgroundImage: AssetImage('assets/girl.jpg'), // Replace with your image
                  ),
                  SizedBox(height: 16),
                  Text(
                    'Mohamed Hussien',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween, // Space between address and task completion
                    children: [
                      Text(
                        'Alexandria, Egypt',
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.grey,
                        ),
                      ),
                      Text(
                        '20 Task Completed',
                        style: TextStyle(color: Colors.blue),
                      ),
                    ],
                  ),
                ],
              ),
            ),

            // Divider
            Divider(
              thickness: 1,
              color: Colors.grey,
            ),

            // Profile menu
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ListTile(
                  leading: Icon(Icons.person, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('Profile Info'),
                  onTap: () {
                    // Navigate to ProfileScreen
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => ProfileScreen()), // Adjust this line
                    );
                  },
                ),
                ListTile(
                  leading: Icon(Icons.bar_chart, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('Statistic'),
                  onTap: () {
                    // Handle Statistic tap
                  },
                ),
                ListTile(
                  leading: Icon(Icons.language, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('Language'),
                  onTap: () {
                    // Handle Language tap
                  },
                ),
                ListTile(
                  leading: Icon(Icons.settings, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('Settings'),
                  onTap: () {
                    // Handle Settings tap
                  },
                ),
                ListTile(
                  leading: Icon(Icons.info, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('About'),
                  onTap: () {
                    // Handle About tap
                  },
                ),
                ListTile(
                  leading: Icon(Icons.logout, color: const Color(0xFF6925EC)), // Icon color set to #6925EC
                  title: Text('Logout'),
                  onTap: () {
                    // Handle Logout tap
                  },
                ),
              ],
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: const Color(0xFF6925EC), // Set to #6925EC
        unselectedItemColor: Colors.grey,
        currentIndex: 3, // Highlight the Profile item (index starts at 0)
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.message),
            label: 'Message',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.task),
            label: 'Tasks',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
        onTap: (index) {
          if (index == 0) {
            // Navigate to Dashboard if Home button is pressed
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => DashboardPage()), // Navigate to Dashboard
            );
          }
          // Add navigation for other items if needed
        },
      ),
    );
  }
}
