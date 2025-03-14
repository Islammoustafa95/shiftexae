import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Play, X } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showReel, setShowReel] = useState(false);

  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, { scope: containerRef });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="http://shift-experience.com/wp-content/uploads/2023/09/y7v46w_1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
            Craft Extraordinary
            <br />
            <span className="text-gold">Experiences</span>
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-center mb-8 max-w-2xl text-gray-custom tracking-widest">
            WHERE BOUNDARIES END,
            <br />
            EXPERIENCES BEGIN
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="hero-text px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-colors duration-300"
          >
            Explore Our World
          </motion.button>

          {/* Watch Reel Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReel(true)}
            className="hero-text absolute bottom-12 right-12 flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-gold/20 rounded-full text-white hover:bg-black/70 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            WATCH REEL
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setShowReel(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            >
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
              >
                <source
                  src="http://shift-experience.com/wp-content/uploads/2023/09/y7v46w_1.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;