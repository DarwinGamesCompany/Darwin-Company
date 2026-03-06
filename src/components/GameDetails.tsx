import React, { useEffect } from 'react';
import { ArrowLeft, Play, Image as ImageIcon, Calendar, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

interface GameDetailsProps {
  gameId: number;
  onClose: () => void;
}

export function GameDetails({ gameId, onClose }: GameDetailsProps) {
  const { lang } = useI18n();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    1: {
      title: 'Project Alpha',
      banner: 'https://picsum.photos/seed/dragon/1920/600',
      about: lang === 'es' 
        ? 'Project Alpha es un RPG de acción de próxima generación donde tus decisiones alteran fundamentalmente el ecosistema del mundo. Domina a las bestias primigenias, forja alianzas con facciones ocultas y descubre los secretos de una civilización olvidada.' 
        : 'Project Alpha is a next-generation action RPG where your decisions fundamentally alter the world\'s ecosystem. Master primal beasts, forge alliances with hidden factions, and uncover the secrets of a forgotten civilization.',
      features: lang === 'es' 
        ? ['Mundo abierto dinámico que reacciona a tus acciones', 'Sistema de combate táctico con bestias', 'Ecosistema vivo con clima realista'] 
        : ['Dynamic open world that reacts to your actions', 'Tactical beast combat system', 'Living ecosystem with realistic weather'],
      media: ['https://picsum.photos/seed/alpha1/800/450', 'https://picsum.photos/seed/alpha2/800/450'],
      updates: [
        { date: '15 OCT 2023', title: lang === 'es' ? 'Update 2.1 - La Era del Viento' : 'Update 2.1 - The Era of Wind' },
        { date: '10 SEP 2023', title: lang === 'es' ? 'Parche de Balance 2.0.1' : 'Balance Patch 2.0.1' }
      ]
    },
    2: {
      title: 'Neon Drift',
      banner: 'https://picsum.photos/seed/cyberpunk/1920/600',
      about: lang === 'es'
        ? 'Sumérgete en el submundo de las carreras de alta velocidad en una metrópolis cyberpunk. Personaliza tu vehículo con tecnología experimental, evade a las fuerzas de seguridad corporativas y conviértete en una leyenda del asfalto de neón.'
        : 'Dive into the high-speed racing underworld in a cyberpunk metropolis. Customize your vehicle with experimental technology, evade corporate security forces, and become a legend of the neon asphalt.',
      features: lang === 'es'
        ? ['Personalización extrema de vehículos', 'Trazado de rayos en tiempo real', 'Banda sonora synthwave inmersiva']
        : ['Extreme vehicle customization', 'Real-time ray tracing', 'Immersive synthwave soundtrack'],
      media: ['https://picsum.photos/seed/neon1/800/450', 'https://picsum.photos/seed/neon2/800/450'],
      updates: [
        { date: '02 SEP 2023', title: lang === 'es' ? 'Hotfix 1.0.4 - Estabilidad' : 'Hotfix 1.0.4 - Stability' }
      ]
    },
    3: {
      title: 'Void Walkers',
      banner: 'https://picsum.photos/seed/space/1920/600',
      about: lang === 'es'
        ? 'Una experiencia de exploración espacial cooperativa. Sobrevive a las anomalías del vacío, gestiona los recursos de tu nave y descubre civilizaciones perdidas en los confines más oscuros de la galaxia.'
        : 'A cooperative space exploration experience. Survive void anomalies, manage your ship\'s resources, and discover lost civilizations in the darkest reaches of the galaxy.',
      features: lang === 'es'
        ? ['Cooperativo online para 4 jugadores', 'Generación procedural de galaxias', 'Combate táctico de naves']
        : ['4-player online co-op', 'Procedural galaxy generation', 'Tactical ship combat'],
      media: ['https://picsum.photos/seed/void1/800/450', 'https://picsum.photos/seed/void2/800/450'],
      updates: [
        { date: '20 AGO 2023', title: lang === 'es' ? 'Expansión: Ecos del Abismo' : 'Expansion: Echoes of the Abyss' }
      ]
    }
  };

  const game = data[gameId as keyof typeof data];

  if (!game) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm mb-8"
        >
          <ArrowLeft size={16} />
          {lang === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
        </button>

        {/* Hero Banner */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden border border-white/20 mb-12 group">
          <img 
            src={game.banner} 
            alt={game.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4">
              {game.title}
            </h1>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play size={18} fill="currentColor" />
                {lang === 'es' ? 'Ver Tráiler' : 'Watch Trailer'}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-6 border-b border-white/20 pb-4">
                {lang === 'es' ? 'Sobre el Juego' : 'About the Game'}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {game.about}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">
                {lang === 'es' ? 'Características Principales' : 'Key Features'}
              </h2>
              <ul className="space-y-4">
                {game.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-6 border-b border-white/20 pb-4 flex items-center gap-3">
                <ImageIcon size={24} />
                {lang === 'es' ? 'Galería Multimedia' : 'Media Gallery'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {game.media.map((img, idx) => (
                  <div key={idx} className="aspect-video border border-white/20 overflow-hidden group cursor-pointer">
                    <img 
                      src={img} 
                      alt={`Screenshot ${idx + 1}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Updates & Info */}
          <div className="space-y-8">
            <div className="border border-white/20 p-6 bg-white/5">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2">
                <Calendar size={20} />
                {lang === 'es' ? 'Últimas Actualizaciones' : 'Latest Updates'}
              </h3>
              <div className="space-y-6">
                {game.updates.map((update, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase block mb-1">
                      {update.date}
                    </span>
                    <h4 className="font-bold text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                      <FileText size={16} />
                      {update.title}
                    </h4>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-white/20 text-gray-300 hover:text-white hover:border-white transition-colors font-bold uppercase tracking-widest text-sm">
                {lang === 'es' ? 'Ver Historial Completo' : 'View Full History'}
              </button>
            </div>

            <div className="border border-white/20 p-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4">
                {lang === 'es' ? 'Plataformas' : 'Platforms'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PC', 'PS5', 'Xbox Series X|S'].map(platform => (
                  <span key={platform} className="px-3 py-1 border border-white/20 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
