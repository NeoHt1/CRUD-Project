// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="welcome-container">
        <h1>Welcome to Our Application</h1>
        <p>Your gateway to accessing grades as a student.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
        <br></br>
        <Link to="/signin" className="cta-button">Sign In</Link>
      </div>
    </div>
  );
};

export default HomePage;