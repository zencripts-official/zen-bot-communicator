
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { CheckCircle2, BrainCircuit, Globe, Shield, BookOpen, Code } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className="glassmorphism p-6 rounded-2xl h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <div className="bg-gradient-to-br from-zara-blue to-zara-indigo p-3 rounded-lg w-fit mb-4">
        <div className="text-white w-6 h-6">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zara-gray leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(featuresRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: <BrainCircuit />,
      title: "Advanced AI Personality",
      description: "Balancing professionalism with friendliness while delivering context-aware insights and adapting to user interactions.",
      delay: 1
    },
    {
      icon: <CheckCircle2 />,
      title: "Intelligent Conversation",
      description: "Remembers your name, maintains context across conversations, and provides positive encouragement with multi-language support.",
      delay: 2
    },
    {
      icon: <Globe />,
      title: "Real-Time Capabilities",
      description: "Fetches live data including weather updates, news, cybersecurity alerts, and cryptocurrency prices when you need it.",
      delay: 3
    },
    {
      icon: <Shield />,
      title: "Security & Protection",
      description: "Detects online threats in real-time and educates users on digital security best practices to keep you safe online.",
      delay: 4
    },
    {
      icon: <BookOpen />,
      title: "Education Support",
      description: "Step-by-step explanations for coding, physics, and exam preparations with a smart tutor mode to break down complex topics.",
      delay: 5
    },
    {
      icon: <Code />,
      title: "Web Design Helper",
      description: "Get code suggestions for modern, responsive websites and learn design optimization using advanced AI techniques.",
      delay: 6
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute top-40 -right-40 w-96 h-96 bg-zara-purple/10 rounded-full blur-3xl opacity-50"
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={featuresRef}
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
            <span className="text-gradient-purple">Powerful Features</span> That Set Zara Apart
          </motion.h2>
          <motion.p 
            className="text-lg text-zara-gray max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.2 }}
          >
            Designed with attention to every detail, Zara combines cutting-edge AI capabilities with a beautiful, user-friendly experience.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
