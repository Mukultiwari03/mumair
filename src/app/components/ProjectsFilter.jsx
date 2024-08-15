import React, { useState } from 'react';
import EventCard from './ProjectCard'; // Or use a custom ProjectCard
import appdesign1 from '../../../public/assets/projects/appdesign1.png';
import appdesign2 from '../../../public/assets/projects/appdesign2.png';
import appdesign3 from '../../../public/assets/projects/appdesign3.png';
import appdesign4 from '../../../public/assets/projects/appdesign-4.png';
import graphicdesign1 from '../../../public/assets/projects/graphicdesign1.jpg';
import graphicdesign2 from '../../../public/assets/projects/graphicdesign2.jpg';
import graphicdesign3 from '../../../public/assets/projects/graphicdesign3.jpg';
import webdesign1 from '../../../public/assets/projects/webdesign1.png';
import webdesign2 from '../../../public/assets/projects/webdesign2.png';
import webdesign3 from '../../../public/assets/projects/webdesign3.png';
import uiux1 from '../../../public/assets/projects/uiux1.png'
import uiux2 from '../../../public/assets/projects/uiux2.png'
import uiux3 from '../../../public/assets/projects/uiux3.png'
const ProjectsFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('App Design');

  const projectdata = [
    {
      title: "App Design",
      desc: "Agrotech Mobile App Design",
      img: appdesign4,
    },
    {
      title: "App Design",
      desc: "Pharmacy Mobile App",
      img: appdesign1,
    },
    {
      title: "App Design",
      desc: "Harmony app design",
      img: appdesign3,
    },
    {
      title: "Web Design",
      desc: "AirCalling Landing Page Design",
      img: webdesign1,
    },
    {
      title: "Web Design",
      desc: "Business Landing Page Design",
      img: webdesign2,
    },
    {
      title: "Web Design",
      desc: "Ecom Web Page Design",
      img: webdesign3,
    },
    {
      title: "Graphic Design",
      desc: "SOCIAL MEDIA | 2024",
      img: graphicdesign1,
    },
    {
      title: "Graphic Design",
      desc: "Graphic Design # Posters for YAMMPIZZA",
      img: graphicdesign2,
    },
    {
      title: "Graphic Design",
      desc: "Graphic Designer Portfolio",
      img: graphicdesign3,
    },
    {
        title:"UI/UX",
        desc:"Intellecta UI-UX",
        img:uiux1,
    },
    {
        title:"UI/UX",
        desc:"Chatinsure UI",
        img:uiux2,
    },
    {
        title:"UI/UX",
        desc:"Roam – Travel UI Components",
        img:uiux3,
    },
  ];

  return (
    <div className="container w-full md:w-[90%] mx-auto px-4 py-8">
      <div className="flex justify-center flex-wrap items-center gap-y-4 mb-8" data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out">
        <button
          className={`px-4 py-2 rounded-lg border-[#585858] border-[0.7px] ${selectedCategory === 'All' ? 'bg-orange-500 text-white' : 'bg-[#F8F8F8] text-gray-800'}`}
          onClick={() => setSelectedCategory('All')}
    
        >
          All
        </button>
        {["UI/UX",'App Design', 'Web Design', 'Graphic Design'].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded-lg border-[#585858] border-[0.7px] ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-[#F8F8F8] text-gray-800'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 mx-auto" data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  data-aos-easing="ease-in-out">
  {projectdata
    .filter(project => selectedCategory === 'All' || project.title === selectedCategory)
    .map((project, index) => (
      <EventCard key={index} project={project} showText={true} />
    ))}
</div>

    </div>
  );
};

export default ProjectsFilter;
