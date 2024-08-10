// src/components/GradesPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import './GradesPage.css';

const GradesPage = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      setError('You must be logged in to view grades.');
      setLoading(false);
      return;
    }

    const fetchGrades = async () => {
      try {
        const response = await axios.get(`/api/grades/${user.id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setGrades(response.data);
      } catch (error) {
        console.error('Error fetching grades:', error); // For debugging
        setError('Error fetching grades');
      } finally {
        setLoading(false);
      }
    };

    fetchGrades();
  }, [isAuthenticated, user]);

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
          {grades.length > 0 ? (
            grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
                <td>{grade.semester}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No grades available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GradesPage;