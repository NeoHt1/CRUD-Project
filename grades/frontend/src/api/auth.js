// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/students';

export const signup = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const signin = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};