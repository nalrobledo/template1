import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, Check, X } from 'lucide-react';

const RSVPSection = () => {
  const [name, setName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [attending, setAttending] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleNameSubmit = () => {
    if (!name.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Por favor ingresa tu nombre completo",
        variant: "destructive"
      });
      return;
    }
    setShowConfirmation(true);
  };

  const handleRSVP = (isAttending: boolean) => {
    setAttending(isAttending);
    toast({
      title: isAttending ? "¡Gracias por confirmar!" : "Gracias por tu respuesta",
      description: isAttending 
        ? `${name}, nos da mucha alegría saber que nos acompañarás en nuestro gran día.`
        : `${name}, agradecemos tu sinceridad. Te extrañaremos en nuestro gran día.`,
    });
  };

  const resetForm = () => {
    setName('');
    setShowConfirmation(false);
    setAttending(null);
  };

  return (
    <section className="py-20 bg-wedding-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
            <Users className="w-10 h-10 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-12">
            Confirmación de Asistencia
          </h2>
          
          {/* Form */}
          <div className="bg-white rounded-lg p-8 shadow-[var(--shadow-card)] border border-wedding-beige">
            {!showConfirmation ? (
              <div className="space-y-6">
                <div className="text-left">
                  <Label htmlFor="name" className="text-wedding-text font-medium mb-2 block">
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg p-4 border-wedding-beige focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <Button 
                  onClick={handleNameSubmit}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-4"
                >
                  Continuar
                </Button>
              </div>
            ) : attending === null ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-romantic text-2xl text-wedding-text mb-2">
                    Hola, {name}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-6">
                    Cuentas con {guestCount} pases
                  </p>
                </div>
                
                <h4 className="text-xl text-wedding-text font-medium mb-6">
                  ¿Asistirás a nuestra boda?
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => handleRSVP(true)}
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-4"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Sí, asistiré
                  </Button>
                  
                  <Button
                    onClick={() => handleRSVP(false)}
                    size="lg"
                    variant="outline"
                    className="flex-1 border-red-500 text-red-500 hover:bg-red-50 text-lg py-4"
                  >
                    <X className="w-5 h-5 mr-2" />
                    No podré asistir
                  </Button>
                </div>
                
                <Button
                  onClick={resetForm}
                  variant="ghost"
                  className="text-muted-foreground hover:text-wedding-text"
                >
                  ← Cambiar nombre
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  attending ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {attending ? (
                    <Check className="w-8 h-8 text-green-600" />
                  ) : (
                    <X className="w-8 h-8 text-red-600" />
                  )}
                </div>
                
                <h3 className="font-romantic text-2xl text-wedding-text">
                  {attending ? '¡Confirmado!' : 'Gracias por tu respuesta'}
                </h3>
                
                <p className="text-wedding-text">
                  {attending 
                    ? `${name}, nos vemos el 15 de Febrero. ¡No podemos esperar a celebrar contigo!`
                    : `${name}, entendemos perfectamente. Gracias por tu sinceridad.`
                  }
                </p>
                
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Nueva confirmación
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;