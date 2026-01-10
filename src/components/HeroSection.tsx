import React from "react";
import coupleImage from "@/assets/couple11.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ===================== IMAGEN DE FONDO ===================== */}
      <div className="absolute inset-0">
        <img
          src={coupleImage}
          alt="Fernanda y Saúl"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />
      </div>

      {/* ===================== CONTENIDO ===================== */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        {/* Nombres */}
        <h1 className="font-romantic text-6xl md:text-8xl font-light tracking-widest leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-6">
          Fernanda{" "}
          <span className="text-wedding-gold italic font-normal">&</span>{" "}
          Saúl
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl font-light italic tracking-wide text-white/90 mb-12 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
          Uniremos nuestras vidas en matrimonio
        </h2>

        {/* Elemento decorativo */}
        <div className="flex items-center justify-center gap-4 opacity-80">
          <div className="w-20 h-px bg-wedding-gold/70"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-gold"></div>
          <div className="w-20 h-px bg-wedding-gold/70"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
