const express = require('express');
const { getGrades } = require('../controllers/gradeController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/:studentID', authMiddleware, getGrades);

module.exports = router;