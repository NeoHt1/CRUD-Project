// src/components/Navbar.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile">My Profile</Link>
          <button onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}>Sign Out</button>
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;