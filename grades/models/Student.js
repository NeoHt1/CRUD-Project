module.exports = (connection) => {
  const mongoose = require('mongoose');
  const studentSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
  });
  return connection.model('Student', studentSchema);
};
module.exports = Student;