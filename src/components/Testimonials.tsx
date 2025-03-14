import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Noha Genena',
    role: 'Assistant Marketing Manager - Orascom Development',
    content: "Shift agency is extremely professional, they always deliver exceptional results when it comes to activations and production. The team is extremely responsive and dedicated. One of the best agencies we've worked with!",
    rating: 5,
  },
  {
    name: 'Soha Sabry',
    role: 'Marketing Director - Emaar Misr',
    content: "Working with shift agency is always a pleasant experience. They constantly show utmost innovation, dedication and hard work towards the projects they manage thanks to a solid management and an organized team structure. They are also known for their full ownership towards any project they manage which positively reflects on the quality they deliver.",
    rating: 5,
  },
  {
    name: 'Fayza El Shabraway',
    role: 'Marketing Manager - Mall of Arabia',
    content: 'SHIFT; One of the best, most creative and dedicated teams to work with!',
    rating: 5,
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What our clients say about their experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20"
              whileHover={{ y: -10 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gold">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;