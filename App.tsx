
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustLogos } from './components/TrustLogos';
import { ValueProp } from './components/ValueProp';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';

// Premium smooth scroll utility with extremely snappy duration
const smoothScrollTo = (targetY: number, duration: number = 600) => {
  const startY = window.pageYOffset;
  const difference = targetY - startY;
  let startTime: number | null = null;

  // Cubic bezier-like easing that starts very fast (power of 4)
  const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const progress = Math.min(time / duration, 1);
    const easedProgress = easeOutQuart(progress);
    
    window.scrollTo(0, startY + (difference * easedProgress));
    
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavClick = useCallback((href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (isContactOpen) {
      setIsContactOpen(false);
      // Slightly reduced delay to wait for contact page exit animation
      setTimeout(() => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const offset = 80;
          const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          smoothScrollTo(targetY);
        }
      }, 500);
    } else if (element) {
      const offset = 80;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
      // Triggers IMMEDIATELY on click
      smoothScrollTo(targetY);
    }
  }, [isContactOpen]);

  return (
    <div className="relative bg-[#030305] min-h-screen selection:bg-white/10">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[160px]" />
      </div>

      <Navbar onConnectClick={() => setIsContactOpen(true)} onNavClick={handleNavClick} />
      
      <AnimatePresence mode="wait">
        {!isContactOpen ? (
          <motion.div 
            key="home"
            className="relative z-10"
          >
            <Hero onWorkClick={() => handleNavClick('#edits')} />
            <TrustLogos />
            <ValueProp />
            
            <div id="edits">
              <PortfolioGrid 
                title="Viral Short Form Edits" 
                subtitle="Built for retention, loops, and saves. High-performance content for Instagram, Shorts, and TikTok."
                category="REELS"
                items={[1, 2, 3, 4, 5, 6]}
                type="vertical"
              />
            </div>

            <div id="designs">
              <PortfolioGrid 
                title="Teasers and Long form Edits" 
                subtitle="Motion Graphics, Podcasts and YouTube content edited for storytelling and high-retention engagement."
                category="YOUTUBE"
                items={[1, 2, 3, 4]}
                type="horizontal"
              />
            </div>

            <div id="thumbnails">
              <PortfolioGrid 
                title="Thumbnails that get clicked" 
                subtitle="High-converting YouTube thumbnails designed to boost CTR and stand out in crowded feeds."
                category="THUMBNAILS"
                items={[1, 2, 3, 4]}
                type="grid"
              />
            </div>

            <div id="testimonial">
              <Testimonials />
            </div>

            <div id="about">
              <About />
            </div>

            <CTASection onConnect={() => setIsContactOpen(true)} />
            <Footer onNavClick={handleNavClick} />
          </motion.div>
        ) : (
          <ContactPage key="contact" onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
