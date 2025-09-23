'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, MapPin } from 'lucide-react';

export default function About() {
  const skills = [
    'Python', 'SQL', 'Machine Learning', 'Data Analytics', 
    'Artificial Intelligence', 'Flask APIs', 'Power BI', 'Tableau',
    'TensorFlow', 'OpenCV', 'MySQL'
  ];

  const education = {
    degree: "B.Tech (Computer Science Engineering - AIML)",
    school: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
    cgpa: "8.9/10",
    year: "2025"
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Motivated and detail-oriented B.Tech Computer Engineering student (2025 pass-out) 
          skilled in Python, SQL, Machine Learning, and Data Analytics. Hands-on experience 
          with Flask APIs, predictive analytics, and computer vision projects. Proficient in 
          creating dashboards using Power BI and Tableau; strong problem-solving skills.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <div className="flex items-center mb-4">
          <BookOpen className="mr-3 text-blue-500" size={24} />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Education</h3>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white">
            {education.degree}
          </h4>
          <div className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300">
            <MapPin size={16} className="mr-2" />
            <p>{education.school}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">CGPA: {education.cgpa}</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium w-fit">
              {education.year}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <div className="flex items-center mb-6">
          <Award className="mr-3 text-purple-500" size={24} />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Technical Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium hover:scale-105 transition-transform cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {['Fast Learner', 'Project Management', 'Team Collaboration', 'Leadership', 'Adaptability', 'Problem Solving'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}