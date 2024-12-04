import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Task Management App',
    description: 'Full stack task management application with Login, Google signup, Drag and drop feature.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    technologies: ['React.js', 'Javascript','Node.js','Express', 'MongoDB'],
    github: 'https://github.com/azharjustin/Task-manager-Repo',
    live: 'https://demo-task-manager-app.netlify.app'
  },
  {
    title: 'User Details Table(CRUD)',
    description: 'A React Front-end CRUD project with Mock api backend',
    image: 'https://img.freepik.com/free-photo/businessman-application-human-digital-business_1150-1729.jpg?t=st=1733307234~exp=1733310834~hmac=3eac338e44731d012b5c5a3f689d70f567ed21556888d7b52b916603918cfdab&w=996',
    technologies: ['React.js', 'Javascript', 'Material UI', 'Mock API'],
    github: 'https://github.com/azharjustin/user-crud-app',
    live: 'https://users-management-dashboard-app.netlify.app/'
  },
  {
    title: 'Quiz Game Application',
    description: 'A React front-end Quiz game application',
    image: 'https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?t=st=1733307902~exp=1733311502~hmac=87143aec63adf0dd5fc9a912a97d50f579d7b7cbd9b13629d5c57bb70f4fe34f&w=1380',
    technologies: ['React.js', 'Javascript', ''],
    github: 'https://github.com/azharjustin/react-quiz',
    live: 'https://eloquent-mousse-2cf4f8.netlify.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-2 md:px-3 py-1 bg-gray-100 text-xs md:text-sm rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target='_blank'
                    className="flex items-center text-gray-600 hover:text-gray-900 text-sm md:text-base"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target='_blank'
                    className="flex items-center text-gray-600 hover:text-gray-900 text-sm md:text-base"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;