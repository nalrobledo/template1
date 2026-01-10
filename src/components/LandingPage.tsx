import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";

// 🔹 Fotos
import on3 from "@/assets/pareja4.jpg";
import on6 from "@/assets/anillos.jpg";
import on7 from "@/assets/pareja6.jpg";

const couplePhotos = [on3, on6, on7];

interface LandingPageProps {
  onEnterInvitation: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterInvitation }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = carouselRef.current?.querySelector(
        "[data-carousel-next]"
      ) as HTMLButtonElement;
      nextButton?.click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ===================== FONDO ===================== */}
      <div ref={carouselRef} className="absolute inset-0 z-0">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {couplePhotos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover scale-105"
                  />

                  {/* Overlay elegante */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            data-carousel-prev
            className="left-4 top-1/2 -translate-y-1/2 bg-white/60 border-wedding-gold text-wedding-dark hover:bg-wedding-gold hover:text-white"
          />
          <CarouselNext
            data-carousel-next
            className="right-4 top-1/2 -translate-y-1/2 bg-white/60 border-wedding-gold text-wedding-dark hover:bg-wedding-gold hover:text-white"
          />
        </Carousel>
      </div>

      {/* ===================== CONTENIDO ===================== */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Nombres */}
        <h1 className="font-romantic text-6xl md:text-8xl font-light tracking-widest leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-6">
          Fernanda{" "}
          <span className="text-wedding-gold italic font-normal">&</span>{" "}
          Saúl
        </h1>

        {/* Frase */}
        <h2 className="text-xl md:text-2xl font-light italic tracking-wide text-white/90 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-14">
          Tenemos el honor de invitarte a celebrar nuestra unión
        </h2>

        {/* ===================== PADRES ===================== */}
        <div className="relative max-w-3xl mx-auto mb-16 border border-wedding-gold/60 rounded-2xl backdrop-blur-sm bg-black/20 px-10 py-12 shadow-2xl">
          <p className="text-white italic tracking-wide mb-10">
            Con la bendición de nuestros padres
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white text-lg">
            <div>
              <p className="font-semibold tracking-wide mb-2">
                Padres de la Novia
              </p>
              <p className="font-light leading-relaxed">
                Nombre del Padre <br />
                Nombre de la Madre
              </p>
            </div>

            <div>
              <p className="font-semibold tracking-wide mb-2">
                Padres del Novio
              </p>
              <p className="font-light leading-relaxed">
                Nombre del Padre <br />
                Nombre de la Madre
              </p>
            </div>
          </div>
        </div>

        {/* ===================== BOTÓN ===================== */}
        <Button
          onClick={onEnterInvitation}
          size="lg"
          className="px-10 py-4 text-lg tracking-widest rounded-full border border-wedding-gold bg-transparent text-wedding-gold hover:bg-wedding-gold hover:text-wedding-dark transition-all duration-300"
        >
          Ver Invitación
        </Button>

        {/* Flecha */}
        <div className="mt-10 animate-bounce">
          <ChevronDown className="w-7 h-7 text-wedding-gold mx-auto opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
