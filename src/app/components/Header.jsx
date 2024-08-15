"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaHeadset, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdMenuOpen, MdMenu } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import blackLogo from '../../../public/assets/blackLogo.png';
import whiteLogo from '../../../public/assets/whiteLogo.png';
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext';
import OrangeButton from '../components/OrangeButton'


const Header = ({navItems}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode,toggle} = useTheme();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='sticky top-0 z-10'>
  
      <nav className='p-4  flex bg-white dark:bg-[#1E1E1E] lg:justify-around justify-between items-center'>
        <div> 
        {isDarkMode ? (
          <img src={whiteLogo.src} alt="Logo" width={150} />
        ) : (
        <img src={blackLogo.src} alt="Logo" width={150} />
      )}
        </div>
        <div className='flex items-center gap-9'>
          <ul className='lg:flex relative md:hidden sm:hidden hidden gap-x-9'>
          {navItems.map((item) => (
          <li key={item.path} className="group relative">
            <a
              href={`#${item.path}`}
              className="text-md hover:text-[#FD6F00] transition-all duration-200 text-black dark:text-white"
            >
              {item.name}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#FD6F00] group-hover:w-full"></span>
          </li>
        ))}
          </ul>
          <OrangeButton text={"Download CV"}/>
          <div className='lg:block hidden'>
            
          <ThemeToggle/>
          </div>
        </div>
        
        <div className='lg:hidden md:flex sm:flex  flex gap-x-5 items-center justify-center'>
        <div className='lg:hidden block'>
            
            <ThemeToggle/>
            </div>
          {showMenu ? (
            <MdMenuOpen onClick={toggleMenu} className='text-3xl dark:text-white' />
          ) : (
            <MdMenu onClick={toggleMenu} className='text-3xl dark:text-white' />
          )}
        </div>
      </nav>
      {showMenu && (
        <div className='lg:hidden md:block sm:block block'>
          <ul className='flex flex-col justify-center gap-y-4 bg-white py-4  items-center'>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className='hover:font-medium duration-200 text-lg text-black hover:text-gray-700'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
