import React, { useState } from 'react';
import { FileText, ArrowRight, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n';

export function PatchNotes() {
  const { lang } = useI18n();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleNote = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const notes = [
    {
      id: 1,
      date: '15 OCT 2023',
      game: 'Project Alpha',
      title: lang === 'es' ? 'Update 2.1 - La Era del Viento' : 'Update 2.1 - The Era of Wind',
      summary: lang === 'es' ? 'Introducimos a Zephyr y la nueva región de las Cumbres Flotantes.' : 'Introducing Zephyr and the new Floating Peaks region.',
      description: lang === 'es' 
        ? 'En esta actualización masiva, hemos escuchado a la comunidad y traído una de las características más solicitadas. Zephyr se une al plantel con habilidades basadas en el control del viento, permitiendo nuevas sinergias en combate. Además, la región de las Cumbres Flotantes ofrece nuevos desafíos verticales y bestias aéreas.' 
        : 'In this massive update, we listened to the community and brought one of the most requested features. Zephyr joins the roster with wind-control abilities, allowing for new combat synergies. Additionally, the Floating Peaks region offers new vertical challenges and aerial beasts.',
      changes: lang === 'es' ? [
        '+ Nuevo personaje jugable: Zephyr',
        '+ Añadida la región "Cumbres Flotantes"',
        '- Corrección de errores en colisiones de monturas',
        '* Rebalanceo de daño elemental'
      ] : [
        '+ New playable character: Zephyr',
        '+ Added "Floating Peaks" region',
        '- Fixed mount collision bugs',
        '* Elemental damage rebalance'
      ]
    },
    {
      id: 2,
      date: '02 SEP 2023',
      game: 'Neon Drift',
      title: lang === 'es' ? 'Hotfix 1.0.4 - Estabilidad' : 'Hotfix 1.0.4 - Stability',
      summary: lang === 'es' ? 'Correcciones críticas de rendimiento y trazado de rayos.' : 'Critical performance and ray tracing fixes.',
      description: lang === 'es'
        ? 'Este hotfix se centra en resolver los problemas de cierre inesperado que algunos jugadores experimentaban al entrar al garaje principal, además de optimizar el rendimiento general cuando el trazado de rayos está activado en calidad Ultra.'
        : 'This hotfix focuses on resolving the crash issues some players experienced when entering the main garage, as well as optimizing overall performance when ray tracing is set to Ultra quality.',
      changes: lang === 'es' ? [
        '- Solucionado el crash al entrar al garaje',
        '- Mejoras de rendimiento en trazado de rayos',
        '* Ajuste en la IA de los corredores rivales'
      ] : [
        '- Fixed crash when entering garage',
        '- Ray tracing performance improvements',
        '* Rival racer AI adjustment'
      ]
    },
    {
      id: 3,
      date: '20 AGO 2023',
      game: 'Void Walkers',
      title: lang === 'es' ? 'Expansión: Ecos del Abismo' : 'Expansion: Echoes of the Abyss',
      summary: lang === 'es' ? 'Nuevas naves, crafteo avanzado y eventos globales.' : 'New ships, advanced crafting, and global events.',
      description: lang === 'es'
        ? 'La primera gran expansión ya está aquí. Adéntrate más en lo desconocido con tres nuevas clases de naves exploradoras. El nuevo sistema de crafteo te permitirá aprovechar al máximo los recursos anómalos, justo a tiempo para sobrevivir al nuevo evento global: la Tormenta Solar.'
        : 'The first major expansion is here. Delve deeper into the unknown with three new explorer ship classes. The new crafting system will allow you to make the most of anomalous resources, just in time to survive the new global event: the Solar Storm.',
      changes: lang === 'es' ? [
        '+ 3 nuevas naves exploradoras',
        '+ Sistema de crafteo avanzado',
        '+ Nuevo evento global: Tormenta Solar',
        '- Arreglo de desincronización en cooperativo'
      ] : [
        '+ 3 new explorer ships',
        '+ Advanced crafting system',
        '+ New global event: Solar Storm',
        '- Fixed co-op desync'
      ]
    }
  ];

  return (
    <section id="notas" className="py-24 relative border-y border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              {lang === 'es' ? 'Notas de Parche' : 'Patch Notes'}
            </h2>
            <p className="text-gray-400">{lang === 'es' ? 'Mantente al día con el desarrollo continuo de nuestros juegos.' : 'Stay up to date with the continuous development of our games.'}</p>
          </div>
          <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-bold uppercase tracking-widest text-sm">
            {lang === 'es' ? 'Ver todas las notas' : 'View all notes'} <ArrowRight size={16} />
          </button>
        </div>

        <div className="space-y-4">
          {notes.map((note) => {
            const isExpanded = expandedId === note.id;
            
            return (
              <div 
                key={note.id} 
                className={`border border-white/20 transition-all duration-300 overflow-hidden ${isExpanded ? 'bg-white text-black' : 'hover:bg-white/5 text-white'}`}
              >
                {/* Header (Clickable) */}
                <div 
                  className="p-6 cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between"
                  onClick={() => toggleNote(note.id)}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:items-center flex-1">
                    <div className="flex-shrink-0 w-32">
                      <span className={`text-xs font-mono font-bold border px-3 py-1 uppercase ${isExpanded ? 'border-black' : 'border-current'}`}>
                        {note.date}
                      </span>
                      <p className={`text-sm font-bold mt-3 uppercase ${isExpanded ? 'text-gray-600' : 'text-gray-400'}`}>
                        {note.game}
                      </p>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 flex items-center gap-2 uppercase">
                        <FileText size={20} />
                        {note.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-sm text-gray-400 mt-2 line-clamp-1">{note.summary}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className={`px-6 pb-6 pt-2 border-t md:ml-[152px] ${isExpanded ? 'border-black/10' : 'border-white/10'}`}>
                    <p className={`mb-6 leading-relaxed ${isExpanded ? 'text-gray-800' : 'text-gray-300'}`}>
                      {note.description}
                    </p>
                    
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4">
                      {lang === 'es' ? 'Detalles del Parche' : 'Patch Details'}
                    </h4>
                    
                    <ul className={`text-sm space-y-2 font-mono ${isExpanded ? 'text-gray-700' : 'text-gray-400'}`}>
                      {note.changes.map((change, idx) => {
                        let colorClass = "";
                        if (isExpanded) {
                          if (change.startsWith('+')) colorClass = "text-green-700 font-semibold";
                          else if (change.startsWith('-')) colorClass = "text-red-700 font-semibold";
                          else colorClass = "text-blue-700 font-semibold";
                        }
                        
                        return (
                          <li key={idx} className={colorClass}>
                            {change}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
