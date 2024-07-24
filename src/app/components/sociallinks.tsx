"use client";
import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-6">
      <a 
        href="#"
        className="flex items-center px-4 py-2 bg-black text-white rounded-full w-48 justify-between"
      >
        <span>GitHub</span>
        <span>&rarr;</span>
      </a>
      <a 
        href="#"
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full w-48 justify-between"
      >
        <span>YouTube</span>
        <span>&rarr;</span>
      </a>
      <a 
        href="#"
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full w-48 justify-between"
      >
        <span>LinkedIn</span>
        <span>&rarr;</span>
      </a>
    </div>
  );
};

export default SocialLinks;
