import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import weddingSong from "@/assets/modern-piano.mp3"; // 👈 import correcto

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 wedding-shadow flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="rounded-full w-10 h-10 p-0 text-primary-glow hover:bg-primary-glow/20"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="rounded-full w-10 h-10 p-0 text-primary-glow hover:bg-primary-glow/20"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* 👇 Aquí va el <audio /> */}
      <audio
        ref={audioRef}
        src={weddingSong}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
