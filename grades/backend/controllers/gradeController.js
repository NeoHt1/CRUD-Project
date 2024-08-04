// controllers/gradeController.js
const getGrades = async (req, res, courseDB) => {
  const Grade = courseDB.model('Grade');
  const { studentID } = req.params;
  const grades = await Grade.find({ studentID });
  res.json(grades);
};

const createGrade = async (req, res, courseDB) => {
  const Grade = courseDB.model('Grade');
  const grade = new Grade(req.body);
  await grade.save();
  res.status(201).json(grade);
};

const updateGrade = async (req, res, courseDB) => {
  const Grade = courseDB.model('Grade');
  const { studentID } = req.params;
  const updateData = req.body;
  const grade = await Grade.findOneAndUpdate({ studentID }, updateData, { new: true });
  res.json(grade);
};

const deleteGrade = async (req, res, courseDB) => {
  const Grade = courseDB.model('Grade');
  const { studentID } = req.params;
  await Grade.findOneAndDelete({ studentID });
  res.status(204).send();
};

module.exports = { getGrades, createGrade, updateGrade, deleteGrade };
