import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleSigninClick = () => {
    setIsSignup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    navigate('/profile'); // Redirect to profile page after successful submission
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="form-box">
        <h1 id="title">{isSignup ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={handleSubmit}>
          <div className={`input-group ${isSignup ? 'show' : 'hide'}`}>
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" required />
            </div>
          </div>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          {isSignup && <p>Forgot Password <a href="#">Click Here!</a></p>}
          <div className="btn-field">
            <button type="button" id="signupBtn" className={isSignup ? 'disable' : ''} onClick={handleSignupClick}>
              Sign up
            </button>
            <button type="button" id="signinBtn" className={isSignup ? '' : 'disable'} onClick={handleSigninClick}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;