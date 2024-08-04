// src/components/SigninPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/auth'; // Import the signin function from the API module
import './SignupPage.css'; // Use the same CSS file

const SigninPage = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post data to the backend API for signin
      const response = await signin({ studentID, password });
      localStorage.setItem('token', response.data.token); // Save token to local storage
      navigate('/profile'); // Redirect to profile page after successful signin
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input 
              type="text" 
              placeholder="Student ID" 
              value={studentID} 
              onChange={(e) => setStudentID(e.target.value)} 
              required 
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="btn-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;