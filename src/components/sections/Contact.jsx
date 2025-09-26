import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, FileText } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vankapruthvi@gmail.com",
      href: "mailto:vankapruthvi@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9390350986",
      href: "tel:+919390350986",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai",
      href: "#",
      color: "text-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pruthvi-vanka",
      href: "https://www.linkedin.com/in/pruthvi-vanka-711459259",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "PRUTHVI-VANKA",
      href: "https://github.com/PRUTHVI-VANKA",
      color: "text-gray-800 dark:text-white"
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
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full"></div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, 
          or simply connect with fellow tech enthusiasts. Feel free to reach out!
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Currently seeking opportunities in AI/ML Engineering and Data Analytics roles.
        </p>
      </motion.div>

      {/* Contact Information */}
      <div className="grid gap-4">
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${contact.color} group-hover:scale-110 transition-transform`} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                    {contact.label}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors break-all">
                    {contact.value}
                  </p>
                </div>
                {contact.href.startsWith('http') && (
                  <div className="ml-auto flex-shrink-0">
                    <Send size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                )}
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-blue-300/30 dark:border-blue-700/50 text-center"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Let's Build Something Amazing Together!
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
          Whether it's a machine learning project, data analysis, or just a friendly chat about tech, 
          I'd love to hear from you.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <motion.a
            href="mailto:vankapruthvi@gmail.com"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            <span>Send me an email</span>
          </motion.a>
          
          <motion.a
            href="/resume/Pruthvi_Vanka_Resume.pdf"
            download="Pruthvi_Resume.pdf"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Resume Preview */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 dark:border-gray-700/50"
      >
        <div className="flex items-center mb-4">
          <FileText className="mr-3 text-green-500" size={24} />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">Resume</h3>
        </div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
          Download my complete resume with detailed information about my education, experience, projects, and certifications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Highlights:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• B.Tech CSE-AIML (8.9 CGPA)</li>
              <li>• 3+ Internship Experiences</li>
              <li>• 8+ ML/AI Projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Certifications:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• SQL Bootcamp</li>
              <li>• Data Analytics (Coursera)</li>
              <li>• Power BI Visualization</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}