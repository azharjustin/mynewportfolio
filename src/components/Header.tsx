import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl sm:text-2xl font-bold text-gray-800">
            Azhar
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          <motion.button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
                <div className="flex justify-center space-x-6 pt-4">
                  <SocialLinks />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
    <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
    <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
    <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
  </>
);

const MobileNavLinks = ({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) => (
  <>
    {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
      <motion.a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-600 hover:text-gray-900 transition-colors text-lg text-center py-2"
        onClick={() => setIsMenuOpen(false)}
        whileTap={{ scale: 0.95 }}
      >
        {item}
      </motion.a>
    ))}
  </>
);

const SocialLinks = () => (
  <>
    <motion.a 
      href="https://github.com/azharjustin" 
      target='_blank'
      className="text-gray-600 hover:text-gray-900 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Github size={20} />
    </motion.a>
    <motion.a 
      href="https://www.linkedin.com/in/mohamed-azharudeen-04966b226/" 
      target='_blank'
      className="text-gray-600 hover:text-gray-900 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Linkedin size={20} />
    </motion.a>
    <motion.a 
      href="mailto:azharjustin37@gmail.com" 
      target='_blank'
      className="text-gray-600 hover:text-gray-900 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Mail size={20} />
    </motion.a>
  </>
);

export default Header;