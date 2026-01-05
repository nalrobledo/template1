import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import EventSection from '@/components/EventSection';
import DresscodeSection from '@/components/DresscodeSection';
import GiftsSection from '@/components/GiftsSection';
import RSVPSection from '@/components/RSVPSection';
import MusicPlayer from '@/components/MusicPlayer';
import SparkbondLogo from '@/components/SparkbondLogo';

const WeddingPage = () => {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleEnterInvitation = () => {
    setShowInvitation(true);
  };

  if (!showInvitation) {
    return (
      <>
        <LandingPage onEnterInvitation={handleEnterInvitation} />
        <MusicPlayer />
      </>
    );
  }

  return (
    <div className="min-h-screen smooth-transition">
      {/* Hero Section */}
      <div className="slide-up">
        <HeroSection />
      </div>
      
      {/* Countdown Timer */}
      <div className="fade-in">
        <CountdownTimer />
      </div>
      
      {/* Events Section */}
      <section className="py-20 bg-wedding-accent/30 slide-up">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ceremony */}
            <div className="fade-in">
              <EventSection
                type="ceremony"
                title="Ceremonia Religiosa"
                location="Catedral de Guadalajara"
                address="Av. Fray Antonio Alcalde 10, Zona Centro, 44100 Guadalajara, Jal."
                time="15:00 pm"
                mapUrl="https://maps.app.goo.gl/F46cMfrfHKcWust28"
              />
            </div>
            
            {/* Reception */}
            <div className="fade-in">
              <EventSection
                type="reception"
                title="Recepción"
                location="Ex Convento de Santa Teresa"
                address="C. Donato Guerra 25, Zona Centro, 44100 Guadalajara, Jal."
                time="19:00"
                mapUrl="https://maps.app.goo.gl/YGWKiFD26yywt97x9"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Dress Code */}
      <div className="slide-up">
        <DresscodeSection />
      </div>
      
      {/* Gifts */}
      <div className="fade-in">
        <GiftsSection />
      </div>
      
      {/* RSVP */}
      <div className="slide-up">
        <RSVPSection />
      </div>
      
      {/* Sparkbond Logo */}
      <div className="fade-in">
        <SparkbondLogo />
      </div>
      
      {/* Footer */}
      {/* <footer className="bg-wedding-dark py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-romantic text-3xl mb-4 text-primary-glow">Nallely & Oscar</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-3 h-3 border-2 border-primary rotate-45"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
          <p className="font-romantic text-xl mb-4 text-primary-glow">
            Con amor, esperamos celebrar este día especial contigo
          </p>
        </div>
      </footer> */}

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default WeddingPage;