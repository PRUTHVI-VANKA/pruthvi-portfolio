import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import DayBackground from './components/backgrounds/DayBackground.jsx';
import NightBackground from './components/backgrounds/NightBackground.jsx';
import { useTheme } from './components/ThemeProvider.jsx';

function AppContent() {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background */}
      {theme === 'light' ? <DayBackground /> : <NightBackground />}
      
      {/* Layout */}
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MainContent 
          activeSection={activeSection} 
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}