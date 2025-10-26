import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo size="md" variant="full" className="animate-fade-in" />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
