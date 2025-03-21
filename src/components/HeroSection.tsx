
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orb1Ref.current || !orb2Ref.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX1 = (clientX - centerX) / 40;
      const moveY1 = (clientY - centerY) / 40;
      
      const moveX2 = (clientX - centerX) / -50;
      const moveY2 = (clientY - centerY) / -50;
      
      orb1Ref.current.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
      orb2Ref.current.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background orbs */}
      <div 
        ref={orb1Ref}
        className="absolute -top-40 -left-40 w-96 h-96 bg-zara-indigo/20 rounded-full blur-3xl opacity-50 animate-float"
      />
      <div 
        ref={orb2Ref}
        className="absolute -bottom-60 -right-40 w-[32rem] h-[32rem] bg-zara-blue/20 rounded-full blur-3xl opacity-50 animate-float"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Hero content */}
      <motion.div 
        className="z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="inline-block mb-2 px-4 py-1.5 rounded-full bg-zara-blue/10 border border-zara-blue/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-sm font-medium text-zara-blue">Introducing Zara AI</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-gradient-blue">The Next Generation</span>
          <br />
          <span>AI Assistant</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-zara-gray mb-10 max-w-3xl mx-auto text-balance leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Zara AI combines advanced conversational intelligence with real-time capabilities for web design, cybersecurity, and education support—all in a beautifully designed experience.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button className="bg-zara-indigo hover:bg-zara-indigo/90 text-white px-8 py-6 rounded-full text-lg font-medium">
            Try Zara AI
          </Button>
          <Button variant="outline" className="border-zara-gray/30 hover:bg-secondary px-8 py-6 rounded-full text-lg font-medium">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-zara-gray/30 flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-zara-blue rounded-full"
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
