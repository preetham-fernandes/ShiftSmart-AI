import 'package:flutter/material.dart';
import 'dashboard.dart'; // Import your DashboardPage class
import 'login.dart'; // Import your LoginPage class
import 'create.dart'; // Import your CreatePage class

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // Hero image at the top
          Container(
            height: 300,
            child: Image.asset(
              'assets/bg.png',
              fit: BoxFit.cover,
            ),
          ),

          // Spacer to push the content below to the bottom
          Spacer(),

          // Title and subtitle at the bottom
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                    children: [
                      TextSpan(text: 'Streamline Your '),
                      TextSpan(
                        text: 'Workplace',
                        style: TextStyle(
                          color: Color(0xFF6925EC),
                        ),
                      ),
                      TextSpan(text: ' Experience'),
                    ],
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'Get Ready to Simplify Your HR Tasks! Team Tune Makes Managing Employee Attendance, Departments, and Payroll Effortless.',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 18,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),

          // Spacing before the buttons
          SizedBox(height: 30),

          // Call-to-action buttons with increased padding
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Color(0xFF6925EC),
                    padding: EdgeInsets.symmetric(vertical: 20),
                  ),
                  onPressed: () {
                    // Navigate to the LoginPage instead of DashboardPage
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => LoginPage()), // Change this line to LoginPage()
                    );
                  },
                  child: Text(
                    'Log In',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                SizedBox(height: 10),
                OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    side: BorderSide(color: Color(0xFF6925EC)),
                    backgroundColor: Colors.white,
                    padding: EdgeInsets.symmetric(vertical: 20),
                  ),
                  onPressed: () {
                    // Navigate to the CreatePage
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => SignUpPage()), // Change this line to CreatePage()
                    );
                  },
                  child: Text(
                    'Create Your Account',
                    style: TextStyle(
                      color: Color(0xFF6925EC),
                    ),
                  ),
                ),
              ],
            ),
          ),

          // Add this padding to move everything upwards
          SizedBox(height: 30),
        ],
      ),
    );
  }
}
