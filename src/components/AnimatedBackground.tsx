import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float"></div>
      <div 
        className="absolute top-40 right-20 w-16 h-16 bg-accent-500/10 rounded-lg rotate-45 animate-float" 
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary-500/10 rounded-full animate-float" 
        style={{ animationDelay: '4s' }}
      ></div>
      <div 
        className="absolute bottom-20 right-40 w-24 h-24 bg-accent-500/10 rounded-lg rotate-12 animate-float" 
        style={{ animationDelay: '1s' }}
      ></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(8, 145, 178, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
