const mongoose = require('mongoose');
const courseDB = mongoose.connection.useDb('courseDB');
const Grade = courseDB.model('Grade');

const getGrades = async (req, res) => {
  const { studentID } = req.params;
  const grades = await Grade.find({ studentID });
  res.json(grades);
};

module.exports = { getGrades };
