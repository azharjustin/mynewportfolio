import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Coffee, Sparkles } from 'lucide-react';
import GradientText from './ui/GradientText';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
            <img
              // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=450"
              src="/mypic.jpg"
              alt="Azhar"
              className="rounded-2xl shadow-2xl relative z-10 h-[450px] w-[600px] object-cover"
            />
          </motion.div>
          
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate <GradientText>Full Stack Developer</GradientText> with 2 years of experience in building web applications. I love creating elegant solutions to complex problems and turning ideas into reality through code.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: <Code className="w-6 h-6" />, text: "Clean Code Enthusiast" },
                { icon: <Heart className="w-6 h-6" />, text: "Passionate About Problem Solving" },
                { icon: <Coffee className="w-6 h-6" />, text: "Coffee Powered" },
                { icon: <Sparkles className="w-6 h-6" />, text: "Unique Mindset" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;