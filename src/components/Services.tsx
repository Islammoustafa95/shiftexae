import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Store,
  Users,
  Umbrella,
  Calendar,
  Building2,
  Lightbulb,
  Palette,
  Camera,
  Music,
  Radio
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    icon: Lightbulb,
    title: 'CREATIVE PLANNING & STRATEGY',
    description: 'Strategic event planning and creative conceptualization'
  },
  {
    icon: Palette,
    title: '2D & 3D DESIGNS',
    description: 'Innovative visual designs and spatial planning'
  },
  {
    icon: Camera,
    title: 'PRODUCTION',
    description: 'Full-scale event production and management'
  },
  {
    icon: Music,
    title: 'ENTERTAIN',
    description: 'Entertainment planning and coordination'
  },
  {
    icon: Radio,
    title: 'ON GROUND OPERATION',
    description: 'Seamless on-site event execution'
  }
];

const services = [
  {
    icon: Store,
    title: 'RETAIL/MALL CAMPAIGNS',
    description: 'Creating engaging retail experiences that drive foot traffic and boost customer engagement through innovative activations.',
    image: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?auto=format&fit=crop&q=80'
  },
  {
    icon: Users,
    title: 'COMMUNITY EVENTS',
    description: 'Bringing people together through meaningful community gatherings that create lasting connections and memories.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80'
  },
  {
    icon: Umbrella,
    title: 'BEACH ACTIVATION',
    description: 'Transforming beachside locations into vibrant experiential spaces that captivate and engage audiences.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
  },
  {
    icon: Calendar,
    title: 'SEASONAL CAMPAIGNS',
    description: 'Crafting themed experiences that capitalize on seasonal opportunities to create maximum impact and engagement.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80'
  },
  {
    icon: Building2,
    title: 'CORPORATE EVENTS',
    description: 'Delivering professional corporate experiences that align with business objectives while engaging attendees.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
  }
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.service-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-lg text-gray-custom max-w-2xl mx-auto">
            Transforming ideas into extraordinary experiences
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 bg-black/30 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <category.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-sm font-bold tracking-wider">{category.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-gold/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="relative h-full flex flex-col justify-center p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-8 h-8 text-gold" />
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wider">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-custom max-w-2xl">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;