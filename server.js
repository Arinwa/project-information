const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import models
const Employee = require('./models/Employee');
const Project = require('./models/Project');
const ProjectAssignment = require('./models/ProjectAssignment');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Error connecting to the database:', error));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Endpoint to add a new employee
app.post('/api/employees', async (req, res) => {
  try {
    const { employee_id, full_name, email, hashed_password } = req.body;
    const newEmployee = new Employee({ employee_id, full_name, email, hashed_password });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to add a new project
app.post('/api/projects', async (req, res) => {
  try {
    const { project_code, project_name, project_description } = req.body;
    const newProject = new Project({ project_code, project_name, project_description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to add a new project assignment
app.post('/api/project_assignments', async (req, res) => {
  try {
    const { employee_id, project_code, start_date } = req.body;
    const newAssignment = new ProjectAssignment({ employee_id, project_code, start_date });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to get the latest 5 project assignments
app.get('/api/latest_project_assignments', async (req, res) => {
  try {
    const assignments = await ProjectAssignment.find()
      .sort({ start_date: -1 })
      .limit(5)
      .populate('employee_id', 'full_name')
      .populate('project_code', 'project_name');

    console.log(assignments); // Add this line to log the assignments in the backend console

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
