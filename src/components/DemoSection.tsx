
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Laptop, MessageSquare, Zap } from 'lucide-react';

const DemoSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const mockChat = [
    { id: 1, sender: 'user', message: 'Can you help me with a React component?' },
    { id: 2, sender: 'zara', message: 'Of course! I can help you create a React component. What functionality are you looking for?' },
    { id: 3, sender: 'user', message: 'I need a responsive navbar with a mobile menu' },
    { id: 4, sender: 'zara', message: 'I\'ll create that for you! Here\'s a responsive navbar component with mobile menu toggle, animations, and proper accessibility...' }
  ];
  
  return (
    <section ref={ref} id="demo" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            See <span className="text-gradient-purple">Zara AI</span> in Action
          </motion.h2>
          
          <motion.p 
            className="text-lg text-zara-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience how Zara helps with everything from coding assistance to cybersecurity alerts
          </motion.p>
        </div>
        
        {/* Demo Showcase */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Chat Interface */}
          <motion.div
            className="glassmorphism rounded-2xl p-6 shadow-lg order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zara-gray/10">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-zara-blue to-zara-indigo flex items-center justify-center text-white font-bold">
                Z
              </div>
              <h3 className="font-semibold">Zara AI Chat</h3>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto p-2">
              {mockChat.map(item => (
                <div 
                  key={item.id} 
                  className={`flex ${item.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl 
                      ${item.sender === 'user' 
                        ? 'bg-zara-blue/10 text-right rounded-tr-none' 
                        : 'bg-zara-purple/10 rounded-tl-none'}`}
                  >
                    <p className="text-sm">{item.message}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center gap-2 border-t border-zara-gray/10 pt-4 mt-4">
                <input 
                  type="text" 
                  className="w-full bg-white/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zara-blue/50" 
                  placeholder="Ask Zara AI something..." 
                />
                <button className="bg-zara-blue text-white rounded-full p-2">
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Features */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex gap-4 items-start">
              <div className="bg-zara-indigo/10 p-3 rounded-xl">
                <Laptop className="h-6 w-6 text-zara-indigo" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Code Generation</h3>
                <p className="text-zara-gray">Zara creates optimized code for web applications, with real-time feedback and explanation.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-zara-blue/10 p-3 rounded-xl">
                <MessageSquare className="h-6 w-6 text-zara-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
                <p className="text-zara-gray">Have natural, context-aware conversations that remember your preferences and history.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-zara-purple/10 p-3 rounded-xl">
                <Zap className="h-6 w-6 text-zara-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Capabilities</h3>
                <p className="text-zara-gray">Get live data, weather updates, cybersecurity alerts, and more through Zara's connected services.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
