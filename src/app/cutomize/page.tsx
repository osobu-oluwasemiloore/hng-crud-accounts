'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const CustomizeLinksPage: React.FC = () => {
  const router = useRouter();

  const handleAddNewLink = () => {
    router.push('/linkform');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <p className="text-black font-bold text-lg mb-4">Customize your links</p>
        <p className="text-gray-600 mb-4">Add/edit/remove links below and then share all your profiles with the world!</p>
        <button
          onClick={handleAddNewLink}
          className="w-full text-center py-3 px-5 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          + Add new link
        </button>
        <div className="mt-10 flex justify-center">
          <Image src="/illustration.png" alt="Illustration" width={250} height={250} />
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-center">Let’s get you started</h2>
        <p className="text-gray-600 text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
      </div>
    </div>
  );
};

export default CustomizeLinksPage;
