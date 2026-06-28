import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, link, bgColor }) => {
  return (
    <Link to={link} className="block group">
      <div className={`bg-[#1a1a2e] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-[#2d2d44] hover:border-blue-500/50 ${bgColor} text-center flex flex-col items-center`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-center">{description}</p>
        <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
          Try Now →
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;