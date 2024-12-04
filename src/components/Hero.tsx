import { ArrowRight, FileSymlink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Full Stack Developer"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            />
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 px-4 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building beautiful, functional, and scalable web applications with modern technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1u4eHtyzmxpg-8ojxiL4eKuG-iWo0Ti5t/view"
                target='_blank'
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
                <FileSymlink className="ml-2" size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 px-4 md:px-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              // src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=700"
              src="/developer.jpg"
              alt="Developer"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;