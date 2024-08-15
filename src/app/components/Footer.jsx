import React from 'react'
import { useTheme } from '../context/ThemeContext'
import blackLogo from '../../../public/assets/blackLogo.png'
import whiteLogo from '../../../public/assets/whiteLogo.png'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({navItems}) => {
    const {isDarkMode} = useTheme()
  return (
    <footer className="bg-[#F8F8F8] dark:bg-[#1E1E1E] pt-10">
          <div className="flex flex-col items-center justify-center">
          {isDarkMode ? (
          <img src={whiteLogo.src} alt="Logo" width={150} />
        ) : (
        <img src={blackLogo.src} alt="Logo" width={150} />
      )}
          <div className='flex items-center gap-9'>
          <ul className='flex-col flex sm:flex-row relative flex-wrap gap-y-5 sm:gap-y-3 sm:gap-x-2  md:gap-x-9 py-10'>
            {navItems.map((item) => (
              <li key={item.path} className='group relative '>
                <a
                    href={`#${item.path}`}
                  className='text-md hover:text-[#FD6F00] transition-all duration-100 text-black dark:text-white pointer'
                >
                  {item.name}
                </a>
                {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#FD6F00] group-hover:w-full hidden "></span> */}
              </li>
            ))}
          </ul>
          </div>

          <div className="flex flex-row gap-5 items-center justify-center mt-5 ">
                  <FaFacebook size={25} className="dark:text-white" />
                  <FaTwitter size={25} className="dark:text-white" />
                  <FaInstagram size={25} className="dark:text-white" />
                  <FaLinkedin size={25} className="dark:text-white" />
                </div>
          </div>

          <div className="bg-[#545454] flex items-center justify-center text-white font-light py-3 mt-10">© 2023  <span className="text-orange-500 mx-1">Mumair </span> All Rights Reserved , Inc.</div>
        </footer>
  )
}

export default Footer