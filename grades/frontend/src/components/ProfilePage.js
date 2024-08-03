// src/components/ProfilePic.js
import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({ imageUrl, name }) => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ProfilePic;
