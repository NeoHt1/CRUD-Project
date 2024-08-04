// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
});

module.exports = (connection) => connection.model('Student', studentSchema);
