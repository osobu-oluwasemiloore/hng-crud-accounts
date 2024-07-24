// pages/view-links.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface LinkData {
  platform: string;
  link: string;
}

const ViewLinksPage: React.FC = () => {
  const router = useRouter();
  const [links, setLinks] = useState<LinkData[]>([]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const links = query.get('links');
    if (links) {
      setLinks(JSON.parse(links));
    }
  }, []);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-black font-bold text-2xl mb-4">Your Links</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
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
  );
};

export default ViewLinksPage;
