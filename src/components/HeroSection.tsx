import React from 'react';
import coupleImage from '@/assets/couple-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-accent to-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url(${coupleImage})`,
        }}
      />
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-accent/60 via-background/40 to-wedding-accent/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-wedding-text max-w-4xl mx-auto px-6 fade-in">
        {/* Main Title */}
        <h1 className="font-romantic text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          Nallely <span className="text-gray-800 italic">&</span> Oscar
        </h1>
        
        {/* Subtitle */}
        <h2 className="font-romantic text-3xl md:text-4xl text-gray-800 italic drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mb-10">
          Nuestra Boda
        </h2>
        
        {/* Decorative Element */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-gray-700"></div>
          <div className="w-3 h-3 border-2 border-gray-700 rotate-45"></div>
          <div className="w-16 h-px bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;