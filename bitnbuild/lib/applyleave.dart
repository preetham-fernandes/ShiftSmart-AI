import 'package:flutter/material.dart';

class LeaveApplicationForm extends StatefulWidget {
  const LeaveApplicationForm({super.key});

  @override
  _LeaveApplicationFormState createState() => _LeaveApplicationFormState();
}

class _LeaveApplicationFormState extends State<LeaveApplicationForm> {
  final _formKey = GlobalKey<FormState>();
  final _titleController = TextEditingController();
  final _leaveTypeController = TextEditingController();
  final _contactNumberController = TextEditingController();
  final _startDateController = TextEditingController();
  final _endDateController = TextEditingController();
  final _reasonController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Apply Leave'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextFormField(
                controller: _titleController,
                decoration: const InputDecoration(
                  labelText: 'Title',
                  hintText: 'Enter the title of your leave',
                ),
                validator: (value) => value!.isEmpty ? 'Please enter a title' : null,
              ),
              TextFormField(
                controller: _leaveTypeController,
                decoration: const InputDecoration(
                  labelText: 'Leave Type',
                  hintText: 'Enter the type of leave (e.g., Sick Leave, Vacation)',
                ),
                validator: (value) => value!.isEmpty ? 'Please enter the leave type' : null,
              ),
              TextFormField(
                controller: _contactNumberController,
                decoration: const InputDecoration(
                  labelText: 'Contact Number',
                  hintText: 'Enter your contact number',
                ),
                validator: (value) => value!.isEmpty ? 'Please enter your contact number' : null,
              ),
              Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      controller: _startDateController,
                      decoration: const InputDecoration(
                        labelText: 'Start Date',
                        hintText: 'Select the start date',
                      ),
                      onTap: () async {
                        final DateTime? pickedDate = await showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime.now(),
                          lastDate: DateTime.now().add(const Duration(days: 365)),
                        );
                        if (pickedDate != null) {
                          setState(() {
                            _startDateController.text = pickedDate.toString();
                          });
                        }
                      },
                      validator: (value) => value!.isEmpty ? 'Please select the start date' : null,
                    ),
                  ),
                  const SizedBox(width: 16.0),
                  Expanded(
                    child: TextFormField(
                      controller: _endDateController,
                      decoration: const InputDecoration(
                        labelText: 'End Date',
                        hintText: 'Select the end date',
                      ),
                      onTap: () async {
                        final DateTime? pickedDate = await showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime.now(),
                          lastDate: DateTime.now().add(const Duration(days: 365)),
                        );
                        if (pickedDate != null) {
                          setState(() {
                            _endDateController.text = pickedDate.toString();
                          });
                        }
                      },
                      validator: (value) => value!.isEmpty ? 'Please select the end date' : null,
                    ),
                  ),
                ],
              ),
              TextFormField(
                controller: _reasonController,
                decoration: const InputDecoration(
                  labelText: 'Reason for Leave',
                  hintText: 'Enter the reason for your leave',
                ),
                maxLines: 3,
                validator: (value) => value!.isEmpty ? 'Please enter the reason for your leave' : null,
              ),
              const SizedBox(height: 30), // Increased space between the last text field and the button
              Center(
                child: ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      // Handle form submission here (e.g., send data to server)
                      print('Leave application submitted!');
                    }
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF3B900), // Changed color to #F3B900
                    foregroundColor: Colors.white, // Set text color to white
                  ),
                  child: const Text('Apply Leave'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
