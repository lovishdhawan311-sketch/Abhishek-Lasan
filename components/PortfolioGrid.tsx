
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface PortfolioGridProps {
  title: string;
  subtitle: string;
  category: string;
  items: any[];
  type: 'vertical' | 'horizontal' | 'grid';
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ title, subtitle, category, items, type }) => {
  return (
    <section className="py-40 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-blue-400 mb-6 uppercase"
        >
          • PORTFOLIO
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          {title}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>

      <div className={`max-w-7xl mx-auto ${
        type === 'vertical' ? 'grid grid-cols-2 md:grid-cols-3 gap-6' : 
        type === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-2 gap-10' : 
        'grid grid-cols-1 md:grid-cols-2 gap-8'
      }`}>
        {items.map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden bg-[#0A0A0C] border border-white/5 rounded-3xl cursor-pointer shadow-2xl ${
              type === 'vertical' ? 'aspect-[9/16]' : 
              type === 'horizontal' ? 'aspect-video' : 
              'aspect-video'
            }`}
          >
            <img 
              src={`https://picsum.photos/seed/${category}-${idx + 42}/800/1400`} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              alt="Work Item"
            />
            
            {/* Glass Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl"
               >
                  <Play fill="currentColor" size={28} className="ml-1" />
               </motion.div>
            </div>
            
            {/* Subtle glow border */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
