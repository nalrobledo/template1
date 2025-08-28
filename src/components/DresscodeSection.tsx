import React from 'react';
import { Shirt } from 'lucide-react';

const DresscodeSection = () => {
  return (
    <section className="py-20 bg-wedding-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
            <Shirt className="w-10 h-10 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-8">
            Dress Code
          </h2>
          
          {/* Content */}
          <div className="bg-white rounded-lg p-8 shadow-[var(--shadow-card)] border border-primary/20">
            <h3 className="font-romantic text-3xl font-bold text-primary mb-6">
              Etiqueta
            </h3>
            
            <div className="space-y-4 text-lg text-wedding-text">
              <p className="font-medium">
                No blanco, no colores claros
              </p>
              
              <div className="pt-4 border-t border-wedding-beige">
                <p className="text-muted-foreground text-base italic">
                  Te agradecemos respetar nuestro código de vestimenta para hacer de este día aún más especial.
                </p>
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
      </div>
    </section>
  );
};

export default DresscodeSection;