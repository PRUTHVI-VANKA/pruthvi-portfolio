import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "Deendayal Port Authority",
      duration: "June 2024 - August 2024",
      location: "India",
      description: [
        "Developed data-driven solutions using MySQL, networking concepts, and Python.",
        "Engineered AI/ML projects to optimize predictive analytics."
      ],
      skills: ["MySQL", "Python", "AI/ML", "Predictive Analytics"]
    },
    {
      title: "Intern",
      company: "Techno Hacks EdTech",
      duration: "May 2024 - June 2024",
      location: "India",
      description: [
        "Applied machine learning algorithms to improve prediction accuracy.",
        "Contributed to practical project implementations in a structured environment."
      ],
      skills: ["Machine Learning", "Python", "Project Implementation"]
    },
    {
      title: "Intern",
      company: "Verzeo",
      duration: "September 2022 - October 2022",
      location: "India",
      description: [
        "Built ML models using Python and TensorFlow.",
        "Performed data preprocessing and model evaluation."
      ],
      skills: ["Python", "TensorFlow", "Data Preprocessing", "Model Evaluation"]
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
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-24 md:h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
            )}
            
            {/* Experience Card */}
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ml-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-14 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                    <Building size={16} className="mr-2" />
                    <span className="text-sm md:text-base font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 text-xs md:text-sm gap-2 sm:gap-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start text-sm md:text-base text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 md:gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-orange-300/30 dark:border-orange-700/50"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">
          Professional Journey
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Through diverse internship experiences across port authority, edtech, and technology companies, 
          I've gained hands-on expertise in AI/ML implementation, data analytics, and practical project development. 
          Each role has strengthened my technical skills while building real-world problem-solving capabilities.
        </p>
      </motion.div>
    </motion.div>
  );
}