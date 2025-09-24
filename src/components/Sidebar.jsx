import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, User, FolderOpen, Mail, Briefcase, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider.jsx';

export default function Sidebar({ activeSection, setActiveSection }) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header lg:hidden">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Pruthvi Vanka
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            AI/ML Engineer
          </p>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 text-gray-800 dark:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      <div 
        className={`overlay lg:hidden ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sidebar ${isMobileMenuOpen ? 'open' : ''} bg-white/10 dark:bg-black/10 backdrop-blur-lg border-r border-white/20 dark:border-gray-800/50 p-6 flex flex-col`}
      >
        {/* Header - Hidden on mobile */}
        <div className="mb-12 hidden lg:block">
          <motion.h1 
            className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Pruthvi Vanka
          </motion.h1>
          <motion.p 
            className="text-base text-gray-600 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI/ML Engineer & Data Analyst
          </motion.p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-base ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105 text-base"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 pt-6 border-t border-white/20 dark:border-gray-800/50"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Navi Mumbai
          </p>
        </motion.div>
      </motion.aside>
    </>
  );
}