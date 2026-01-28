import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageCode, translations, Translations, getTranslation } from './translations';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: keyof Translations) => string;
  availableLanguages: { code: LanguageCode; name: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const AVAILABLE_LANGUAGES: { code: LanguageCode; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'mr', name: 'मराठी' },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setLanguage] = useState<LanguageCode>('en');

  const t = (key: keyof Translations): string => {
    return getTranslation(currentLanguage, key);
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages: AVAILABLE_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
