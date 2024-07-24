// pages/customize-links.tsx

'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface LinkData {
  platform: string;
  link: string;
}

const CustomizeLinksPage: React.FC = () => {
  const router = useRouter();
  const [links, setLinks] = useState<LinkData[]>([
    { platform: 'GitHub', link: 'https://www.github.com/benwright' },
    { platform: 'YouTube', link: 'https://www.youtube.com/benwright' },
    { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/benwright' },
  ]);

  const addLink = () => {
    setLinks([...links, { platform: '', link: '' }]);
  };

  const updateLink = (index: number, platform: string, link: string) => {
    const newLinks = [...links];
    newLinks[index] = { platform, link };
    setLinks(newLinks);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    router.push({
      pathname: '/view-links',
      query: { links: JSON.stringify(links) },
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <FaGithub />;
      case 'YouTube':
        return <FaYoutube />;
      case 'Twitter':
        return <FaTwitter />;
      case 'LinkedIn':
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      {/* Preview Section */}
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg mr-6">
        <div className="space-y-4" style={{minHeight: "80vh"}}>
            
        <div style={{position: "relative", minHeight: "75vh"}}>
            <Image alt='' src='/preview-section.png' style={{height: "60vh", position: "absolute", width: "auto" }} />
            
                {links.map((link, index) => (
                    <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white"
                    >
                    <div
                        className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                        link.platform === 'GitHub'
                            ? 'bg-black'
                            : link.platform === 'YouTube'
                            ? 'bg-red-600'
                            : link.platform === 'LinkedIn'
                            ? 'bg-blue-700'
                            : 'bg-gray-500'
                        }`}
                    >
                        <span className="flex items-center">
                        {getPlatformIcon(link.platform)}
                        <span className="ml-2">{link.platform}</span>
                        </span>
                        <span className="text-white">→</span>
                    </div>
                    </a>
                ))}

        </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-lg w-2/3 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-black font-bold text-2xl mb-4">Customize your links</h1>
        <p className="text-gray-600 mb-6">
          Add/edit/remove links below and then share all your profiles with the world!
        </p>
        <button
          onClick={addLink}
          className="w-full text-center py-2 px-4 border border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition mb-6"
        >
          + Add new link
        </button>
        {links.map((link, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold flex items-center">
                {getPlatformIcon(link.platform)}
                <span className="ml-2">Link #{index + 1}</span>
              </h2>
              <button onClick={() => removeLink(index)} className="text-red-500">
                Remove
              </button>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Platform</label>
              <select
                className="w-full border p-2 rounded mb-2"
                value={link.platform}
                onChange={(e) => updateLink(index, e.target.value, link.link)}
              >
                <option value="">Select platform</option>
                <option value="GitHub">GitHub</option>
                <option value="YouTube">YouTube</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
              <label className="block mb-1">Link</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="https://"
                value={link.link}
                onChange={(e) => updateLink(index, link.platform, e.target.value)}
                style={{ color: 'black' }}
              />
            </div>
          </div>
        ))}
        <button onClick={handleSave} className="w-full p-3 bg-purple-500 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomizeLinksPage;
