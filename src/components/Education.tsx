import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'Full stack web development course',
    institution: 'GUVI Geek',
    period: 'Dec 2021 - Sep 2022',
    description: 'Completed the MERN full stack web development course',
    achievements: ['Learned a new Technologies', 'Worked on a Real time Project', 'Developed a own Projects'],
    icon: <Book className="w-6 h-6" />
  },
  {
    title: 'Bachelor of Information Technology',
    institution: 'Bharathiyar College of Engineering and Technology',
    period: 'Jun 2017 - Oct 2021',
    description: 'Major in Information technology and Computer Science, Minor in Mathematics.',
    achievements: ['First Class Honors', 'Programming Competition Winner', 'Student Leadership Award'],
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Course Certification
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                   {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{edu.title}</h3>
                      <span className="text-sm text-purple-600 font-semibold">{edu.period}</span>
                    </div>
                    <div className="text-indigo-600 font-semibold mb-2">{edu.institution}</div>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 text-gray-700"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Award className="w-4 h-4 text-purple-500" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;