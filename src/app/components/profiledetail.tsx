"use client";
import React, { useState } from 'react';
import ProfilePictureUpload from './profilepictureupload';

const ProfileDetails: React.FC = () => {
  const [firstName, setFirstName] = useState('Ben');
  const [lastName, setLastName] = useState('Wright');
  const [email, setEmail] = useState('ben@example.com');

  return (
    <div className="flex flex-col w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <p className="text-gray-600 mb-4">Add your details to create a personal touch to your profile.</p>
      <div className="flex flex-col md:flex-row md:space-x-6 items-center mb-4">
        <ProfilePictureUpload />
        <div className="w-full md:w-2/3">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">First name*</label>
              <input 
                className="w-full px-3 py-2 border rounded-lg"
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last name*</label>
              <input 
                className="w-full px-3 py-2 border rounded-lg"
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                className="w-full px-3 py-2 border rounded-lg"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
