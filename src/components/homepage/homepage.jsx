import React, { useState } from 'react';
import Navbar from '../navbar/navbar.jsx';
import Chatbot from '../chatbot/chatbot.jsx';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const Homepage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="max-w-4xl w-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Welcome to Mind Talk Therapy</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Computerized therapy for children with autism</p>
          <Link to="/game_1" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out inline-block">Get Started</Link>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-yellow-200 rounded-full w-16 h-16 flex justify-center items-center cursor-pointer" onClick={toggleChatbot}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </div>
          {showChatbot && (
            <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
              <Chatbot />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
