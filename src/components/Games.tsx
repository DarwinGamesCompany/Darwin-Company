import React from 'react';
import { useI18n } from '../i18n';

interface GamesProps {
  onSelectGame: (id: number) => void;
}

export function Games({ onSelectGame }: GamesProps) {
  const { lang } = useI18n();
  
  const games = [
    {
      id: 1,
      title: 'Project Alpha',
      description: lang === 'es' ? 'Un RPG de acción donde tus decisiones alteran el ecosistema del mundo. Domina a las bestias primigenias.' : 'An action RPG where your decisions alter the world\'s ecosystem. Master the primal beasts.',
      image: 'https://picsum.photos/seed/dragon/600/800',
      logo: 'A',
    },
    {
      id: 2,
      title: 'Neon Drift',
      description: lang === 'es' ? 'Carreras de alta velocidad en una metrópolis cyberpunk. Personaliza tu vehículo con tecnología experimental.' : 'High-speed racing in a cyberpunk metropolis. Customize your vehicle with experimental technology.',
      image: 'https://picsum.photos/seed/cyberpunk/600/800',
      logo: 'N',
    },
    {
      id: 3,
      title: 'Void Walkers',
      description: lang === 'es' ? 'Exploración espacial cooperativa. Sobrevive a las anomalías del vacío y descubre civilizaciones perdidas.' : 'Cooperative space exploration. Survive void anomalies and discover lost civilizations.',
      image: 'https://picsum.photos/seed/space/600/800',
      logo: 'V',
    }
  ];

  return (
    <section id="juegos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            {lang === 'es' ? 'Nuestros Proyectos' : 'Our Projects'}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="group glass-panel rounded-none overflow-hidden relative transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white"
            >
              {/* Background Image (Grayscale) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                <div className="text-4xl mb-4 bg-white text-black font-display font-bold w-16 h-16 flex items-center justify-center">
                  {game.logo}
                </div>
                <h3 className="font-display text-3xl font-bold mb-3 uppercase tracking-tight">{game.title}</h3>
                <p className="text-gray-400 mb-8 line-clamp-3">{game.description}</p>
                
                <button 
                  onClick={() => onSelectGame(game.id)}
                  className="mt-auto w-full py-3 bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold uppercase tracking-widest transition-colors"
                >
                  {lang === 'es' ? 'Saber Más' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
