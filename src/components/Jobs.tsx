import React from 'react';
import { useI18n } from '../i18n';

export function Jobs() {
  const { lang } = useI18n();

  const jobs = [
    { title: 'Senior Unity Developer', type: 'Full-time', location: lang === 'es' ? 'Remoto / Híbrido' : 'Remote / Hybrid' },
    { title: 'Concept Artist (Environment)', type: 'Full-time', location: lang === 'es' ? 'Remoto' : 'Remote' },
    { title: 'Technical Animator', type: 'Contract', location: lang === 'es' ? 'Remoto' : 'Remote' },
    { title: 'Community Manager', type: 'Full-time', location: 'Madrid, ES' },
  ];

  return (
    <section id="empleo" className="py-24 relative border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            {lang === 'es' ? 'Oportunidades de Empleo' : 'Career Opportunities'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {lang === 'es' 
              ? 'Buscamos mentes creativas y técnicas apasionadas por redefinir el futuro del gaming.'
              : 'We are looking for creative and technical minds passionate about redefining the future of gaming.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left: Job List */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 uppercase">{lang === 'es' ? 'Posiciones Abiertas' : 'Open Positions'}</h3>
            {jobs.map((job, idx) => (
              <div key={idx} className="group p-4 border border-white/20 hover:bg-white hover:text-black transition-colors cursor-pointer">
                <h4 className="font-bold text-lg uppercase">{job.title}</h4>
                <div className="flex gap-3 mt-2 text-xs font-mono font-bold text-gray-400 group-hover:text-gray-600 uppercase">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="border border-white/20 p-8">
              <h3 className="text-2xl font-bold mb-6 uppercase">{lang === 'es' ? 'Aplica Ahora' : 'Apply Now'}</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'es' ? 'Nombre Completo' : 'Full Name'}</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder={lang === 'es' ? "Ej. Alex Mercer" : "e.g. Alex Mercer"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="alex@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'es' ? 'Rol de Interés' : 'Role of Interest'}</label>
                  <select className="w-full bg-black border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none rounded-none">
                    <option value="">{lang === 'es' ? 'Selecciona un rol...' : 'Select a role...'}</option>
                    {jobs.map((job, idx) => (
                      <option key={idx} value={job.title}>{job.title}</option>
                    ))}
                    <option value="other">{lang === 'es' ? 'Otro (Candidatura Espontánea)' : 'Other (Spontaneous Application)'}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'es' ? 'Portafolio / LinkedIn (URL)' : 'Portfolio / LinkedIn (URL)'}</label>
                  <input 
                    type="url" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="https://"
                  />
                </div>

                <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-8">
                  {lang === 'es' ? 'ENVIAR APLICACIÓN' : 'SUBMIT APPLICATION'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
