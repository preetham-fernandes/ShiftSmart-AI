import 'package:flutter/material.dart';
import 'landingpage.dart'; // Import your LandingPage class
import 'dashboard.dart'; // Import your DashboardPage class

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white, // Set background color to white
        elevation: 0, // Remove shadow
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black), // Add the arrow icon
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => LandingPage()), // Navigate to LandingPage
            );
          },
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Image of a person using a tablet
              Image.asset(
                'assets/login.png', // Replace with your image path
                height: 250,
              ),

              // Text fields for email and password
              TextField(
                decoration: InputDecoration(
                  labelText: 'E-mail',
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 10),
              TextField(
                decoration: InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(),
                ),
                obscureText: true, // Add this for password field security
              ),

              // Checkbox for "Remember me"
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Checkbox(
                    value: false, // Set initial value to false
                    onChanged: (value) {
                      // Implement checkbox logic here
                    },
                  ),
                  Text('Remember me'),
                  Spacer(), // This will push the text and checkbox towards each other
                  TextButton(
                    onPressed: () {
                      // Implement forgot password logic here
                    },
                    style: TextButton.styleFrom(
                      foregroundColor: Colors.black, // Match the color of "Remember me" text
                    ),
                    child: Text('Forgot Password?'),
                  ),
                ],
              ),

              // Login button wrapped in a container to set the width
              Container(
                width: (MediaQuery.of(context).size.width - 30) / 4, // Set button width to 1/4th the width of the email input box
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Color(0xFFF3B900),
                    padding: EdgeInsets.symmetric(vertical: 20),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20), // Decrease the border radius here
                    ),
                  ),
                  onPressed: () {
                    // Navigate to the DashboardPage
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => DashboardPage()),
                    );
                  },
                  child: Text(
                    'Login',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),

              // Add a SizedBox to shift the button down by 4 pixels
              SizedBox(height: 4),

              // Social media login buttons
              Text('OR'),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton.icon(
                    onPressed: () {
                      // Implement Google sign-in logic here
                    },
                    icon: Image.asset('assets/google.png', height: 20),
                    label: Text('Sign-In With Google'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: Color(0xFFF3B900), // Use foregroundColor instead of primary
                    ),
                  ),
                  SizedBox(width: 10),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
