const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerStudent = async (req, res, studentDB) => {
  const Student = studentDB.model('Student');
  const { studentID, password, name } = req.body;

  try {
    const existingStudent = await Student.findOne({ studentID });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this ID already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ studentID, name, password: hashedPassword });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginStudent = async (req, res, studentDB) => {
  const Student = studentDB.model('Student');
  const { studentID, password } = req.body;
  try {
    const student = await Student.findOne({ studentID });
    if (student && (await bcrypt.compare(password, student.password))) {
      const token = jwt.sign({ id: student._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getStudents = async (req, res, studentDB) => {
  const Student = studentDB.model('Student');
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateStudent = async (req, res, studentDB) => {
  const Student = studentDB.model('Student');
  const { studentID } = req.params;
  const updateData = req.body;
  try {
    const student = await Student.findOneAndUpdate({ studentID }, updateData, { new: true });
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteStudent = async (req, res, studentDB) => {
  const Student = studentDB.model('Student');
  const { studentID } = req.params;
  try {
    await Student.findOneAndDelete({ studentID });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerStudent, loginStudent, getStudents, updateStudent, deleteStudent };
