import React from 'react';
import { useRouter } from 'next/router';

const handleStart = (router) => {
  // Redirect to the main page or the desired route
  router.push('/home');
};

const Home = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
      <p className="text-lg mb-6">Explore amazing recipes, discover new flavors, and unleash your inner chef!</p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-blue-100" onClick={() => handleStart(router)}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
