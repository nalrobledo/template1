import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronDown, Heart } from 'lucide-react';

// Placeholder images - replace with actual couple photos
const couplePhotos = [
  '/api/placeholder/800/600',
  '/api/placeholder/800/600', 
  '/api/placeholder/800/600',
  '/api/placeholder/800/600',
  '/api/placeholder/800/600'
];

interface LandingPageProps {
  onEnterInvitation: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterInvitation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-dark to-wedding-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12 fade-in">
          <h1 className="font-romantic text-6xl md:text-8xl font-bold text-wedding-gold mb-4 tracking-wide">
            Nallely <span className="text-primary-glow italic">&</span> Oscar
          </h1>
          <h2 className="font-romantic text-3xl md:text-4xl text-primary-glow italic mb-8">
            Nuestra Boda
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-16 h-px bg-primary-glow"></div>
            <Heart className="w-6 h-6 text-primary-glow" />
            <div className="w-16 h-px bg-primary-glow"></div>
          </div>
        </div>

        {/* Photo Carousel */}
        <div className="w-full max-w-2xl mb-16 slide-up">
          <Carousel className="wedding-shadow rounded-2xl overflow-hidden">
            <CarouselContent>
              {couplePhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={photo}
                      alt={`Nallely y Oscar - Foto ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 border-primary-glow text-white hover:bg-primary-glow hover:text-wedding-dark" />
            <CarouselNext className="right-4 bg-black/50 border-primary-glow text-white hover:bg-primary-glow hover:text-wedding-dark" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <Button
            onClick={onEnterInvitation}
            size="lg"
            className="wedding-gradient text-wedding-dark font-semibold px-12 py-6 text-xl rounded-full wedding-glow hover:scale-105 bounce-transition"
          >
            Ver Invitación
          </Button>
          
          <div className="mt-8 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary-glow mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-wedding-gold/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default LandingPage;