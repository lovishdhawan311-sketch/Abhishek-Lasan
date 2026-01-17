
import React from 'react';
import { motion } from 'framer-motion';

export const TrustLogos: React.FC = () => {
  const logos = [
    { name: 'The Raavya Sarda Show', count: '211k+ subscribers', icon: '🎙️' },
    { name: 'Elite Overseas', count: '12k+ Followers', icon: '🌎' },
    { name: 'Inayat Kaur Bajaj', count: '153k+ Followers', icon: '💃' },
    { name: 'Sr. Adv. N. Hariharan', count: '10k+ Followers', icon: '⚖️' },
    { name: 'ISKCON Dwarka', count: '195k+ Followers', icon: '🕉️' },
    { name: 'Influennz Skincare', count: '50k+ Followers', icon: '✨' },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase"
        >
          • IMPACTFUL COLLABORATIONS
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-300">
          Trusted by <span className="text-white font-serif italic">Many Creators</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden py-12 border-y border-white/5 group">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-5 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                {logo.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white/90 tracking-tight">{logo.name}</span>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-0.5">{logo.count}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
