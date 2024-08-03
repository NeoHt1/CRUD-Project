// src/components/Grades.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GradesPage.css';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your actual backend API endpoint
    axios.get('/api/grades')
      .then(response => {
        setGrades(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching grades');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grades-container">
      <h1>My Grades</h1>
      <table className="grades-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;