const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const profileRoutes = require('./routes/profileRoutes');
const gradesRoutes = require('./routes/gradesRoutes');
const app = express();

app.use(express.json());
app.use('/api/students', studentRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/grades', gradesRoutes);

mongoose.connect('mongodb://localhost:27017/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));