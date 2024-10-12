import 'package:flutter/material.dart';
import 'landingpage.dart'; // Import your LandingPage class

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Team Tune Landing Page',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      debugShowCheckedModeBanner: false, // This hides the DEBUG banner
      home: LandingPage(),
    );
  }
}