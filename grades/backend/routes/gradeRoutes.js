const express = require('express');
const { getGrades, createGrade, updateGrade, deleteGrade } = require('../controllers/gradeController');
const authMiddleware = require('../middleware/authMiddleware');

module.exports = (courseDB) => {
  const router = express.Router();

  router.get('/:studentID', authMiddleware, (req, res) => getGrades(req, res, courseDB));
  router.post('/', authMiddleware, (req, res) => createGrade(req, res, courseDB));
  router.put('/:studentID', authMiddleware, (req, res) => updateGrade(req, res, courseDB));
  router.delete('/:studentID', authMiddleware, (req, res) => deleteGrade(req, res, courseDB));

  return router;
};
