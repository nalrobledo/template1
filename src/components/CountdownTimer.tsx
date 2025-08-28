import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2026-02-15T16:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-wedding-cream to-background">
      <div className="container mx-auto px-6 text-center">
        {/* Date */}
        <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-4">
          Sábado 15 de Febrero de 2026
        </h2>
        
        {/* Countdown */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-romantic text-2xl md:text-3xl text-primary mb-12 italic">
            Faltan...
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] border border-wedding-beige">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {timeLeft.days}
              </div>
              <div className="text-wedding-text font-medium uppercase tracking-wide text-sm">
                Días
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] border border-wedding-beige">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-wedding-text font-medium uppercase tracking-wide text-sm">
                Horas
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] border border-wedding-beige">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-wedding-text font-medium uppercase tracking-wide text-sm">
                Minutos
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] border border-wedding-beige">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-wedding-text font-medium uppercase tracking-wide text-sm">
                Segundos
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <div className="w-16 h-px bg-primary"></div>
          <div className="w-3 h-3 border-2 border-primary rotate-45"></div>
          <div className="w-16 h-px bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;