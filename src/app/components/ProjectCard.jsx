"use client";
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-start">
      <div
        className="w-full h-0 pb-[125%] mx-auto rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.img.src})`,
        }}
      ></div>
      
      <h6 className='text-orange-500 mt-5 text-start'>{project.title}</h6>
      <p className='font-semibold mt-2 text-start dark:text-white'>{project.desc}</p>
     
    </div>
  );
};

export default ProjectCard;
