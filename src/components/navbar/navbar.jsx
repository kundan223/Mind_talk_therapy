import React from "react";

const Navbar = ({ setLoginUser }) => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-800">
          <p className="text-lg font-semibold">My Website</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue">Home</a>
          <a href="#" className="text-blue">About</a>
          <a href="#" className="text-blue">Contact</a>
          {/* You can add more navigation links as needed */}
        </div>
        <div>
        <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
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
