import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useI18n } from '../i18n';

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
  onNavClick?: () => void;
}

export function Navbar({ isLight, setIsLight, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'es' ? 'Inicio' : 'Home', href: '#inicio' },
    { name: lang === 'es' ? 'Nuestros Juegos' : 'Our Games', href: '#juegos' },
    { name: lang === 'es' ? 'Notas de Parche' : 'Patch Notes', href: '#notas' },
    { name: lang === 'es' ? 'Sobre Nosotros' : 'About Us', href: '#nosotros' },
    { name: lang === 'es' ? 'Trabaja con Nosotros' : 'Careers', href: '#empleo' },
    { name: lang === 'es' ? 'Soporte' : 'Support', href: '#soporte' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="font-display font-bold text-black text-xl">D</span>
          </div>
          <span className="font-display font-bold text-xl tracking-widest text-white uppercase">
            DARWIN & CO.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => onNavClick?.()}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLang}
            className="text-gray-400 hover:text-white transition-colors ml-4 flex items-center gap-1"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="text-xs font-bold uppercase">{lang}</span>
          </button>
          <button 
            onClick={() => setIsLight(!isLight)}
            className="text-gray-400 hover:text-white transition-colors ml-4"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="text-xs font-bold uppercase">{lang}</span>
          </button>
          <button 
            onClick={() => setIsLight(!isLight)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                onNavClick?.();
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
