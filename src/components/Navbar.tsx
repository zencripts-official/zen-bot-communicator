
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleTryZaraClick = () => {
    window.open('https://zenzara-ai.netlify.app/', '_blank');
  };
  
  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'glassmorphism shadow-sm py-3' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <motion.div 
              className="h-10 w-10 rounded-xl bg-gradient-to-br from-zara-blue to-zara-indigo flex items-center justify-center text-white font-bold text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Z
            </motion.div>
            <span className="font-bold text-xl">Zara AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-zara-blue transition-colors">Features</a>
            <a href="#specs" className="text-foreground hover:text-zara-blue transition-colors">Specs</a>
            <a href="#roadmap" className="text-foreground hover:text-zara-blue transition-colors">Roadmap</a>
            <a href="#faq" className="text-foreground hover:text-zara-blue transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="bg-zara-blue hover:bg-zara-blue/90 text-white rounded-full"
              onClick={handleTryZaraClick}
            >
              Try Zara
            </Button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center space-x-1">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-zara-blue to-zara-indigo flex items-center justify-center text-white font-bold text-xl">
                  Z
                </div>
                <span className="font-bold text-xl">Zara AI</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 p-6">
              <a 
                href="#features" 
                className="text-foreground text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#specs" 
                className="text-foreground text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Specs
              </a>
              <a 
                href="#roadmap" 
                className="text-foreground text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#faq" 
                className="text-foreground text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
            
            <div className="mt-auto p-6">
              <Button 
                className="bg-zara-blue hover:bg-zara-blue/90 text-white rounded-full w-full py-6 text-lg"
                onClick={handleTryZaraClick}
              >
                Try Zara
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
