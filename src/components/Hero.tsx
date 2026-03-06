import React from 'react';
import { Play, Volume2, Maximize, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient to blend with the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Centered Title */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase mix-blend-overlay">
          DARWIN & CO.
        </h1>
        <p className="font-sans text-xl md:text-2xl lg:text-3xl font-medium tracking-widest text-white uppercase mt-4 mix-blend-overlay">
          Stories You Can Play
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#juegos" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Subtle Video Controls (Optional, for flavor) */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 text-white/50">
        <button className="hover:text-white transition-colors"><Play size={20} fill="currentColor" /></button>
        <button className="hover:text-white transition-colors"><Volume2 size={20} /></button>
        <button className="hover:text-white transition-colors"><Maximize size={20} /></button>
      </div>
    </section>
  );
}
