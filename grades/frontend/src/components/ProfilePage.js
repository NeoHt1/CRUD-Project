// src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // Update import
import './ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate(); // Update usage

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin'); // Redirect if not authenticated
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
  }, [isAuthenticated, navigate]); // Include navigate in dependencies

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Student ID:</strong> {profile.studentID}</p>
        {/* Exclude password from being displayed for security reasons */}
      </div>
    </div>
  );
};

export default ProfilePage;