import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  withGlow = true,
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-base', sub: 'text-[8px]' },
    md: { box: 'w-10 h-10 sm:w-11 sm:h-11', text: 'text-lg sm:text-xl', sub: 'text-[9px] sm:text-[10px]' },
    lg: { box: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { box: 'w-18 h-18', text: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Emblem Container */}
      <div
        className={`relative ${currentSize.box} flex-shrink-0 rounded-xl bg-[#090e17]/80 border border-cyan-500/20 p-1 flex items-center justify-center transition-all duration-300 ${
          withGlow
            ? 'shadow-[0_0_20px_rgba(6,182,212,0.22)] group-hover:shadow-[0_0_28px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/50'
            : ''
        }`}
      >
        {/* Subtle ambient backplate gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-transparent pointer-events-none" />

        {/* User uploaded direct PNG logo */}
        <img
          src="https://i.ibb.co/fYcWp7Tz/MZA-Tech-Zone-Web-Development-Local-SEO.png"
          alt="MZA-Tech-Zone-Web-Development-Local-SEO"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${currentSize.text} font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight`}>
            MZA Tech Zone
          </span>
          <span className={`${currentSize.sub} tracking-widest uppercase font-medium text-slate-400 group-hover:text-slate-300`}>
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
};
