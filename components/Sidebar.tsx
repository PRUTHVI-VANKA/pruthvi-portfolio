'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, User, FolderOpen, Mail, Briefcase, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 h-full w-80 bg-white/10 dark:bg-black/10 backdrop-blur-lg border-r border-white/20 dark:border-gray-800/50 p-4 md:p-8 flex flex-col z-10 ${isMobileMenuOpen ? 'mobile-open' : ''}`}
    >
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute top-4 right-4 p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 text-gray-800 dark:text-white"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Header */}
      <div className="mb-8 md:mb-12">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Pruthvi Vanka
        </motion.h1>
        <motion.p 
          className="text-sm md:text-base text-gray-600 dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI/ML Engineer & Data Analyst
        </motion.p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 md:block">
        <ul className="space-y-2 md:space-y-4">
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
                  className={`w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <Icon size={18} className="md:w-5 md:h-5" />
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
        className="mt-4 md:mt-8"
      >
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center space-x-2 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
        >
          {theme === 'light' ? <Moon size={18} className="md:w-5 md:h-5" /> : <Sun size={18} className="md:w-5 md:h-5" />}
          <span>{theme === 'light' ? 'Night Mode' : 'Day Mode'}</span>
        </button>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20 dark:border-gray-800/50"
      >
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">
          Navi Mumbai
        </p>
      </motion.div>
    </motion.aside>
  );
}