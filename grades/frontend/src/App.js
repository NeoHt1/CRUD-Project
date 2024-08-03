import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import GradesPage from './components/GradesPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/grades" element={<GradesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;