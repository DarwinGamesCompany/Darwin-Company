import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n';

export function Discord() {
  const { lang } = useI18n();
  return (
    <section id="soporte" className="py-24 relative overflow-hidden border-t border-white/20">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="border border-white p-12 bg-white/5">
          <div className="w-24 h-24 bg-white mx-auto flex items-center justify-center mb-8">
            <MessageSquare size={48} color="black" fill="black" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            {lang === 'es' ? 'Centro de Ayuda' : 'Help Center'}
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {lang === 'es' 
              ? 'Únete a nuestro Discord oficial para soporte técnico, reportar errores, participar en betas cerradas y conectar directamente con los desarrolladores y la comunidad.'
              : 'Join our official Discord for technical support, bug reporting, closed betas, and to connect directly with developers and the community.'}
          </p>
          
          <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white hover:bg-gray-200 transition-colors uppercase tracking-widest">
            {lang === 'es' ? 'ÚNETE AHORA' : 'JOIN NOW'}
          </button>
        </div>
      </div>
    </section>
  );
}
