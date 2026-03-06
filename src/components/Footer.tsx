import React from 'react';
import { useI18n } from '../i18n';
import { Instagram, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  const { lang } = useI18n();
  return (
    <footer className="bg-black py-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Side: Logo & Socials */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center">
              <span className="font-display font-bold text-black text-xs">D</span>
            </div>
            <span className="font-display font-bold tracking-widest text-white text-sm uppercase">
              DARWIN & CO.
            </span>
          </div>
          
          <div className="flex items-center gap-5 text-gray-500">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="TikTok">
              <TikTokIcon size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <Youtube size={22} />
            </a>
          </div>
        </div>
        
        {/* Right Side: Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="text-gray-500 text-xs font-bold uppercase tracking-widest flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Términos' : 'Terms'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Prensa' : 'Press'}</a>
          </div>
          
          <div className="text-gray-600 text-xs font-mono uppercase">
            &copy; {new Date().getFullYear()} Darwin & Co.
          </div>
        </div>

      </div>
    </footer>
  );
}
