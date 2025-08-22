import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { t } = useTranslation('home');
  const [counters, setCounters] = useState({ cost: 0, years: 0, projects: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { cost: 50, years: 20, projects: 100 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          cost: Math.floor(targets.cost * progress),
          years: Math.floor(targets.years * progress),
          projects: Math.floor(targets.projects * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const badges = t('badges', { returnObjects: true }) as string[];

  return (
    <section className="gradient-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badges */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {badges.map((badge, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    index === 0 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                    index === 1 ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    'bg-purple-500/20 text-purple-300 border-purple-500/30'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">{t('hero_title').split(' ').slice(0, 2).join(' ')}</span><br/>
              {t('hero_title').split(' ').slice(2, 6).join(' ')}<br/>
              <span className="text-white">{t('hero_title').split(' ').slice(6).join(' ')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('hero_sub')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a 
                href="#contact" 
                className="btn-primary text-center focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label={t('cta_primary')}
              >
                {t('cta_primary')}
              </a>
              <a 
                href="#use-cases" 
                className="btn-secondary text-center focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label={t('cta_secondary')}
              >
                {t('cta_secondary')}
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400" aria-live="polite">{counters.cost}%</div>
                <div className="text-sm text-slate-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400" aria-live="polite">{counters.years}+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400" aria-live="polite">{counters.projects}+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl tech-glow flex items-center justify-center transform rotate-6"
                animate={{ 
                  y: [-10, 10, -10],
                  boxShadow: [
                    '0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(6, 182, 212, 0.1)',
                    '0 0 60px rgba(6, 182, 212, 0.5), 0 0 120px rgba(6, 182, 212, 0.2)',
                    '0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(6, 182, 212, 0.1)'
                  ]
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-80 h-80 bg-slate-900/90 backdrop-blur-sm rounded-2xl flex items-center justify-center transform -rotate-6 border border-slate-700">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-4">EMK</div>
                    <div className="text-2xl text-slate-300">Automation</div>
                    <div className="text-lg text-slate-400 mt-2">& AI</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
