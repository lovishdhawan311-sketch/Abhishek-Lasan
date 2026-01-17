
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Clock, Users } from 'lucide-react';

const CountUp = ({ value, label }: { value: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += Math.max(1, Math.floor(end / 100));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-6xl md:text-7xl font-black mb-2 tracking-tighter text-white">
        {count}{suffix}
      </div>
      <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[11px]">{label}</div>
    </div>
  );
};

export const ValueProp: React.FC = () => {
  const stats = [
    { icon: <Eye size={24} />, value: '60M+', label: 'Views Generated' },
    { icon: <Clock size={24} />, value: '7+', label: 'Years Experience' },
    { icon: <Users size={24} />, value: '100+', label: 'Creators Served' },
  ];

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center mb-32 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black leading-[1.1] mb-10 tracking-tight"
        >
          Stop being <span className="text-gray-500">ignored</span><br />
          Get content that <span className="text-gradient">converts</span><br />
          and scales your <span className="font-serif italic font-light italic text-white/90">brand 🚀</span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          The attention economy is brutal. I bridge the gap between creative storytelling and analytical retention to make your content perform.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="group glass-card rounded-[2.5rem] p-12 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500 group-hover:scale-110">
              {stat.icon}
            </div>
            <CountUp value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
