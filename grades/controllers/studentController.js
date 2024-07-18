const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const studentDB = mongoose.connection.useDb('studentDB');
const Student = studentDB.model('Student');

const registerStudent = async (req, res) => {
  const { studentID, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const student = new Student({ studentID, name, password: hashedPassword });
  await student.save();
  res.status(201).json(student);
};

const loginStudent = async (req, res) => {
  const { studentID, password } = req.body;
  const student = await Student.findOne({ studentID });
  if (student && (await bcrypt.compare(password, student.password))) {
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { registerStudent, loginStudent };
