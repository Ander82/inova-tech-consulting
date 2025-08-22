import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enCommon from '../locales/en/common.json';
import enHome from '../locales/en/home.json';
import ptCommon from '../locales/pt-BR/common.json';
import ptHome from '../locales/pt-BR/home.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
  },
  'pt-BR': {
    common: ptCommon,
    home: ptHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
