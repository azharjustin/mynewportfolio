import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Palette className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js', 'HTML & CSS']
  },
  {
    title: 'Backend Development',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Node.js', 'Javascript', 'Express']
  },
  {
    title: 'Database & Cloud',
    icon: <Database className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'AWS']
  },
  {
    title: 'Tools & Others',
    icon: <Globe className="w-6 h-6" />,
    skills: ['Git', 'GitLab', 'VS code', 'Agile', 'REST APIs', 'Postman']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-white rounded-full text-sm shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;