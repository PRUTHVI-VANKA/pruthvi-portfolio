import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Skin Care Recommendation",
      date: "Feb 2025 - Apr 2025",
      description: "ML-based system to suggest products based on skin type and ingredient analysis.",
      tech: ["Machine Learning", "Python", "Data Analysis"],
      status: "In Progress"
    },
    {
      title: "Pedestrian Detection",
      date: "Nov 2024",
      description: "Real-time pedestrian detection using OpenCV and Haar cascades.",
      tech: ["OpenCV", "Python", "Computer Vision"],
      status: "Completed"
    },
    {
      title: "Face Expression Recognition using CNN",
      date: "Jul 2024",
      description: "Computer vision project integrating camera access for expression recognition.",
      tech: ["CNN", "TensorFlow", "Computer Vision"],
      status: "Completed"
    },
    {
      title: "Ignite Guard (IoT)",
      date: "Apr 2024",
      description: "Smart connected system for real-time gas leak detection and safety alerts.",
      tech: ["IoT", "Python", "Sensors"],
      status: "Completed"
    },
    {
      title: "Diabetes Prediction",
      date: "May 2024",
      description: "Random Forest model for diabetes classification.",
      tech: ["Random Forest", "Machine Learning", "Python"],
      status: "Completed"
    },
    {
      title: "Movie Review Classification",
      date: "Apr 2024",
      description: "Sentiment classification using Gaussian Distribution Network.",
      tech: ["NLP", "Machine Learning", "Python"],
      status: "Completed"
    }
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6 md:space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.date}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                project.status === 'Completed' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
              }`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center text-blue-500 hover:text-blue-600 cursor-pointer group">
              <Code size={16} className="mr-2" />
              <span className="text-xs md:text-sm font-medium group-hover:underline">View Details</span>
              <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Projects Note */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-purple-300/30 dark:border-purple-700/50 text-center"
      >
        <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-2">
          More Projects Coming Soon!
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          I'm constantly working on new ML and AI projects. Check back for updates!
        </p>
      </motion.div>
    </motion.div>
  );
}