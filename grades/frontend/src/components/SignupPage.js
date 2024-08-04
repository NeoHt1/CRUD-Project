// src/components/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, signin } from '../api/auth';
import './SignupPage.css';

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
        await signup({ name, studentID, password });
        navigate('/signin');
      } else {
        const response = await signin({ studentID, password });
        localStorage.setItem('token', response.data.token);
        navigate('/profile');
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
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;