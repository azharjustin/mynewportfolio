import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Coffee, Globe } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const features = [
  { icon: <Code className="w-6 h-6" />, text: "Clean Code Enthusiast" },
  { icon: <Heart className="w-6 h-6" />, text: "Passionate About UI/UX" },
  { icon: <Coffee className="w-6 h-6" />, text: "Coffee Powered" },
  { icon: <Globe className="w-6 h-6" />, text: "Global Mindset" }
];

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate developer crafting beautiful and functional web experiences"
      className="bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
            alt="John Doe"
            className="rounded-2xl shadow-2xl relative z-10"
          />
        </motion.div>
        
        <div className="space-y-6">
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm a passionate Full Stack Developer with 5+ years of experience in building web applications. I love creating elegant solutions to complex problems and turning ideas into reality through code.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {features.map((item, index) => (
              <Card key={index} className="p-4" hover={false}>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;