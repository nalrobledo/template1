import React from 'react';
import { Sparkles } from 'lucide-react';

const SparkbondLogo = () => {
  return (
    <div className="text-center py-16 bg-wedding-accent/50">
      <div className="max-w-md mx-auto px-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Sparkles className="w-8 h-8 text-primary-glow" />
          <h3 className="font-romantic text-3xl text-primary-glow">Sparkbond</h3>
          <Sparkles className="w-8 h-8 text-primary-glow" />
        </div>
        
        <p className="text-muted-foreground text-sm italic">
          One spark is enough to ignite the celebration
        </p>
        
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="w-12 h-px bg-primary-glow/50"></div>
          <div className="w-2 h-2 border border-primary-glow/50 rotate-45"></div>
          <div className="w-12 h-px bg-primary-glow/50"></div>
        </div>
      </div>
    </div>
  );
};

export default SparkbondLogo;