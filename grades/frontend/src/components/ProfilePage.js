// src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // Import your authentication context
import './ProfilePage.css'; // Ensure this file exists for styling

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth(); // Extract authentication status

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/signin'; // Redirect to signin if not authenticated
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProfile(response.data);
      } catch (error) {
        setError('Error fetching profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
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
