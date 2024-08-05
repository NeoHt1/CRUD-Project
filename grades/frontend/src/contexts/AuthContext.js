// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        setIsAuthenticated(true);
        setUser(response.data);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
    }
  }, []);

  const login = async (credentials) => {
    const response = await axios.post('/api/signin', credentials);
    localStorage.setItem('token', response.data.token);
    setIsAuthenticated(true);
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);