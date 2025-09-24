import React, { useState } from 'react';
import Oval from '../assets/Oval.png';

interface HeaderProps {
  currentPage: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-6 sm:py-8 relative z-20">
      <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden">
            <img
              src={Oval}
              alt="Oval Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <a href="/" className="text-lg sm:text-xl font-bold hover:text-gray-300">Oval</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className={`${currentPage === 'home' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${currentPage === 'about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
          >
            About
          </a>
          <a href="https://vote-dao-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">MoveDAO v1</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Launch App Button - Always Visible */}
          <a
            href="https://move-dao-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 20px',
              border: 'none',
              background: 'var(--card-bg)',
              borderRadius: '12px',
              height: 'auto',
              minWidth: 120,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 14,
              color: 'var(--text)',
              overflow: 'hidden',
              textDecoration: 'none'
            }}
          >
            Launch App
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white block ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a
              href="/"
              className={`block py-2 text-lg ${currentPage === 'home' ? 'text-white font-medium' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className={`block py-2 text-lg ${currentPage === 'about' ? 'text-white font-medium' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://vote-dao-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-lg text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MoveDAO v1
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;