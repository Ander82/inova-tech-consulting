import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/ui/Header';
import HeroSection from './components/sections/HeroSection';
import DifferentialsSection from './components/sections/DifferentialsSection';
import TechGridSection from './components/sections/TechGridSection';
import UseCasesSection from './components/sections/UseCasesSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/ui/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = i18n.language || 'en';
    
    // Update page title and meta description
    const updateMetaTags = () => {
      document.title = i18n.language === 'pt-BR' 
        ? 'EMK Tech - Consultoria Nearshore em IA, Automação e Transformação Digital'
        : 'EMK Tech - Nearshore Consulting in AI, Automation & Digital Transformation';
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          i18n.language === 'pt-BR'
            ? 'Escale mais rápido e reduza custos com soluções de IA, automação e RPA nearshore da EMK. Talento brasileiro de primeira linha com 50% menos custos que o mercado americano.'
            : 'Scale faster and reduce costs with EMK\'s nearshore AI, automation, and RPA solutions. Top-tier Brazilian engineering talent at 50% lower costs than US market rates.'
        );
      }
    };

    updateMetaTags();
    i18n.on('languageChanged', updateMetaTags);

    return () => {
      i18n.off('languageChanged', updateMetaTags);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <TechGridSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
