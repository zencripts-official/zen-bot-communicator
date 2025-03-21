
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MessageSquare, MessageCircle, User } from 'lucide-react';

interface Message {
  type: 'ai' | 'user';
  content: string;
}

const messages: Message[] = [
  {
    type: 'ai',
    content: 'Hello! I'm Zara, your AI assistant. How can I help you today?'
  },
  {
    type: 'user',
    content: 'Can you help me with designing a responsive website?'
  },
  {
    type: 'ai',
    content: 'Absolutely! I can provide code suggestions for a modern responsive website. Would you like me to explain key principles first, or should we start with some HTML/CSS templates?'
  },
  {
    type: 'user',
    content: 'Let's start with the key principles please.'
  },
  {
    type: 'ai',
    content: 'Great choice! Here are the key principles for responsive web design:\n\n1. Fluid Grid Layouts - Use percentages instead of fixed units\n2. Flexible Images - Set max-width: 100% to scale images\n3. Media Queries - Adapt layouts based on viewport size\n4. Mobile-First Approach - Design for small screens first\n5. Consistent Navigation - Ensure usability across devices\n\nWould you like me to expand on any of these points?'
  }
];

const ChatMessage: React.FC<{ message: Message; delay: number }> = ({ message, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const isUser = message.type === 'user';
  
  return (
    <motion.div
      ref={ref}
      className={`flex items-start gap-3 max-w-2xl ${isUser ? 'ml-auto' : 'mr-auto'}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.3 }}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-zara-blue to-zara-indigo flex items-center justify-center text-white">
          <MessageCircle size={20} />
        </div>
      )}
      <div className={`p-4 rounded-2xl ${isUser 
        ? 'bg-zara-indigo text-white rounded-tr-none' 
        : 'glassmorphism text-foreground rounded-tl-none'
      }`}>
        <p className="whitespace-pre-line">{message.content}</p>
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zara-gray flex items-center justify-center text-white">
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
};

const DemoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-zara-light/50 relative overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-zara-cyan/10 rounded-full blur-3xl opacity-50"
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={sectionRef}
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            See <span className="text-gradient-blue">Zara in Action</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-zara-gray max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.2 }}
          >
            Experience natural, intelligent conversations with human-like understanding and contextual awareness.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="glassmorphism rounded-2xl p-6 md:p-8 mx-auto relative overflow-hidden max-w-4xl"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-zara-blue via-zara-indigo to-zara-purple" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="px-3 py-1 rounded-full bg-zara-gray/10 text-xs font-medium text-zara-gray">
              Zara AI Chat
            </div>
          </div>
          
          <div className="space-y-6">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} delay={index} />
            ))}
          </div>
          
          <div className="mt-6 relative">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full p-4 pr-12 rounded-full border border-zara-gray/20 focus:outline-none focus:ring-2 focus:ring-zara-blue/50"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zara-blue">
              <MessageSquare size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
