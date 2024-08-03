// src/components/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleSigninClick = () => {
    setIsSignup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        // Post data to your backend API
        await axios.post('http://localhost:5000/api/signup', { name, studentID, password });
        navigate('/profile'); // Redirect to profile page after successful submission
      } else {
        // Handle Sign In Logic
        // Example: await axios.post('http://localhost:5000/api/signin', { studentID, password });
        navigate('/profile'); // Redirect to profile page after successful submission
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">{isSignup ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={handleSubmit}>
          {isSignup && (
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
          )}
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
            <button type="button" id="signupBtn" className={isSignup ? 'disable' : ''} onClick={handleSignupClick}>
              Sign up
            </button>
            <button type="button" id="signinBtn" className={isSignup ? '' : 'disable'} onClick={handleSigninClick}>
              Sign in
            </button>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;