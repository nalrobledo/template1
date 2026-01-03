import React from 'react';
import { Sparkles } from 'lucide-react';
import logoSB from '@/assets/logob.png';



const SparkbondLogo = () => {
  return (
    <div className="text-center py-16 bg-wedding-accent/50">
      <div className="max-w-md mx-auto px-6">
        
        {/* Logo */}
        <img
          src={logoSB}
          alt="Sparkbond"
          className="
            mx-auto 
            w-48 md:w-46 
            mb-4 
            drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]
            hover:drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]
            transition-all
            duration-300
          "
        />

        {/* Slogan B*/}
        <p className="text-muted-foreground text-sm italic">
          One spark is enough to ignite the celebration
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="w-12 h-px bg-foreground/40"></div>
          <div className="w-2 h-2 border border-foreground/40 rotate-45"></div>
          <div className="w-12 h-px bg-foreground/40"></div>
        </div>

      </div>
    </div>
  );
};

export default SparkbondLogo;
