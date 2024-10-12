import 'package:flutter/material.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white, // Background color
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
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Sign up now',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Please fill the details and create account',
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey,
              ),
            ),
            SizedBox(height: 20),
            TextField(
              decoration: InputDecoration(
                labelText: 'Name',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 10),
            TextField(
              decoration: InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 10),
            TextField(
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
            ),
            SizedBox(height: 10),
            Row(
              children: [
                Checkbox(
                  value: false,
                  onChanged: (value) {
                    // Implement checkbox logic here
                  },
                ),
                Text('At least 8 characters'),
              ],
            ),
            Row(
              children: [
                Checkbox(
                  value: false,
                  onChanged: (value) {
                    // Implement checkbox logic here
                  },
                ),
                Text('Both uppercase and lowercase characters'),
              ],
            ),
            Row(
              children: [
                Checkbox(
                  value: false,
                  onChanged: (value) {
                    // Implement checkbox logic here
                  },
                ),
                Text('At least one number or symbol'),
              ],
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Implement sign-up logic here
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFFF3B900), // Changed color to #F3B900
                padding: EdgeInsets.symmetric(vertical: 15, horizontal: 30), // Added horizontal padding
              ),
              child: Text(
                'Sign Up',
                style: TextStyle(color: Colors.white),
              ),
            ),
            SizedBox(height: 10),
            Text('Already have an account?'),
            TextButton(
              onPressed: () {
                // Implement sign-in logic here
              },
              style: TextButton.styleFrom(
                foregroundColor: Colors.black, // Changed color to black
              ),
              child: Text('Sign in'),
            ),
            SizedBox(height: 20),
            SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}

// Helper widget for social media buttons
class SocialMediaButton extends StatelessWidget {
  final IconData icon;
  final String label;

  const SocialMediaButton({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () {},
      icon: Icon(icon),
      label: Text(label),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: Colors.blue, // Use foregroundColor instead of primary
        minimumSize: Size(120, 40),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(30),
        ),
      ),
    );
  }
}
