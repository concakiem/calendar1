'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Xử lý tìm kiếm ở đây
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white">
      {/* Top border - dark purple line */}
      <div className="h-1 bg-[#4B0082]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        {/* Mobile Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Section - Logo */}
          <Link href="/" className="flex items-center justify-center md:justify-start w-full md:w-auto flex-shrink-0">
            <img 
              src="/kt-design-logo.svg" 
              alt="KT Design Logo" 
              className="h-12 md:h-16 w-auto max-w-[200px] md:max-w-none"
            />
          </Link>
          
          {/* Middle Section - Search Bar */}
          <div className="flex-1 w-full md:w-auto flex items-center justify-center max-w-full md:max-w-2xl">
            <form onSubmit={handleSearch} className="flex w-full gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập từ khóa....."
                className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="w-full md:w-auto flex-shrink-0 text-center md:text-right text-gray-800">
            <div className="text-xs md:text-sm space-y-1">
              <div className="break-words">Hotline: 033 606 1457</div>
              <div className="break-words">Zalo: 033 606 1457</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}