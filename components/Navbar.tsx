
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onConnectClick: () => void;
  onNavClick: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick, onNavClick }) => {
  const navLinks = [
    { name: 'Edits', href: '#edits' },
    { name: 'Designs', href: '#designs' },
    { name: 'Testimonials', href: '#testimonial' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] py-4"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2 glass-nav shadow-2xl shadow-black/40">
          <motion.a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-1 group"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white group-hover:text-blue-400 transition-colors">abhi</span>
            <span className="text-gray-500 group-hover:text-white transition-colors">.mov</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); onNavClick(link.href); }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="text-[13px] font-semibold text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
                
                <motion.span 
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-active:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
            ))}
          </div>

          <motion.button 
            onClick={onConnectClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-black text-[13px] font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 group relative overflow-hidden"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            Connect
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
