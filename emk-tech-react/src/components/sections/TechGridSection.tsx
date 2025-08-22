import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Brain, 
  BarChart3, 
  Database, 
  MessageSquare, 
  Image, 
  Cloud, 
  HardDrive, 
  Zap, 
  GitBranch 
} from 'lucide-react';

const TechGridSection: React.FC = () => {
  const { t } = useTranslation('tech');
  const categories = t('categories', { returnObjects: true }) as Array<{name: string, items: string[]}>;

  const icons = [Bot, Brain, BarChart3, Database, MessageSquare, Image, Cloud, HardDrive, Zap, GitBranch];
  const colors = [
    'text-cyan-400',
    'text-purple-400', 
    'text-green-400',
    'text-yellow-400',
    'text-orange-400',
    'text-pink-400',
    'text-blue-400',
    'text-red-400',
    'text-indigo-400',
    'text-emerald-400'
  ];
  const bgColors = [
    'from-cyan-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-emerald-500',
    'from-yellow-400 to-orange-500',
    'from-orange-400 to-red-500',
    'from-pink-400 to-rose-500',
    'from-blue-400 to-indigo-500',
    'from-red-400 to-pink-500',
    'from-indigo-400 to-purple-500',
    'from-emerald-400 to-green-500'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-slate-800" id="tech">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We master the latest technologies to deliver cutting-edge solutions that drive your business forward.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const Icon = icons[index] || Bot;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-700 p-6 rounded-2xl card-hover border border-slate-600 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${bgColors[index]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${colors[index]}`}>
                  {category.name}
                </h3>
                <ul className="space-y-1 text-slate-300 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-2 text-xs mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechGridSection;
