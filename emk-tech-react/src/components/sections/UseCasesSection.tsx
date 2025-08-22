import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Heart, 
  ShoppingCart, 
  FileText, 
  Truck 
} from 'lucide-react';

const UseCasesSection: React.FC = () => {
  const { t } = useTranslation('usecases');
  const useCases = t('items', { returnObjects: true }) as Array<{title: string, desc: string}>;

  const icons = [CreditCard, Heart, ShoppingCart, FileText, Truck];
  const colors = ['text-green-400', 'text-blue-400', 'text-purple-400', 'text-orange-400', 'text-yellow-400'];
  const bgColors = [
    'from-green-400 to-emerald-500',
    'from-blue-400 to-cyan-500', 
    'from-purple-400 to-pink-500',
    'from-orange-400 to-red-500',
    'from-yellow-400 to-orange-500'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-slate-900" id="use-cases">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proven <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world applications delivering measurable business impact across industries.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl card-hover border border-slate-600 group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${bgColors[index]} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${colors[index]}`}>
                      {useCase.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
