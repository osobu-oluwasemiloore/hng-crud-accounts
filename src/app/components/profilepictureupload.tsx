import Image from 'next/image';
import React, { useRef } from 'react';

const ProfilePictureUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <Image
        src="/path/to/profile-picture.jpg" // Replace with dynamic src
        alt="Profile"
        className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
      />
      <button 
        onClick={handleUploadClick}
        className="absolute inset-0 bg-black bg-opacity-50 text-white text-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
      >
        Change Image
      </button>
      <input 
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default ProfilePictureUpload;
