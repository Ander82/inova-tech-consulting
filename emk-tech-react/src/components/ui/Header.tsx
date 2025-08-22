import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">EMK</span>
          <span className="text-cyan-400">Tech</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#differentials" 
            className="text-slate-300 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            Differentials
          </a>
          <a 
            href="#tech" 
            className="text-slate-300 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {t('navigation.technologies')}
          </a>
          <a 
            href="#use-cases" 
            className="text-slate-300 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {t('navigation.useCases')}
          </a>
          <a 
            href="#contact" 
            className="text-slate-300 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {t('navigation.contact')}
          </a>
          <LanguageSwitcher />
        </div>
        
        <a 
          href="#contact" 
          className="btn-primary focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          {t('navigation.scheduleCall')}
        </a>
      </nav>
    </header>
  );
};

export default Header;
