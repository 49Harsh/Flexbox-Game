

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Link from react-router-dom


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Game!</h1>
        <Link to="/levelone">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            Start Game
          </button>
        </Link>
      </div>
      <footer className="bg-gray-800 text-center py-4 text-white">
        © 2024 Flex-Box Game
      </footer>

      
    </div>
  );
};

export default Home;

