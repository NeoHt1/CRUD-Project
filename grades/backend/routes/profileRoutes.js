// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, getProfile);

module.exports = router;