const getProfile = async (req, res, studentDB) => {
    const Student = studentDB.model('Student');
    const { studentID } = req.user;
  
    try {
      const student = await Student.findOne({ studentID }).select('-password');
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.json(student);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  module.exports = {
    getProfile
  };  