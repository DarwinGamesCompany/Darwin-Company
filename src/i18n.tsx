import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface I18nContextType {
  lang: Language;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <I18nContext.Provider value={{ lang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
