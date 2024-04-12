import React from 'react';
import Navbar from '../navbar/navbar.jsx';

const Homepage = () => {
  return (
    
    <div>
      <Navbar/>
      <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Welcome to Mind Talk Thearapy </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Computerized thearapy for children with autism</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out inline-block">Get Started</a>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
