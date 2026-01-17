
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const footerLinks = [
    { name: 'Edits', href: '#edits' },
    { name: 'Designs', href: '#designs' },
    { name: 'Testimonials', href: '#testimonial' },
    { name: 'About', href: '#about' },
  ];

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="flex gap-8 mb-16">
          <motion.a 
            href="#" 
            whileHover={{ y: -5, color: '#fff' }}
            className="p-4 rounded-full border border-white/10 text-gray-500 transition-all"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ y: -5, color: '#fff' }}
            className="p-4 rounded-full border border-white/10 text-gray-500 transition-all"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ y: -5, color: '#fff' }}
            className="p-4 rounded-full border border-white/10 text-gray-500 transition-all"
          >
            <Youtube size={20} />
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {footerLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); onNavClick(link.href); }}
              whileHover={{ scale: 1.05, color: '#fff' }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-1 group cursor-default">
          <span className="text-white">abhi</span>
          <span className="text-gray-500">.mov</span>
        </div>

        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em] mb-12">
          © 2025 Copyright by Abhishek. Keep Creating.
        </div>

        <div className="flex flex-col items-center opacity-40">
           <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};
