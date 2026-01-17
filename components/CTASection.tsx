
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

interface CTASectionProps {
  onConnect: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onConnect }) => {
  return (
    <section className="py-48 px-6 relative overflow-hidden">
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto glass-card rounded-[4rem] p-16 md:p-32 text-center relative z-10 overflow-hidden border border-white/10 shadow-3xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="flex justify-center gap-6 mb-16">
          <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-5xl shadow-inner border border-white/5"
          >
            😟
          </motion.div>
          <motion.div 
             animate={{ scale: [1.1, 1, 1.1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center text-5xl shadow-inner border border-blue-500/20"
          >
            🤩
          </motion.div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-tight">
          Ready to scale your brand<br />
          to <span className="text-gradient">new heights?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-medium">
          Join 100+ creators who have optimized their retention and scaled their visual identity with premium video editing.
        </p>

        <div className="flex flex-col items-center gap-10">
          <motion.button 
            onClick={onConnect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-white text-black px-14 py-7 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500"
          >
            Work With Me
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
          </motion.button>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <a href="mailto:abhishek.chaudhary@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              <Mail size={18} />
              Email
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              <Instagram size={18} />
              Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              <Youtube size={18} />
              YouTube
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em]">
          Currently accepting selective collaborations for Q2 2025
        </div>
      </motion.div>
    </section>
  );
};
