import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Church, PartyPopper } from 'lucide-react';

interface EventSectionProps {
  type: 'ceremony' | 'reception';
  title: string;
  location: string;
  address: string;
  time: string;
  mapUrl?: string;
}

const EventSection: React.FC<EventSectionProps> = ({
  type,
  title,
  location,
  address,
  time,
  mapUrl
}) => {
  const Icon = type === 'ceremony' ? Church : PartyPopper;

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg shadow-primary/50">
      <div className="text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-romantic text-3xl font-bold text-wedding-text mb-6">
          {title}
        </h3>

        {/* Details */}
        <div className="space-y-4 mb-8">
          {/* Location */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-1">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <p className="font-semibold text-wedding-text text-lg">
                {location}
              </p>
            </div>
            <p className="text-muted-foreground">
              {address}
            </p>
          </div>

          {/* Time */}
          <div className="flex items-center justify-center text-center">
            <Clock className="w-5 h-5 text-primary mr-2" />
            <p className="text-wedding-text text-lg font-medium">
              {time}
            </p>
          </div>
        </div>

        {/* Map Button */}
        {mapUrl && (
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventSection;

