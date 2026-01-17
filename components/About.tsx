
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-40 px-6 flex flex-col items-center relative">
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-16 uppercase"
      >
        • THE PERSON BEHIND THE EDITS
      </motion.div>

      <div className="max-w-5xl text-center space-y-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[5.5rem] font-black leading-[1.05] tracking-tighter"
        >
          I'm 🧔🏻 Abhishek Chaudhary<br />
          Video Editor & Motion Designer<br />
          <span className="text-gray-500">5+ years crafting visuals.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Obsessed with the psychology of attention. I don't just "edit" videos; I engineer them to keep eyes glued to the screen. 
          Currently helping the world's top creators dominate the feed.
        </motion.p>

        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 text-left border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              THE ARSENAL
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Retention-optimized pacing and narrative flow.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Premium After Effects motion design & typography.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Custom sound design that adds massive production value.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-purple-500 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              WHY ME?
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Zero guesswork. Edits based on what actually performs.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Professional communication & seamless collaboration.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300 text-lg">
                <span className="text-white font-black text-xs mt-2">•</span>
                <span>Scale-ready workflows for high-volume creators.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
