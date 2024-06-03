const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const Project = require('./models/Project');
const ProjectAssignment = require('./models/ProjectAssignment');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Clear existing collections
    await Employee.deleteMany({});
    await Project.deleteMany({});
    await ProjectAssignment.deleteMany({});

    // Adding new documents
    const employees = [
      { employee_id: 'E001', full_name: 'Isam Hamo', email: 'arinze.nwabude@fullstack.com', hashed_password: 'hashedPassword1' },
      { employee_id: 'E002', full_name: 'Emile Sone', email: 'deema.aloom@fullstack.com', hashed_password: 'hashedPassword2' },
      { employee_id: 'E003', full_name: 'Arinze Nwabude', email: 'alice.johnson@fullstack.com', hashed_password: 'hashedPassword3' },
      { employee_id: 'E004', full_name: 'Gifty Akaglah', email: 'emile.sone@fullstack.com', hashed_password: 'hashedPassword4' },
      { employee_id: 'E005', full_name: 'Deema Aloom', email: 'isam.hamo@fullstack.com', hashed_password: 'hashedPassword5' },
    ];
    const createdEmployees = await Employee.insertMany(employees);


    const projects = [
      { project_code: 'P001', project_name: 'Frontend', project_description: 'Development of visual and interactive elements that users will interact with directly.' },
      { project_code: 'P002', project_name: 'Backend', project_description: 'API Gateway that will act as a universal gateway for all clients.' },
      { project_code: 'P003', project_name: 'MongoDB Database', project_description: 'Development of Database for storing, maintaining and accessing any sort of data.' },
      { project_code: 'P004', project_name: 'JavaScript', project_description: 'Learn scripting language for dynamically updating of contents, control of multimedia, etc.' },
      { project_code: 'P005', project_name: 'Fullstack', project_description: 'Development of fully fledged platforms which do not need other applications to function.' },
    ];
    const createdProjects = await Project.insertMany(projects);


    const projectAssignments = [
      { employee_id: createdEmployees[0]._id, project_code: createdProjects[0]._id, start_date: new Date('2022-01-03') },
      { employee_id: createdEmployees[1]._id, project_code: createdProjects[1]._id, start_date: new Date('2022-03-15') },
      { employee_id: createdEmployees[2]._id, project_code: createdProjects[2]._id, start_date: new Date('2023-03-24') },
      { employee_id: createdEmployees[3]._id, project_code: createdProjects[3]._id, start_date: new Date('2024-01-17') },
      { employee_id: createdEmployees[4]._id, project_code: createdProjects[4]._id, start_date: new Date('2024-05-01') },
    ];
    await ProjectAssignment.insertMany(projectAssignments);

    console.log('Database seeded successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.disconnect();
  }
};

seedDatabase();
