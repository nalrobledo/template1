import React from 'react';
import coupleImage from '@/assets/couple-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${coupleImage})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="font-romantic text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          Nallely <span className="text-primary-glow italic">&</span> Oscar
        </h1>
        
        {/* Subtitle */}
        <h2 className="font-romantic text-2xl md:text-3xl mb-8 italic text-primary-glow">
          Nuestra Boda
        </h2>
        
        {/* Parents Blessing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
          <p className="font-romantic text-xl md:text-2xl mb-6 italic">
            Con la bendición de nuestros Padres
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-base md:text-lg">
            <div>
              <h3 className="font-semibold mb-2 text-primary-glow">Papás de la Novia:</h3>
              <p>Esmeralda Salinas y Andrés Robledo</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary-glow">Papás del Novio:</h3>
              <p>Oscar González y Betty Tavitas</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-primary-glow"></div>
          <div className="w-3 h-3 border-2 border-primary-glow rotate-45"></div>
          <div className="w-16 h-px bg-primary-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;