import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Gift } from 'lucide-react';

const GiftsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-wedding-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
            <Gift className="w-10 h-10 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-12">
            Sugerencia de Regalos
          </h2>
          
          {/* Content */}
          <div className="bg-white rounded-lg p-8 shadow-lg shadow-primary/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6 max-w-36 min-w-24">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            
            <div className="space-y-6 text-lg text-wedding-text leading-relaxed">
              <p className="font-romantic text-2xl text-primary italic">
                "Que nos acompañes en este gran día es el mejor regalo."
              </p>
              
              <p>
               Si deseas obsequiarnos algo adicional, hemos preparado con cariño una lista de deseos con algunos artículos que nos encantarían.
              </p>
            </div>
            
            {/* Registry Button */}
            <div className="mt-10">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium"
                asChild
              >
                <a 
                  href="https://mesaderegalos.liverpool.com.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Gift className="w-5 h-5" />
                  <span>Ver Mesa de Regalos</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-3 h-3 border-2 border-primary rotate-45"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;