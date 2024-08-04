// routes/studentRoutes.js
const express = require('express');
const { registerStudent, loginStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');

module.exports = (studentDB) => {
  const router = express.Router();

  router.post('/register', (req, res) => registerStudent(req, res, studentDB));
  router.post('/login', (req, res) => loginStudent(req, res, studentDB));
  router.get('/', (req, res) => getStudents(req, res, studentDB));
  router.put('/:studentID', (req, res) => updateStudent(req, res, studentDB));
  router.delete('/:studentID', (req, res) => deleteStudent(req, res, studentDB));

  return router;
};
