import React from 'react';

const SocialMediaLinks = () => {
  return (
    <div className="space-y-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-black text-white rounded-md">
        <span>GitHub</span>
        <span>→</span>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-red-600 text-white rounded-md">
        <span>YouTube</span>
        <span>→</span>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-md">
        <span>LinkedIn</span>
        <span>→</span>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
