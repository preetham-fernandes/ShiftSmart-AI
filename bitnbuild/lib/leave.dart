import 'package:flutter/material.dart';

class LeaveManagementPage extends StatelessWidget {
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
        title: Text(
          'All Leaves',
          style: TextStyle(
            color: Colors.black,
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Leave balance and approved leaves
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildLeaveCard(context, 'Leave Balance', '20'),
                SizedBox(width: 10), // Horizontal spacing between the two cards
                _buildLeaveCard(context, 'Leave Approved', '2'),
              ],
            ),
            SizedBox(height: 20), // Vertical spacing between the rows
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildLeaveCard(context, 'Leave Pending', '4'),
                SizedBox(width: 10), // Horizontal spacing between the two cards
                _buildLeaveCard(context, 'Leave Cancelled', '10'),
              ],
            ),
            SizedBox(height: 20), // Vertical spacing between the rows

            // Leave cards for April 15 and May 15
            _buildLeaveDetailsCard(
              title: "Date - April 15, 2024 - April 18, 2024",
              days: "3 Days",
              leaveBalance: "16",
              approvedBy: "Martin Deo",
            ),
            SizedBox(height: 10), // Spacing between cards
            _buildLeaveDetailsCard(
              title: "Date - May 15, 2024 - May 18, 2024",
              days: "2 Days",
              leaveBalance: "19",
              approvedBy: "Martin Deo",
            ),
          ],
        ),
      ),
    );
  }

  // Helper function to build a leave card with light shade of #6925EC
  Widget _buildLeaveCard(BuildContext context, String title, String value) {
    return Expanded(
      child: Container(
        height: 100,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Color(0xFF6925EC).withOpacity(0.2), // Light shade of #6925EC
        ),
        padding: EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 5),
            Text(
              value,
              style: TextStyle(
                color: Colors.black,
                fontSize: 18,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // Helper function to build detailed leave cards
  Widget _buildLeaveDetailsCard({
    required String title,
    required String days,
    required String leaveBalance,
    required String approvedBy,
  }) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      elevation: 2,
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15),
          color: Colors.white,
          border: Border.all(
            color: Color(0xFF6925EC).withOpacity(0.2), // Border color
            width: 1,
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Color(0xFF6925EC),
              ),
            ),
            SizedBox(height: 10), // Space between title and content
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Apply Days: $days', style: TextStyle(fontSize: 16)),
                Text('Leave Balance: $leaveBalance', style: TextStyle(fontSize: 16)),
              ],
            ),
            SizedBox(height: 5), // Small space between rows
            Text('Approved By: $approvedBy', style: TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }
}
