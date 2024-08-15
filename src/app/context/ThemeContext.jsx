'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('hs_theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return theme === 'dark' || (theme === 'auto' && prefersDark);
    }
    return false;
  });
  const [toggle,setToggle] = useState(false)
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('hs_theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('hs_theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode,toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
