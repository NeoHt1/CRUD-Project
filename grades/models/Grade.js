const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  math: { type: String, required: true },
  science: { type: String, required: true },
  english: { type: String, required: true },
  gym: { type: String, required: true },
  art: { type: String, required: true },
  studentID: { type: String, required: true }
});

module.exports = (connection) => connection.model('Grade', gradeSchema);
