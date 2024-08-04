// src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    studentID: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/signin';
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/students/${user.studentID}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Student ID:</strong> {profile.studentID}</p>
        <p><strong>Password:</strong> {profile.password}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
