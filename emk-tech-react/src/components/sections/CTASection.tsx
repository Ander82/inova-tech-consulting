import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';

const CTASection: React.FC = () => {
  const { t } = useTranslation('cta');

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('sub')}
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-2xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('primary')}
            >
              <Calendar className="w-5 h-5" />
              {t('primary')}
            </motion.a>
            
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('secondary')}
            >
              <Download className="w-5 h-5" />
              {t('secondary')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
