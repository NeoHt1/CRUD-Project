// controllers/profileController.js
const User = require('../models/User'); // Assuming you have a User model

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    // Assuming `req.user` is set by authentication middleware
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user profile data, excluding password for security reasons
    res.json({
      name: user.name,
      studentID: user.studentID,
      // Exclude sensitive information like password
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};