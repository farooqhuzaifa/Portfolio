import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: '6+ Years Experience',
      description: 'Deep expertise in MERN stack development'
    },
    {
      icon: Server,
      title: 'Backend-Heavy',
      description: 'Specialized in scalable server architectures'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'RBAC, authentication, and data protection'
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Optimized for speed and scalability'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Crafting enterprise-grade solutions with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-3xl font-bold text-white mb-6">
                Senior Full-Stack Engineer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 6 years of experience in the MERN ecosystem, I specialize in building 
                scalable, secure backend systems that power modern web applications. My expertise 
                spans from architecting microservices to implementing complex real-time features.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I've successfully delivered projects across multiple industries including B2B 
                marketplaces, healthcare platforms, fintech solutions, and Web3 applications, 
                consistently focusing on performance, security, and user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable system architecture & microservices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">RBAC, authentication & security implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Payment processing & third-party integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time systems & cloud deployments</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-400/10 rounded-xl mb-4">
                    <highlight.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;