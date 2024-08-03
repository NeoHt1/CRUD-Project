const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connections
const studentDB = mongoose.createConnection(
  'mongodb+srv://jordant:joJooDTyfSaK0JM0@database.setz1rz.mongodb.net/School?retryWrites=true&w=majority&appName=Database'
);
const courseDB = mongoose.createConnection(
  'mongodb+srv://jordant:joJooDTyfSaK0JM0@database.setz1rz.mongodb.net/Course?retryWrites=true&w=majority&appName=Database'
);

studentDB.on('connected', () => {
  console.log('Connected to student database');
});

studentDB.on('error', (err) => {
  console.error('Error connecting to student database:', err);
});

courseDB.on('connected', () => {
  console.log('Connected to course database');
});

courseDB.on('error', (err) => {
  console.error('Error connecting to course database:', err);
});

// Pass the connections to the models
const Student = require('./models/Student')(studentDB);
const Grade = require('./models/Grade')(courseDB);

// Routes
app.use('/api/students', studentRoutes(studentDB));
app.use('/api/grades', gradeRoutes(courseDB));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
