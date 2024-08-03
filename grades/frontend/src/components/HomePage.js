// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file
import logo from './logo.png'; // Path to your logo image

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="welcome-container">
        <h1>Welcome to Our Application</h1>
        <p>Your gateway to managing everything effortlessly.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Team Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default HomePage;