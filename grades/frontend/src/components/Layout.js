import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Create this CSS file for layout-specific styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="logo.jpeg" alt="Logo" className="logo-image" /> {/* Adjust path and class */}
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/signup">Sign Up/Sign In</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/grades">Grades</Link></li> {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;