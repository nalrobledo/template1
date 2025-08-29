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
                location="Iglesia Corpus Christi"
                address="Ojos de Sta. Lucía 275, Contry, Monterrey N.L."
                time="16:00 pm"
                mapUrl="https://maps.google.com/?q=Iglesia+Corpus+Christi+Ojos+de+Sta+Lucia+275+Contry+Monterrey"
              />
            </div>
            
            {/* Reception */}
            <div className="fade-in">
              <EventSection
                type="reception"
                title="Recepción"
                location="Los Ángeles Eventos"
                address="Carretera a la Cortina S/N, Los Cavazos, Santiago N.L."
                time="19:30"
                mapUrl="https://maps.google.com/?q=Los+Angeles+Eventos+Carretera+a+la+Cortina+Los+Cavazos+Santiago"
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
      <footer className="bg-wedding-dark py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-romantic text-3xl mb-4 text-primary-glow">Nallely & Oscar</h3>
          <p className="text-wedding-text/80 text-lg mb-4">15 de Febrero de 2026</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-3 h-3 border-2 border-primary rotate-45"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
          <p className="text-wedding-text/60 mt-8 text-sm">
            Con amor, esperamos celebrar este día especial contigo
          </p>
        </div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default WeddingPage;