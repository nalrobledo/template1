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

// 🔹 Importa las fotos desde assets
import on3 from "@/assets/on3.jpg";
import on6 from "@/assets/on6.jpg";
import on7 from "@/assets/on7.jpg";
import on8 from "@/assets/on8.jpg";

const couplePhotos = [on3, on6, on7, on8];

interface LandingPageProps {
  onEnterInvitation: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterInvitation }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = carouselRef.current?.querySelector(
        "[data-carousel-next]"
      ) as HTMLButtonElement;
      nextButton?.click();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondo */}
      <div ref={carouselRef} className="absolute inset-0 z-0">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {couplePhotos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            data-carousel-prev
            className="left-4 top-1/2 -translate-y-1/2 bg-white/70 border-wedding-gold text-wedding-dark hover:bg-wedding-gold hover:text-white"
          />
          <CarouselNext
            data-carousel-next
            className="right-4 top-1/2 -translate-y-1/2 bg-white/70 border-wedding-gold text-wedding-dark hover:bg-wedding-gold hover:text-white"
          />
        </Carousel>
      </div>

      {/* Contenido sobrepuesto */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Título principal */}
        <h1 className="font-romantic text-6xl md:text-8xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-4">
          Nallely <span className="text-wedding-gold italic">&</span> Oscar
        </h1>

        {/* Subtítulo */}
        <h2 className="font-romantic text-3xl md:text-4xl text-white italic drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-10">
          Nuestra Boda
        </h2>

        
        {/* Marco con nombres de padres */}
        <div className="relative bg-transparent p-10 md:p-12 rounded-xl text-center max-w-3xl mx-auto shadow-xl border border-wedding-gold mb-16">
          {/* Molduras en esquinas */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-wedding-gold rounded-tl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-wedding-gold rounded-br-lg"></div>

          {/* Título */}
          <p className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] italic mb-8 tracking-wide">
            Con la bendición de nuestros padres
          </p>

          {/* Grid de padres */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-lg md:text-xl font-semibold mb-3">
                Padres del Novio
              </h3>
              <p className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-xl md:text-2xl">
                Daniela Juarez <br /> Andres Huerta
              </p>
            </div>
            <div>
              <h3 className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-lg md:text-xl font-semibold mb-3">
                Padres de la Novia
              </h3>
              <p className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-xl md:text-2xl">
                Esmeralda Robledo <br /> Andres Villas
              </p>
            </div>
          </div>
        </div>

        {/* Botón */}
        <Button
          onClick={onEnterInvitation}
          size="lg"
          className="wedding-gradient text-wedding-dark font-semibold px-12 py-6 text-xl rounded-full wedding-glow hover:scale-105 bounce-transition"
        >
          Ver Invitación
        </Button>

        <div className="mt-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-wedding-gold mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
