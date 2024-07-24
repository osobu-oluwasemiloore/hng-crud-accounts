import React from 'react';
import ProfileDetails from '../components/profiledetail';
import SocialLinks from '../components/sociallinks';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center py-10 bg-gray-100 space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <ProfileDetails />
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfilePage;
