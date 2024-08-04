// src/components/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth'; // Import the signup function from the API module
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post data to the backend API for signup
      await signup({ name, studentID, password });
      navigate('/signin'); // Redirect to signin page after successful signup
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group show">
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
          </div>
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

export default SignupPage;