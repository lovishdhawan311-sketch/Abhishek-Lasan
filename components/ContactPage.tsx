
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Instagram, Linkedin, Twitter, MessageSquare, ArrowLeft } from 'lucide-react';

interface ContactPageProps {
  onClose: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-[#030305] flex flex-col p-6 lg:p-12 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col pb-20">
        {/* Header - Fixed to top of scroll area */}
        <div className="flex justify-between items-center mb-10 md:mb-20">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">abhi</span>
            <span className="text-gray-500">.mov</span>
          </div>
          <motion.button 
            onClick={onClose}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold text-sm"
          >
            <ArrowLeft size={18} />
            Back to Home
          </motion.button>
        </div>

        {/* Content - Reordered for Mobile UX optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Form - Primary Action, moved to top on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="order-1 lg:order-2 glass-card p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-blue-500/10 pointer-events-none">
               <Mail size={120} />
            </div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Project Details</label>
                <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors group">
                SEND MESSAGE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information & IDs - Secondary info, moved below Form on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-[7rem] lg:text-[8rem] font-black leading-none tracking-tighter mb-8 md:mb-12">
              LET'S <span className="text-gradient">CREATE</span><br />
              TOGETHER
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 font-medium">
              Ready to take your content to the next level? Reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <a href="mailto:abhishek.chaudhary@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-xl font-bold">abhishek.chaudhary@gmail.com</div>
                </div>
              </a>
              
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Instagram DM</div>
                  <div className="text-xl font-bold">@abhi.mov</div>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Discord ID</div>
                  <div className="text-xl font-bold">abhi_mov#0000</div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                {[
                  { icon: <Linkedin size={20}/>, label: 'LinkedIn' },
                  { icon: <Twitter size={20}/>, label: 'Twitter' }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
    </motion.div>
  );
};
