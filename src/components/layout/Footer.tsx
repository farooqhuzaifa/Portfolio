import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">
              H<span className="text-green-400">F</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Senior MERN Stack Developer crafting scalable, secure solutions 
            for the modern web. Let's build something extraordinary together.
          </p>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <span>© 2024 Huzaifa Farooq. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;