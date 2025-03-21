
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Terminal, Globe, Code } from 'lucide-react';

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
  delay: number;
}

const SpecCard: React.FC<SpecCardProps> = ({ icon, title, features, gradientFrom, gradientTo, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className="glassmorphism p-6 rounded-2xl flex flex-col relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`} />
      
      <div className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-3 rounded-lg w-fit mb-4`}>
        <div className="text-white w-6 h-6">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      <ul className="space-y-3 mt-auto">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-center gap-2"
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ delay: delay * 0.2 + idx * 0.1 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#0A84FF"/>
            </svg>
            <span className="text-zara-gray">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const SpecsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const specs = [
    {
      icon: <Terminal />,
      title: "CLI-Based Zara",
      features: [
        "Llama 2 local model",
        "SQLite conversation history",
        "Offline processing capability",
        "Basic threat detection",
        "Low-latency responses"
      ],
      gradientFrom: "zara-blue",
      gradientTo: "zara-cyan",
      delay: 1
    },
    {
      icon: <Globe />,
      title: "Web-Based Zara",
      features: [
        "Gemini AI 2.0 integration",
        "Glossy Nebula UI",
        "Live data integration",
        "Voice & animation support",
        "Real-time cybersecurity alerts"
      ],
      gradientFrom: "zara-indigo",
      gradientTo: "zara-purple",
      delay: 2
    },
    {
      icon: <Code />,
      title: "Zara API (Coming Soon)",
      features: [
        "Developer integration",
        "Custom application support",
        "Hosted Llama 2 model access",
        "Advanced cybersecurity features",
        "Flexible configuration options"
      ],
      gradientFrom: "zara-purple",
      gradientTo: "zara-pink",
      delay: 3
    }
  ];

  return (
    <section id="specs" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute top-20 -left-40 w-96 h-96 bg-zara-mint/10 rounded-full blur-3xl opacity-50"
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
            <span className="text-gradient-purple">Technical</span> Specifications
          </motion.h2>
          <motion.p 
            className="text-lg text-zara-gray max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.2 }}
          >
            Zara AI comes in multiple formats, each optimized for different use cases and environments.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <SpecCard 
              key={index}
              icon={spec.icon}
              title={spec.title}
              features={spec.features}
              gradientFrom={spec.gradientFrom}
              gradientTo={spec.gradientTo}
              delay={spec.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
