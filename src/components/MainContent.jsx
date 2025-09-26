import { motion, AnimatePresence } from 'framer-motion';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

export default function MainContent({ activeSection, isSidebarOpen }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}