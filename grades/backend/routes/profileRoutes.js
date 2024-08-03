const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');
const authenticate = require('../middleware/authenticate');
const studentDB = require('../db/studentDB'); // Import your studentDB connection

router.get('/', authenticate, (req, res) => getProfile(req, res, studentDB));

module.exports = router;