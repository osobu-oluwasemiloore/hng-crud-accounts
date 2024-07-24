'use client';

import { useState } from 'react';
import SocialMediaLinks from '../components/socialmedialinks';
import Image from 'next/image';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-6xl p-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <SocialMediaLinks />
        </div>
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Profile Details</h2>
          <p className="mb-8 text-lg text-gray-600">Add your details to create a personal touch to your profile.</p>
          
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">Profile picture</label>
            <div className="flex items-center">
              <span className="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                {profilePicture ? (
                  <Image src={URL.createObjectURL(profilePicture)} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 0H0v24h24z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4 2h2v-4h-2v4zm-6-4v4h2v-4H8z" />
                  </svg>
                )}
              </span>
              <label htmlFor="file-upload" className="ml-6 bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                <span>Upload Image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
            <p className="mt-2 text-sm text-gray-500">Image must be below 1024x1024px. Use PNG or JPG format.</p>
          </div>

          <div className="mb-6">
            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="e.g. John"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="e.g. Appleseed"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. email@example.com"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
