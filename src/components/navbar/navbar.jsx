import React from "react";

const Navbar = ({ setLoginUser }) => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text--800">
          <p className="text-lg ont-bold text-gray-800d">MindTalk</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
          {/* You can add more navigation links as needed */}
        </div>
        <div>
        <button
        className="bg-yellow-600 text-white py-2 px-4 rounded-md cursor-pointer"
        onClick={() => setLoginUser({})}
      >
        Logout
      </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
