// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import SigninPage from './components/SigninPage';
import ProfilePage from './components/ProfilePage';
import Grades from './components/GradesPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;