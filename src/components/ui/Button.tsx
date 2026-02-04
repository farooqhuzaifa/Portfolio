import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href
}) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer inline-block text-center";
  
  const variants = {
    primary: "bg-green-400 text-black hover:bg-green-300 shadow-lg shadow-green-400/25 hover:shadow-green-400/40",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
    outline: "border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
  };

  const ButtonComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <ButtonComponent
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;