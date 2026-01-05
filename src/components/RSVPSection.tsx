import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Users, Check, X, Heart, UserCheck } from 'lucide-react'

/* 🔹 LISTA DE INVITADOS */
const guestList = [
  { name: "Familia García", passes: 4 },
  { name: "Familia López", passes: 3 },
  { name: "María y Carlos", passes: 2 },
  { name: "Ana Rodríguez", passes: 1 },
  { name: "Luis y Patricia", passes: 2 },
]

const RSVPSection = () => {
  const { toast } = useToast()

  const [selectedGuest, setSelectedGuest] = useState('')
  const [guestCount, setGuestCount] = useState(1)
  const [attending, setAttending] = useState<boolean | null>(null)

  const guestData = guestList.find(g => g.name === selectedGuest)

  const handleRSVP = (isAttending: boolean) => {
    setAttending(isAttending)

    toast({
      title: isAttending ? '¡Confirmado!' : 'Respuesta registrada',
      description: isAttending
        ? `${selectedGuest} confirmó ${guestCount} ${guestCount === 1 ? 'persona' : 'personas'}`
        : 'Lamentamos que no puedas acompañarnos',
    })
  }

  const resetForm = () => {
    setSelectedGuest('')
    setGuestCount(1)
    setAttending(null)
  }

  return (
    <section className="py-20 bg-wedding-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Recuadro principal */}
          <div className="bg-white rounded-xl p-10 shadow-lg shadow-primary/40">

            {/* Icono */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 wedding-glow">
              <Users className="w-10 h-10 text-primary" />
            </div>

            {/* Título */}
            <h2 className="font-romantic text-4xl md:text-5xl font-bold text-wedding-text mb-10">
              Confirmación de Asistencia
            </h2>

            {/* Contenido */}
            {!selectedGuest ? (

              /* PASO 1 */
              <div className="space-y-6 max-w-md mx-auto">
                <Label className="text-base font-medium">
                  Busca tu nombre en la lista
                </Label>

                <select
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center text-lg"
                  value=""
                  onChange={(e) => setSelectedGuest(e.target.value)}
                >
                  <option value="">Selecciona tu nombre…</option>
                  {guestList.map((guest) => (
                    <option key={guest.name} value={guest.name}>
                      {guest.name}
                    </option>
                  ))}
                </select>
              </div>

            ) : attending === null ? (

              /* PASO 2 */
              <div className="space-y-6 max-w-md mx-auto text-center">
                <div className="bg-primary/10 rounded-lg p-6">
                  <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    ¡Hola {selectedGuest}!
                  </h3>
                  <p className="text-muted-foreground">
                    Cuentas con {guestData?.passes} {guestData?.passes === 1 ? 'pase' : 'pases'}
                  </p>
                </div>

                <Label className="text-base font-medium">
                  Número de asistentes
                </Label>

                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center text-lg"
                >
                  {Array.from({ length: guestData?.passes || 1 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button
                    onClick={() => handleRSVP(true)}
                    className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Asistiré
                  </Button>

                  <Button
                    onClick={() => handleRSVP(false)}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500/10 py-3 rounded-full"
                  >
                    <X className="w-5 h-5 mr-2" />
                    No asistiré
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  onClick={resetForm}
                  className="text-sm text-muted-foreground"
                >
                  Cambiar invitado
                </Button>
              </div>

            ) : (

              /* PASO 3 */
              <div className="space-y-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  attending ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {attending ? (
                    <Check className="w-8 h-8 text-green-600" />
                  ) : (
                    <X className="w-8 h-8 text-red-600" />
                  )}
                </div>

                <h3 className="font-romantic text-2xl">
                  {attending ? '¡Confirmación recibida!' : 'Gracias por avisarnos'}
                </h3>

                <p>
                  {attending
                    ? `${selectedGuest} confirmó ${guestCount} asistentes`
                    : 'Esperamos verte en otra ocasión'}
                </p>

                <Button
                  variant="outline"
                  onClick={resetForm}
                  className="border-primary text-primary"
                >
                  Nueva confirmación
                </Button>
              </div>

            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVPSection
