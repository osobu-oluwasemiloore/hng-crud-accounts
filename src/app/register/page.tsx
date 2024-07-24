"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CreateAccountPage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add account creation logic here
    // On successful account creation, navigate to customize links page
    router.push('/customize-links');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded shadow-md">
        <div className="flex justify-center mb-6">
          <Image src="/logo.jpg" alt="devlinks" className="w-16 h-16" />
        </div>
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Create account</h2>
        <p className="text-center text-gray-600">Let’s get you started sharing your links!</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required
                     className="relative block w-full px-3 py-4 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                     placeholder="e.g. alex@email.com"/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">Create password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required
                     className="relative block w-full px-3 py-4 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                     placeholder="At least 8 characters"/>
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
              <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required
                     className="relative block w-full px-3 py-4 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                     placeholder="At least 8 characters"/>
            </div>
          </div>
          <p className="text-sm text-gray-600">Password must contain at least 8 characters</p>
          <div>
            <button type="submit"
                    className="relative flex justify-center w-full px-4 py-3 text-lg font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create new account
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
