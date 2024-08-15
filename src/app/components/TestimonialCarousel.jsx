import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import custom styles (optional)
import '../styles/carouselstyles.css';

import testimonial1 from "../../../public/assets/testimonialImages/testimonial1.png";
import testimonial2 from "../../../public/assets/testimonialImages/testimonial2.png";

const testimonials = [
  {
    id: 1,
    name: 'kylekatarnls',
    role: 'Maintainer of Carbon PHP Library',
    image: testimonial2,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
   
  },
  {
    id: 2,
    name: 'Name',
    role: 'CEO',
    image: testimonial1,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',

  },
  {
    id: 3,
    name: 'Name',
    role: 'CEO',
    image: testimonial2,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',

  },
  {
    id: 4,
    name: 'Name',
    role: 'CEO',
    image: testimonial1,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  return (
    <div className="container mx-auto px-4 py-8 w-full lg:w-[90%]" data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="600"
    data-aos-easing="ease-in-out">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id} className='w-[200rem]'>
            <div
              className={`p-6 rounded-lg shadow-lg dark:bg-slate-200 ${
                activeIndex + 1 === index ? 'bg-white opacity-100' : 'bg-gray-200 opacity-50'
              }`}
            >
              <img
                src={testimonial.image.src}
                alt={testimonial.name}
                className="w-20 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
              <blockquote className="italic text-gray-700">
                {testimonial.text}
              </blockquote>
        
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
