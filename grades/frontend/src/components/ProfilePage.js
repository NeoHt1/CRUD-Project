// src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css'; // Ensure this file exists for styling

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    studentID: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile'); // Adjust to your backend URL
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

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