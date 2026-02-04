import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  CreditCard, 
  Zap, 
  Cloud, 
  Gauge 
} from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { experiences } from '../../data/portfolio-data';

const Experience: React.FC = () => {
  const iconMap = {
    Building,
    Shield,
    CreditCard,
    Zap,
    Cloud,
    Gauge
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Core <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proven track record in enterprise-grade development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = iconMap[experience.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-400/10 rounded-2xl mb-6 group-hover:bg-green-400/20 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-green-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {experience.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-20"
>
  <GlassCard className="py-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      {/* Years Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
        <div className="text-gray-400 text-sm tracking-wide">
          Years Experience
        </div>
      </motion.div>

      {/* Projects Delivered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
        <div className="text-gray-400 text-sm tracking-wide">
          Projects Delivered
        </div>
      </motion.div>

      {/* Systems Built */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-bold text-green-400 mb-2">
          Enterprise
        </div>
        <div className="text-gray-400 text-sm tracking-wide">
          Production Systems
        </div>
      </motion.div>

      {/* Uptime */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-bold text-green-400 mb-2">
          99.9%
        </div>
        <div className="text-gray-400 text-sm tracking-wide">
          Reliability Focus
        </div>
      </motion.div>

    </div>
  </GlassCard>
</motion.div>

      </div>
    </section>
  );
};

export default Experience;