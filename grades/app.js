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
const studentDB = mongoose.createConnection(process.env.MONGODB_URI_STUDENT, { useNewUrlParser: true, useUnifiedTopology: true });
const courseDB = mongoose.createConnection(process.env.MONGODB_URI_COURSE, { useNewUrlParser: true, useUnifiedTopology: true });

studentDB.on('connected', () => {
  console.log('Connected to student database');
});

courseDB.on('connected', () => {
  console.log('Connected to course database');
});

// Pass the connections to the models
require('./models/Student')(studentDB);
require('./models/Grade')(courseDB);

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/grades', gradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
