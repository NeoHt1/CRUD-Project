// src/components/SigninPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/auth';
import './SignupPage.css'; // Reuse CSS for consistency

const SigninPage = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ studentID, password });
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;