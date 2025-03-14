import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Lightbulb, Heart, Zap, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.about-animate', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  const values = [
    {
      icon: Lightbulb,
      title: 'CREATIVITY',
      description: 'INSPIRING INNOVATIVE SOLUTIONS AND IDEAS THAT TRANSFORM CONCEPTS INTO EXTRAORDINARY EXPERIENCES'
    },
    {
      icon: Heart,
      title: 'DEDICATION',
      description: 'A COMMITTED DRIVE TO DELIVER EXCEPTIONAL EXPERIENCES WITH PASSION, PRECISION AND CLIENT SATISFACTION'
    },
    {
      icon: Zap,
      title: 'VIBRANCY',
      description: 'WORKSPACE FILLED WITH ENERGY, ENTHUSIASM, AND LIVELY CREATIVITY'
    },
    {
      icon: Trophy,
      title: 'ACHIEVEMENT',
      description: 'GOALS MET WITH EXCELLENCE AND MEASURABLE SUCCESS'
    }
  ];

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <motion.h2 
              className="about-animate text-4xl md:text-5xl font-display font-bold"
            >
              Crafting Extraordinary <span className="text-gold">Moments</span>
            </motion.h2>
            <motion.p className="about-animate text-lg text-gray-custom leading-relaxed">
              At Shift Experience, we believe in transforming ordinary occasions into extraordinary memories. Our passion lies in creating immersive experiences that leave lasting impressions and stories worth sharing.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="about-animate px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
          <motion.div 
            className="about-animate relative h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Luxury event setup"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Experience Brands Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <motion.h2 
              className="about-animate text-4xl md:text-5xl font-display font-bold leading-tight"
            >
              We create the world's most talked-about <span className="text-gold">Experience Brands</span>.
            </motion.h2>
            <motion.p className="about-animate text-lg text-gray-custom leading-relaxed">
              No one sets out to be average. No one aspires to be ordinary. Shift Experience is an experiential marketing agency that exists to reimagine what an experience can be. We do that by pushing the boundaries of what's possible in every format — virtual, live or hybrid.
            </motion.p>
            <div className="grid grid-cols-2 gap-8">
              <div className="about-animate">
                <div className="text-4xl font-bold text-gold mb-2">10+</div>
                <div className="text-gray-custom">Years of experience</div>
              </div>
              <div className="about-animate">
                <div className="text-4xl font-bold text-gold mb-2">200x</div>
                <div className="text-gray-custom">Total events</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <motion.div 
              className="about-animate relative h-[300px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                alt="Event experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="about-animate relative h-[300px] rounded-lg overflow-hidden mt-8"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                alt="Brand experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div 
            className="about-animate p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-gold/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-bold">MISSION</h3>
            </div>
            <p className="text-gray-custom text-lg leading-relaxed">
              To craft unforgettable events that celebrate life's key moments, combining creativity, precision, and personalized service to deliver exceptional experiences.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="about-animate p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-gold/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-bold">VISION</h3>
            </div>
            <p className="text-gray-custom text-lg leading-relaxed">
              To be Egypt's leading event planning agency, recognized for innovation, excellence, and unforgettable experiences that surpass client expectations and redefine industry standards.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <motion.h2 
            className="about-animate text-3xl md:text-4xl font-bold mb-4"
          >
            OUR <span className="text-gold">VALUES</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="about-animate p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-gold/20 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <value.icon className="w-12 h-12 text-gold mb-4" />
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-custom">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;