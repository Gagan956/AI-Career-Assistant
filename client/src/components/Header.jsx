import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-[#14141e] border-b border-[#2d2d44] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🚀</span>
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Career Assistant
            </span>
          </Link>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-lg hover:bg-[#2d2d44] transition-colors text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="px-3 py-2 rounded-lg hover:bg-[#2d2d44] transition-colors text-gray-300 hover:text-white"
            >
              Chat
            </Link>
            <Link 
              to="/code-review" 
              className="px-3 py-2 rounded-lg hover:bg-[#2d2d44] transition-colors text-gray-300 hover:text-white"
            >
              Code Review
            </Link>
            <Link 
              to="/interview" 
              className="px-3 py-2 rounded-lg hover:bg-[#2d2d44] transition-colors text-gray-300 hover:text-white"
            >
              Interview
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;