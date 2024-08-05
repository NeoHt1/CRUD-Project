// src/components/Navbar.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="./logo.png" alt="Logo" className="logo-image" /> {/* Adjust path and class */}
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/grades">My Grades</Link></li>
            <li><button onClick={logout}>Sign Out</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;