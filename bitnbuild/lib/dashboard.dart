import 'package:flutter/material.dart';
import 'package:bitnbuild/profile.dart'; // Import your ProfilePage
import 'package:bitnbuild/payroll.dart'; // Import your PayrollPage
import 'package:bitnbuild/applyleave.dart';
import 'package:bitnbuild/leave.dart'; // Import your ApplyLeavePage

class DashboardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Top section with profile and greeting
            Container(
              padding: EdgeInsets.only(top: 40, left: 16, right: 16),
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 30,
                    backgroundImage: AssetImage('assets/girl.jpg'), // Replace with your image
                  ),
                  SizedBox(width: 16),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Wade Warren',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      Text(
                        'Human Resource Manager',
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  Spacer(),
                  IconButton(
                    icon: Icon(Icons.notifications, color: Colors.white),
                    onPressed: () {},
                  ),
                ],
              ),
            ),
            // Greeting and company motto
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Welcome! Refreshing Monday.',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  Text(
                    'Great companies are built by great people.',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey,
                    ),
                  ),
                ],
              ),
            ),
            // Today's Overview section
            Container(
              margin: EdgeInsets.symmetric(vertical: 16, horizontal: 16),
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Color(0xFF9C27B0), // Purple shade background
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Today\'s Overview',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '3 May, 2024',
                            style: TextStyle(color: Colors.white),
                          ),
                          SizedBox(height: 5),
                          Row(
                            children: [
                              Icon(Icons.access_time, color: Colors.white),
                              SizedBox(width: 5),
                              Text('08:00 AM', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: [
                              Icon(Icons.people, color: Colors.white),
                              SizedBox(width: 5),
                              Text('Total Employee: 65', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: [
                              Icon(Icons.watch_later, color: Colors.white),
                              SizedBox(width: 5),
                              Text('Total Late: 12', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '8:45 AM',
                            style: TextStyle(color: Colors.white),
                          ),
                          SizedBox(height: 5),
                          Row(
                            children: [
                              Icon(Icons.access_time, color: Colors.white),
                              SizedBox(width: 5),
                              Text('05:00 PM', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: [
                              Icon(Icons.people, color: Colors.white),
                              SizedBox(width: 5),
                              Text('Total Present: 59', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: [
                              Icon(Icons.check_circle, color: Colors.white),
                              SizedBox(width: 5),
                              Text('Total Leave: 6', style: TextStyle(color: Colors.white)),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(height: 20), // Add some space before the button
                  Center(
                    child: ElevatedButton(
                      onPressed: () {
                        // Navigate to ApplyLeavePage
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => LeaveApplicationForm()),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Color.fromARGB(255, 255, 255, 255), // Corrected button color
                        padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8), // Button shape
                        ),
                      ),
                      child: Text(
                        'Apply Leave',
                        style: TextStyle(
                          color: Colors.purple,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // What's up Today section - New Card
            Container(
              margin: EdgeInsets.symmetric(vertical: 16, horizontal: 16),
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Color(0xFF424242), // Darker background for contrast
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'What\'s up Today',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    leading: Icon(Icons.design_services, color: Colors.white),
                    title: Text('Motion Designer Interview', style: TextStyle(color: Colors.white)),
                    subtitle: Text('12:00 PM - 01:00 PM', style: TextStyle(color: Colors.grey)),
                    trailing: IconButton(
                      icon: Icon(Icons.more_vert, color: Colors.white),
                      onPressed: () {},
                    ),
                  ),
                  ListTile(
                    leading: Icon(Icons.meeting_room, color: Colors.white),
                    title: Text('CEO Meeting', style: TextStyle(color: Colors.white)),
                    subtitle: Text('03:00 PM - 04:00 PM', style: TextStyle(color: Colors.grey)),
                    trailing: IconButton(
                      icon: Icon(Icons.more_vert, color: Colors.white),
                      onPressed: () {},
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.black,
        selectedItemColor: Colors.purple,
        unselectedItemColor: Colors.grey,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.dashboard),
            label: 'Overview',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.payment),
            label: 'Payroll',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.group),
            label: 'Employees',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
        onTap: (index) {
          if (index == 1) { // Payroll icon index
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => PayrollPage()), // Redirect to PayrollPage
            );
          }else if (index == 2) { // Payroll icon index
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => LeaveManagementPage()), // Redirect to PayrollPage
            );
          } else if (index == 3) { // Profile icon index
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => ProfilePage()), // Redirect to ProfilePage
            );
          }
        },
      ),
    );
  }
}
