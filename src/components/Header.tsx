import React from 'react';
import faviconImage from '../assets/favicon-DF3inq3Z.png';

interface HeaderProps {
  currentPage: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="px-4 sm:px-6 py-6 sm:py-8 lg:px-8 relative z-20">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden">
            <img 
              src={faviconImage} 
              alt="Move DAO Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <a href="/" className="text-lg sm:text-xl font-bold hover:text-gray-300 transition-colors">Move DAO</a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href="/" 
            className={`transition-colors ${currentPage === 'home' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </a>
          <a 
            href="/about" 
            className={`transition-colors ${currentPage === 'about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
          >
            About
          </a>
          <a href="https://vote-dao-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">MoveDAO v1</a>
        </div>
        
        <a 
          href="https://move-dao-app.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-0.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm lg:text-base whitespace-nowrap"
          style={{
            background: 'linear-gradient(45deg, #ffc30d, #b80af7)',
          }}
        >
          <div className="bg-gray-900 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-lg text-white">
            Launch App
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;