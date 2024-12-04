import React from 'react';
import { Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Barbarik Ai',
    period: 'Jun 2024 - Present',
    description: 'Developed and maintained the applications using modern technologies.',
    achievements: [
      'Delivered 3+ successful projects',
      'Developed and maintained web applications using React.js, Redux, Node.js and Mongo DB skills',
      'Enhanced Application performance and user experience up-to 70% ',
      'Utilized Git for version control and collaborated with team members using GitHub.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Infynect Labs Private Limited',
    period: 'Dec 2022 - May 2024',
    description: 'Developed and maintained multiple client projects.',
    achievements: [
      'Delivered 2+ successful projects',
      'Reduced deployment time by 60%',
      'Worked with PostgreSQL and MongoDB databases for efficient data storage and retrieval.',
      'Mentored junior developers'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
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
                    className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <span className="text-sm text-blue-600 font-semibold">{exp.period}</span>
                    </div>
                    <div className="text-cyan-600 font-semibold mb-2">{exp.company}</div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 text-gray-700"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Star className="w-4 h-4 text-blue-500" />
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

export default Experience;