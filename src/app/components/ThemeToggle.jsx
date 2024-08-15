'use client';
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode,toggle,setToggle } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    setToggle(!toggle)
  };

  return (
    <div className="flex space-x-2">
      <button
        type="button"
        className={`font-medium rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${isDarkMode ? 'hidden' : 'block'} text-gray-800 dark:text-neutral-200`}
        onClick={toggleTheme}
      >
        <span className="inline-flex justify-center items-center w-9 h-9">
          <FaSun className="w-6 h-6" />
        </span>
      </button>
      <button
        type="button"
        className={`font-medium rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:bg-gray-200 ${isDarkMode ? 'block' : 'hidden'} text-gray-800 dark:text-neutral-200`}
        onClick={toggleTheme}
      >
        <span className="inline-flex justify-center items-center w-9 h-9">
          <FaMoon className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
