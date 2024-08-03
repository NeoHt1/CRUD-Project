import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const signup = (userData) => {
  return axios.post(`${API_URL}/students/register`, userData);
};

export const signin = (userData) => {
  return axios.post(`${API_URL}/students/login`, userData);
};