import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg md:text-xl text-indigo-600 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm John Doe
            </motion.p>
            <AnimatedText
              text="Crafting Digital Experiences"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            />
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A passionate <GradientText>Full Stack Developer</GradientText> specializing in building exceptional digital experiences that combine beautiful design with powerful functionality.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button variant="primary" icon={<ArrowRight size={20} />}>
                View Projects
              </Button>
              <Button variant="outline" icon={<Download size={20} />}>
                Download CV
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
                alt="John Doe"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;