
import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Abhishek's editing is next level. He understands the rhythm of short-form content like no one else. Our engagement skyrocketed by 400% in a month.",
      author: "Inayat Kaur Bajaj",
      role: "Vocal Artist & Creator",
      img: "https://i.pravatar.cc/100?img=47"
    },
    {
      text: "The motion graphics he added to our promo video made it look high-end. Efficient, creative, and professional beyond his years.",
      author: "Influennz Skincare",
      role: "Advanced Skincare Solutions",
      img: "https://i.pravatar.cc/100?img=32"
    },
    {
      text: "Quick turnaround without compromising on quality. Abhi knows exactly what works on YouTube right now to keep retention above 70%.",
      author: "Rohit Marwah",
      role: "Numerology Expert",
      img: "https://i.pravatar.cc/100?img=12"
    },
    {
        text: "I was skeptical about social media but his content makes our brand look intriguing without being gimmicky. Truly understands brand voice.",
        author: "DCC Animal Hospital",
        role: "Pet Care & Animal Hospital",
        img: "https://i.pravatar.cc/100?img=5"
      },
      {
        text: "This is INSANE. My episodes finally look like they belong next to the big industry podcasts. The audio-visual sync is perfection.",
        author: "Raavya Sarda",
        role: "Host - The Raavya Sarda Podcast",
        img: "https://i.pravatar.cc/100?img=21"
      },
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase"
        >
          • CLIENT VOICES
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Reviewed by Brands <span className="font-serif italic font-light text-gray-500">and creators</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-card p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/5 transition-colors duration-500 shadow-xl"
          >
            <div>
               <div className="flex gap-1 mb-8">
                 {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500/80 text-xs">★</span>)}
               </div>
               <p className="text-gray-300 text-xl leading-relaxed font-medium mb-12 group-hover:text-white transition-colors">
                "{t.text}"
               </p>
            </div>
            <div className="flex items-center gap-5 pt-8 border-t border-white/5">
              <div className="relative">
                <img src={t.img} className="w-14 h-14 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" alt={t.author} />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#030305] flex items-center justify-center text-[8px] font-bold">✓</div>
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">{t.author}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
