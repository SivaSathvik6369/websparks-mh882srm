import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Future AI Autonomy Platform",
    "Where Systems Think For Themselves",
    "Revolutionizing Technology"
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
              <i className="bi bi-lightning-charge mr-2"></i>
              Coming Soon
            </div>
          </div>
          
          {/* Large Logo Display */}
          <div className="mb-8">
            <Logo size="lg" variant="full" className="justify-center" />
          </div>
          
          <div className="h-16 mb-8">
            <p 
              key={currentText}
              className="text-xl sm:text-2xl text-gray-300 font-light transition-all duration-500 animate-fade-in"
            >
              {texts[currentText]}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105">
              <i className="bi bi-bell mr-2"></i>
              Notify Me
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-400 transition-all duration-300">
              <i className="bi bi-info-circle mr-2"></i>
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="bi bi-robot text-primary-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
              <p className="text-gray-400 text-sm">Intelligent systems that adapt and evolve</p>
            </div>
            
            <div className="bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="bi bi-lightning text-accent-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Optimized for maximum performance</p>
            </div>
            
            <div className="bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="bi bi-shield-check text-primary-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade security standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
