
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import SpecsSection from '@/components/SpecsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);

  return (
    <motion.div 
      className="min-h-screen w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <SpecsSection />
      <CtaSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
