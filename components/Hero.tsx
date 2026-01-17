
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkClick }) => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-24 pb-12">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] font-bold tracking-[0.2em] text-blue-400 mb-8 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            BASED IN INDIA
          </motion.div>

          <h1 className="text-6xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 flex flex-col">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white"
            >
              VIDEO
            </motion.span>
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gradient"
            >
              EDITOR
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-10"
          >
            I craft videos that stop the scroll and turn viewers into loyal fans. Specializing in viral retention and premium motion design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <motion.button 
              onClick={onWorkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View My Work
            </motion.button>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" className="grayscale" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-[10px] font-bold text-black">
                +100
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual */}
        <div className="relative lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0C]"
          >
            <img 
              src="https://i.postimg.cc/fy6w7XdN/Gemini-Generated-Image-50znlq50znlq50zn-(1).png" 
              alt="Abhishek Chaudhary" 
              className="w-full h-auto object-cover filter contrast-[1.05] brightness-90 mask-hero min-h-[500px]"
            />
          </motion.div>
          
          {/* Floating Element 1 - Static but with entrance animation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -top-6 -right-6 glass-card p-6 rounded-3xl z-20 hidden md:block shadow-2xl"
          >
            <div className="text-3xl font-bold mb-1">60M+</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Views</div>
          </motion.div>

          {/* Floating Element 2 - Subtle bounce but no scroll shift */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 -left-8 glass-card p-4 rounded-2xl z-20 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
               <span className="text-xl">⚡</span>
            </div>
            <div>
              <div className="text-sm font-bold">Fast Turnaround</div>
              <div className="text-[10px] text-gray-500 uppercase">24-48h avg.</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};
