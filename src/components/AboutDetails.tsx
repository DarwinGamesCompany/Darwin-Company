import React, { useEffect } from 'react';
import { ArrowLeft, History, Users, GitMerge, Target } from 'lucide-react';
import { useI18n } from '../i18n';

interface AboutDetailsProps {
  onClose: () => void;
}

export function AboutDetails({ onClose }: AboutDetailsProps) {
  const { lang } = useI18n();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm mb-8"
        >
          <ArrowLeft size={16} />
          {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
        </button>

        {/* Hero Banner */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden border border-white/20 mb-16 group">
          <img 
            src="https://picsum.photos/seed/studio-team/1920/600" 
            alt="Darwin & Co. Team" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4">
              {lang === 'es' ? 'Nuestra Esencia' : 'Our Essence'}
            </h1>
            <p className="text-xl text-gray-300">
              {lang === 'es' 
                ? 'Conoce a las mentes detrás de los mundos que exploras.' 
                : 'Meet the minds behind the worlds you explore.'}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* History */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6">
              <History size={24} />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
              {lang === 'es' ? 'Nuestra Historia' : 'Our History'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'es'
                ? 'Fundados en 2018 por un pequeño grupo de desarrolladores apasionados en un garaje de Madrid, Darwin & Co. nació con una premisa clara: romper el molde del diseño de juegos tradicional. Lo que comenzó como un experimento indie con "Project Alpha" se ha transformado en un estudio de más de 45 talentos globales, unidos por la visión de crear ecosistemas digitales vivos.'
                : 'Founded in 2018 by a small group of passionate developers in a Madrid garage, Darwin & Co. was born with a clear premise: to break the mold of traditional game design. What started as an indie experiment with "Project Alpha" has transformed into a studio of over 45 global talents, united by the vision of creating living digital ecosystems.'}
            </p>
          </section>

          {/* Culture */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
              {lang === 'es' ? 'Cultura' : 'Culture'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'es'
                ? 'Creemos firmemente que los mejores juegos nacen de equipos saludables y diversos. Tenemos una política estricta de "No Crunch", priorizando el bienestar mental y físico de nuestros desarrolladores. Fomentamos un entorno donde cada voz importa, desde el director creativo hasta el tester más junior, porque la innovación puede venir de cualquier parte.'
                : 'We firmly believe that the best games come from healthy and diverse teams. We have a strict "No Crunch" policy, prioritizing the mental and physical well-being of our developers. We foster an environment where every voice matters, from the creative director to the most junior tester, because innovation can come from anywhere.'}
            </p>
          </section>

          {/* Methodology */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6">
              <GitMerge size={24} />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
              {lang === 'es' ? 'Método de Trabajo' : 'Work Methodology'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'es'
                ? 'Nuestro enfoque es ágil, iterativo y profundamente impulsado por la comunidad. No desarrollamos en el vacío; lanzamos prototipos tempranos, escuchamos el feedback de nuestros jugadores y adaptamos nuestros diseños. Llamamos a esto "Desarrollo Evolutivo", permitiendo que nuestros juegos muten y mejoren de forma orgánica con el tiempo.'
                : 'Our approach is agile, iterative, and deeply community-driven. We don\'t develop in a vacuum; we release early prototypes, listen to our players\' feedback, and adapt our designs. We call this "Evolutionary Development," allowing our games to mutate and improve organically over time.'}
            </p>
          </section>

          {/* Goals */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
              {lang === 'es' ? 'Nuestros Objetivos' : 'Our Goals'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'es'
                ? 'A corto plazo, buscamos expandir nuestros universos actuales con narrativas más ricas y mecánicas más profundas. A largo plazo, nuestro objetivo es empujar los límites de la inteligencia artificial en los videojuegos, creando NPCs verdaderamente autónomos y mundos que reaccionen de manera impredecible y realista a cada decisión del jugador.'
                : 'In the short term, we seek to expand our current universes with richer narratives and deeper mechanics. In the long term, our goal is to push the boundaries of artificial intelligence in video games, creating truly autonomous NPCs and worlds that react unpredictably and realistically to every player decision.'}
            </p>
          </section>

        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center border-t border-white/20 pt-16">
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-6">
            {lang === 'es' ? '¿Quieres formar parte de nuestra historia?' : 'Want to be part of our history?'}
          </h3>
          <button 
            onClick={() => {
              onClose();
              setTimeout(() => {
                document.getElementById('empleo')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-black bg-white hover:bg-gray-200 transition-colors uppercase tracking-widest"
          >
            {lang === 'es' ? 'Ver Ofertas de Empleo' : 'View Job Openings'}
          </button>
        </div>
      </div>
    </div>
  );
}
