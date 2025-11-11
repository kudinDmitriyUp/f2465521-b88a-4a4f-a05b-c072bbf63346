import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">🗺️</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">DEEP</h1>
            <h2 className="text-sm font-medium text-gray-600 -mt-1">STATE</h2>
          </div>
        </div>
      </div>
      
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Пошук..."
            className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="w-6 h-4 bg-ukraine-blue relative overflow-hidden rounded-sm">
          <div className="w-full h-1/2 bg-ukraine-blue"></div>
          <div className="w-full h-1/2 bg-ukraine-yellow"></div>
        </div>
        <span className="text-sm text-gray-600">UA</span>
      </div>
    </header>
  );
};

export default Header;