import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'icon' | 'full';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full', className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  if (variant === 'icon') {
    return (
      <div className={`${iconSizes[size]} relative ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Hexagonal shape */}
          <div className="absolute inset-1 bg-dark-800/20 rounded-md"></div>
          <div className="relative z-10">
            <i className="bi bi-hexagon text-white text-lg opacity-80"></i>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="bi bi-cpu text-white text-xs"></i>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-lg blur-sm"></div>
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className}`}>
        <h1 className={`${sizeClasses[size]} font-display font-bold text-white leading-tight`}>
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
            TRIMERG
          </span>
        </h1>
        <p className="text-xs text-gray-400 -mt-1 tracking-wider">TECH SOLUTIONS</p>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${iconSizes[size]} relative`}>
        <div className="w-full h-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-1 bg-dark-800/20 rounded-md"></div>
          <div className="relative z-10">
            <i className="bi bi-hexagon text-white text-lg opacity-80"></i>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="bi bi-cpu text-white text-xs"></i>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-lg blur-sm"></div>
        </div>
      </div>
      <div>
        <h1 className={`${sizeClasses[size]} font-display font-bold text-white leading-tight`}>
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
            TRIMERG
          </span>
        </h1>
        <p className="text-xs text-gray-400 -mt-1 tracking-wider">TECH SOLUTIONS</p>
      </div>
    </div>
  );
};

export default Logo;
