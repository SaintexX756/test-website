import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors"
    >
      <Globe size={20} />
      <span className="uppercase">{i18n.language === 'en' ? 'BG' : 'EN'}</span>
    </button>
  );
};