import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
      <span className="text-gray-400 font-medium">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;