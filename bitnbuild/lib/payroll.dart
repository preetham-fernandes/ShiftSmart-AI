import 'package:flutter/material.dart';

class PayrollPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () {
            // Handle back button press
            Navigator.pop(context);
          },
        ),
        title: Text(
          'Payroll',
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Current Balance card
            Container(
              margin: EdgeInsets.symmetric(vertical: 20),
              padding: EdgeInsets.all(20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Color(0xFF8711C0),
                    Color(0xFF9C27B0),
                  ],
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Current Balance',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    '\$958,476.50',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Considering this account',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 14,
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    children: [
                      Image.asset(
                        'assets/visa_logo.png', // Replace with your VISA logo image
                        width: 30,
                        height: 30,
                      ),
                      SizedBox(width: 5),
                      Text(
                        'VISA',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),

            // Departments and employees
            SizedBox(height: 20),
            Text(
              'Departments',
              style: TextStyle(
                color: Colors.white,
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Chip(
                  label: Text('UI/UX Designer (16)'),
                  backgroundColor: Colors.grey[800],
                  labelStyle: TextStyle(color: Colors.white),
                ),
                Chip(
                  label: Text('Sales (8)'),
                  backgroundColor: Colors.grey[800],
                  labelStyle: TextStyle(color: Colors.white),
                ),
                Chip(
                  label: Text('Marketing (12)'),
                  backgroundColor: Colors.grey[800],
                  labelStyle: TextStyle(color: Colors.white),
                ),
                Chip(
                  label: Text('Develc'),
                  backgroundColor: Colors.grey[800],
                  labelStyle: TextStyle(color: Colors.white),
                ),
              ],
            ),

            SizedBox(height: 20),
            Text(
              'Employee Details',
              style: TextStyle(
                color: Colors.white,
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            EmployeeCard(
              name: 'Jenny Wilson',
              designation: 'Product Manager',
              amount: '\$8,160',
              profileImage: 'assets/profile_image.jpg', // Replace with your image
            ),
          ],
        ),
      ),
    );
  }
}

// Custom widget for employee details
class EmployeeCard extends StatelessWidget {
  final String name;
  final String designation;
  final String amount;
  final String profileImage;

  const EmployeeCard({
    required this.name,
    required this.designation,
    required this.amount,
    required this.profileImage,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.grey[800],
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 30,
            backgroundImage: AssetImage(profileImage),
          ),
          SizedBox(width: 10),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                name,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                designation,
                style: TextStyle(
                  color: Colors.grey,
                  fontSize: 14,
                ),
              ),
            ],
          ),
          Spacer(),
          Text(
            amount,
            style: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}