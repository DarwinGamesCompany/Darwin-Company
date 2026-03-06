import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Games } from './components/Games';
import { PatchNotes } from './components/PatchNotes';
import { About } from './components/About';
import { Jobs } from './components/Jobs';
import { Discord } from './components/Discord';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';
import { GameDetails } from './components/GameDetails';
import { AboutDetails } from './components/AboutDetails';
import { I18nProvider } from './i18n';

export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [showAboutDetails, setShowAboutDetails] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isLight]);

  const handleNavClick = () => {
    setSelectedGameId(null);
    setShowAboutDetails(false);
  };

  return (
    <I18nProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 relative transition-colors duration-300">
        <StarBackground />
        <div className="relative z-10">
          <Navbar 
            isLight={isLight} 
            setIsLight={setIsLight} 
            onNavClick={handleNavClick}
          />
          
          {selectedGameId ? (
            <GameDetails gameId={selectedGameId} onClose={() => setSelectedGameId(null)} />
          ) : showAboutDetails ? (
            <AboutDetails onClose={() => setShowAboutDetails(false)} />
          ) : (
            <main>
              <Hero />
              <Games onSelectGame={setSelectedGameId} />
              <PatchNotes />
              <About onReadMore={() => setShowAboutDetails(true)} />
              <Jobs />
              <Discord />
            </main>
          )}
          
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
