'use client';

import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import DayBackground from '@/components/backgrounds/DayBackground';
import NightBackground from '@/components/backgrounds/NightBackground';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
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
        />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}