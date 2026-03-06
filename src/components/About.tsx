import React from 'react';
import { useI18n } from '../i18n';

interface AboutProps {
  onReadMore: () => void;
}

export function About({ onReadMore }: AboutProps) {
  const { lang } = useI18n();
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] overflow-hidden border border-white relative z-10">
              <img 
                src="https://picsum.photos/seed/studio/800/600" 
                alt="Darwin & Co. Office" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -inset-4 border border-white/30 z-0 translate-x-4 translate-y-4"></div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              {lang === 'es' ? 'Sobre Darwin & Co.' : 'About Darwin & Co.'}
            </h2>
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                {lang === 'es' 
                  ? 'Fundados en 2018, en Darwin & Co. creemos que los videojuegos son organismos vivos. No solo creamos software; cultivamos ecosistemas digitales que evolucionan con nuestra comunidad.'
                  : 'Founded in 2018, at Darwin & Co. we believe video games are living organisms. We don\'t just create software; we cultivate digital ecosystems that evolve with our community.'}
              </p>
              <p>
                {lang === 'es'
                  ? 'Nuestra misión es empujar los límites de la narrativa interactiva y la tecnología, creando experiencias que se sientan únicas para cada jugador. La "Evolución" no es solo nuestro lema, es nuestra metodología de diseño.'
                  : 'Our mission is to push the boundaries of interactive storytelling and technology, creating experiences that feel unique to each player. "Evolution" is not just our motto, it is our design methodology.'}
              </p>
              
              <button 
                onClick={onReadMore}
                className="inline-block mt-4 px-8 py-3 bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold uppercase tracking-widest transition-colors text-sm"
              >
                {lang === 'es' ? 'Conoce Nuestra Historia' : 'Discover Our Story'}
              </button>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20 mt-8">
                <div>
                  <h4 className="font-display text-4xl font-bold text-white mb-1">5+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{lang === 'es' ? 'Años de Innovación' : 'Years of Innovation'}</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-white mb-1">3</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{lang === 'es' ? 'Títulos Originales' : 'Original Titles'}</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-white mb-1">2M+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{lang === 'es' ? 'Jugadores Activos' : 'Active Players'}</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-white mb-1">45</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{lang === 'es' ? 'Desarrolladores' : 'Developers'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
