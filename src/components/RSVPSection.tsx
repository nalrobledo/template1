import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, Check, X, Heart, UserCheck } from 'lucide-react';

const RSVPSection = () => {
  const [name, setName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [maxGuests] = useState(2); // You can make this dynamic based on invitation
  const { toast } = useToast();

  const handleNameSubmit = () => {
    if (name.trim()) {
      setShowConfirmation(true);
    } else {
      toast({
        title: "Error",
        description: "Por favor ingresa tu nombre",
        variant: "destructive",
      });
    }
  };

  const handleRSVP = (isAttending: boolean) => {
    setAttending(isAttending);
    toast({
      title: isAttending ? "¡Confirmado!" : "Entendido",
      description: isAttending 
        ? `¡Nos vemos en la boda! Confirmado para ${guestCount} ${guestCount === 1 ? 'persona' : 'personas'}` 
        : "Lamentamos que no puedas acompañarnos",
    });
  };

  const resetForm = () => {
    setName('');
    setShowConfirmation(false);
    setAttending(null);
    setGuestCount(1);
  };

  return (
    <section className="py-20 bg-wedding-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8 wedding-glow">
            <Users className="w-10 h-10 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-12">
            Confirmación de Asistencia
          </h2>
          
          {/* Form */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 wedding-shadow border border-wedding-accent">
            {!showConfirmation ? (
              <div className="max-w-md mx-auto space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Tu nombre
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe tu nombre completo"
                    className="text-center text-lg py-3"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleNameSubmit();
                      }
                    }}
                  />
                </div>
                
                <Button 
                  onClick={handleNameSubmit}
                  className="w-full wedding-gradient text-wedding-dark font-semibold py-3 text-lg rounded-full hover:scale-105 bounce-transition"
                  size="lg"
                >
                  Continuar
                </Button>
              </div>
            ) : attending === null ? (
              <div className="max-w-md mx-auto space-y-6 text-center">
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">¡Hola {name}!</h3>
                  <p className="text-primary-glow mb-4">
                    Cuentas con {maxGuests} {maxGuests === 1 ? 'pase' : 'pases'}
                  </p>
                  <p className="text-muted-foreground">
                    ¿Confirmas cantidad de {guestCount} {guestCount === 1 ? 'pase' : 'pases'}?
                  </p>
                </div>

                {/* Guest Count Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Número de invitados
                  </Label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center text-lg"
                  >
                    {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => handleRSVP(true)}
                    className="bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full hover:scale-105 bounce-transition"
                    size="lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    ¡Sí, asistiré!
                  </Button>
                  
                  <Button
                    onClick={() => handleRSVP(false)}
                    variant="outline"
                    className="py-3 text-lg rounded-full hover:scale-105 bounce-transition border-red-500 text-red-500 hover:bg-red-500/10"
                    size="lg"
                  >
                    <X className="w-5 h-5 mr-2" />
                    No podré asistir
                  </Button>
                </div>
                
                <Button
                  onClick={resetForm}
                  variant="ghost"
                  className="text-sm text-muted-foreground"
                >
                  Cambiar nombre
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
                  className="border-primary text-primary hover:bg-primary hover:text-wedding-dark"
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