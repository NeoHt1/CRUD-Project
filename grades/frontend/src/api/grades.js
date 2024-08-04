// src/api/grades.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getGrades = (studentID) => {
  return axios.get(`${API_URL}/grades/${studentID}`);
};

export const createGrade = (gradeData) => {
  return axios.post(`${API_URL}/grades`, gradeData);
};

export const updateGrade = (studentID, gradeData) => {
  return axios.put(`${API_URL}/grades/${studentID}`, gradeData);
};

export const deleteGrade = (studentID) => {
  return axios.delete(`${API_URL}/grades/${studentID}`);
};