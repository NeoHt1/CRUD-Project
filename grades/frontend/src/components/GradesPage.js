// src/components/GradesPage.js
import React, { useEffect, useState } from 'react';
import { getGrades } from '../api/grades';
import { useAuth } from '../contexts/AuthContext';
import './GradesPage.css';

const Grades = () => {
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
        const response = await getGrades(user.studentID);
        setGrades(response.data);
      } catch (error) {
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
            <th>Math</th>
            <th>Science</th>
            <th>English</th>
            <th>Gym</th>
            <th>Art</th>
          </tr>
        </thead>
        <tbody>
          {grades.length > 0 ? (
            grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.math}</td>
                <td>{grade.science}</td>
                <td>{grade.english}</td>
                <td>{grade.gym}</td>
                <td>{grade.art}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No grades available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;