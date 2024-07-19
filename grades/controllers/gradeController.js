const mongoose = require('mongoose');

// Use the courseDB connection
const courseDB = mongoose.createConnection(
  'mongodb+srv://jordant:joJooDTyfSaK0JM0@database.setz1rz.mongodb.net/Course?retryWrites=true&w=majority&appName=Database', 
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const Grade = require('../models/Grade')(courseDB);

const getGrades = async (req, res) => {
  const { studentID } = req.params;
  const grades = await Grade.find({ studentID });
  res.json(grades);
};

module.exports = { getGrades };
