import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData---------------", formData)
    try {
      await axios.post('https://portfolio-backend-502n.onrender.com/api/send-message', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm md:text-base">azharjustin37@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm md:text-base">+91 96985 11598</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm md:text-base">Bangalore, India</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4 bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;