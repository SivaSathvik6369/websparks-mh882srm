import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900/50 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="md" variant="full" className="mb-4" />
            <p className="text-gray-400 text-sm">
              Future AI Autonomy Platform where systems think for themselves.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <i className="bi bi-twitter text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <i className="bi bi-linkedin text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <i className="bi bi-github text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 Trimerg Tech Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Powered by <span className="text-primary-400 font-medium">Websparks AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
