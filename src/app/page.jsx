"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import OrangeButton from "./components/OrangeButton";
import heroImg from "../../public/assets/heroImg.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import aboutImg from "../../public/assets/aboutImg.png";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ServicesCards from "./components/ServicesCards";
import ProjectFilter from "./components/ProjectsFilter";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Me", path: "about" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "Testimonials", path: "testimonials" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <ThemeProvider>
      <Header navItems={navItems} />
      <main className="dark:bg-[#1E1E1E]">
        {/* hero section */}
        <section
          className="w-full max-w-[80%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[0].path}
        >
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
            <div className="lg:col-span-3 lg:order-2 px-6">
              <div className="relative">
                <img
                  src={heroImg.src}
                  alt="Profile Img"
                  className="w-full lg:w-[100%] sm:w-[80%] h-full mx-auto"
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                />
                <div
                  className="absolute z-2 bg-[#FD6F00] w-[70%] h-[3rem] md:h-[4rem] opacity-60 top-[12%] left-[15%] lg:left-[15%]"
                  style={{ opacity: "60%" }}
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                ></div>
                <div className="lg:flex flex-row gap-5 items-center justify-center mt-5 hidden">
                  <FaFacebook
                    size={20}
                    className="dark:text-white"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                  />
                  <FaTwitter
                    size={20}
                    className="dark:text-white"
                    data-aos="zoom-in-down"
                    data-aos-duration="700"
                    data-aos-delay="400"
                    data-aos-easing="ease-in-out"
                  />
                  <FaInstagram
                    size={20}
                    className="dark:text-white"
                    data-aos="zoom-in-down"
                    data-aos-duration="700"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                  />
                  <FaLinkedin
                    size={20}
                    className="dark:text-white"
                    data-aos="zoom-in-down"
                    data-aos-duration="700"
                    data-aos-delay="800"
                    data-aos-easing="ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div
              className="lg:col-span-4 lg:order-1 my-auto"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="00"
              data-aos-easing="ease-in-out"
            >
              <h5 className="font-semibold text-xl dark:text-white">Hi I am</h5>
              <h5 className="font-semibold tracking-wider text-2xl text-[#FD6F00]">
                Muhammad Umair
              </h5>
              <div className="w-full lg:w-[60%]">
                <h1 className="font-extrabold text-4xl md:text-5xl  xl:text-7xl tracking-wider dark:text-white">
                  UI & UX
                </h1>
                <h1 className="font-extrabold text-5xl md:text-5xl xl:text-7xl tracking-wider ml-0 lg:ml-[10rem] dark:text-white">
                  Designer
                </h1>
              </div>
              <p className="w-full xl:w-[80%] md:w-[90%] lg:w-[90%] text-justify py-6 dark:text-white tracking-wider">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra.
              </p>
              <OrangeButton text={"Hire Me"} />
            </div>
          </div>
        </section>

        {/* about section */}
        <section
          className="w-full max-w-[90%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[1].path}
        >
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
            <div className="lg:col-span-3 relative m-auto">
              <img
                src={aboutImg.src}
                alt="About Img"
                className="w-full sm:w-[80%] md:w-[80%] mx-auto lg:w-[90%]"
                data-aos="zoom-in-up"
                data-aos-duration="900"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              />
              <div
                className="absolute z-2 bg-[#FD6F00] w-[60%] h-[3rem] md:h-[4rem] opacity-60 left-[20%] top-[15%]"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                style={{ opacity: "60%" }}
              ></div>
            </div>
            <div className="lg:col-span-4 px-6 md:px-10 lg:my-auto">
              <div className="mx-auto">
                <h2
                  className="text-2xl md:text-4xl lg:text-6xl font-semibold dark:text-white mb-4"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                >
                  About Me
                </h2>
                <p
                  className="text-justify dark:text-white text-wrap w-[95%] md:w-[80%] text-base tracking-wider"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out"
                >
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                  massa nibh lectus netus in. Aliquet donec morbi convallis
                  pretium. Turpis tempus pharetra.
                </p>

                <div className="mt-4">
                  {/* ux */}
                  <div>
                    <h4
                      className="font-medium text-lg md:text-xl dark:text-white"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="600"
                      data-aos-easing="ease-in-out"
                    >
                      UX
                    </h4>
                    <div
                      className="mb-5 h-3 w-[90%] md:w-[80%] overflow-hidden rounded-full bg-gray-200 relative my-4"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="800"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="h-3 w-[85%] md:w-[90%] rounded-full bg-orange-500 relative">
                        <div className="h-full w-full bg-orange-500 absolute top-0 right-0">
                          <div className="h-4 w-4 rounded-full border-2 border-orange-500 bg-white absolute top-[-2px] right-[-8px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* website design */}
                  <div>
                    <h4
                      className="font-medium text-lg md:text-xl dark:text-white"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1000"
                      data-aos-easing="ease-in-out"
                    >
                      Website Design
                    </h4>
                    <div
                      className="mb-5 h-3 w-[90%] md:w-[80%] overflow-hidden rounded-full bg-gray-200 relative my-4"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="h-3 w-[80%] md:w-[85%] rounded-full bg-orange-500 relative">
                        <div className="h-full w-full bg-orange-500 absolute top-0 right-0">
                          <div className="h-4 w-4 rounded-full border-2 border-orange-500 bg-white absolute top-[-2px] right-[-8px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* App Design */}
                  <div>
                    <h4
                      className="font-medium text-lg md:text-xl dark:text-white"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1400"
                      data-aos-easing="ease-in-out"
                    >
                      App Design
                    </h4>
                    <div
                      className="mb-5 h-3 w-[90%] md:w-[80%] overflow-hidden rounded-full bg-gray-200 relative my-4"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1600"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="h-3 w-[90%] md:w-[95%] rounded-full bg-orange-500 relative">
                        <div className="h-full w-full bg-orange-500 absolute top-0 right-0">
                          <div className="h-4 w-4 rounded-full border-2 border-orange-500 bg-white absolute top-[-2px] right-[-8px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Graphic Design */}
                  <div>
                    <h4
                      className="font-medium text-lg md:text-xl dark:text-white"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1800"
                      data-aos-easing="ease-in-out"
                    >
                      Graphic Design
                    </h4>
                    <div
                      className="mb-5 h-3 w-[90%] md:w-[80%] overflow-hidden rounded-full bg-gray-200 relative my-4"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="2000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="h-3 w-[75%] md:w-[80%] rounded-full bg-orange-500 relative">
                        <div className="h-full w-full bg-orange-500 absolute top-0 right-0">
                          <div className="h-4 w-4 rounded-full border-2 border-orange-500 bg-white absolute top-[-2px] right-[-8px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="w-full max-w-[90%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[2].path}
        >
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2
                className="text-2xl md:text-4xl lg:text-6xl font-semibold dark:text-white mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
              >
                Services
              </h2>
              <p
                className="text-center dark:text-white text-wrap  w-full md:w-[75%] lg:w-[50%]  tracking-wider"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
              >
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>

            <ServicesCards />
          </div>
        </section>

        {/* My Projects  */}
        <section
          className="w-full max-w-[90%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[3].path}
        >
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-2xl md:text-4xl lg:text-6xl font-semibold dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              My Projects
            </h2>
            <p
              className="text-center dark:text-white text-wrap  w-full md:w-[75%] lg:w-[50%]  tracking-wider"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>
          <div>
            <ProjectFilter />
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="w-full max-w-[90%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[4].path}
        >
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-2xl md:text-4xl lg:text-6xl font-semibold dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Testimonials
            </h2>
            <p
              className="text-center dark:text-white text-wrap  w-full md:w-[75%] lg:w-[50%]  tracking-wider"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>

          <div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact Me */}
        <section
          className="w-full max-w-[90%] mx-auto py-10 md:py-20 overflow-hidden"
          id={navItems[5].path}
        >
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-2xl md:text-4xl lg:text-6xl font-semibold dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Lets Design Together
            </h2>
            <p
              className="text-center dark:text-white text-wrap  w-full md:w-[75%] lg:w-[50%]  tracking-wider"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>

          <div
            className="flex items-center justify-center mt-12"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <input
              type="text"
              className="w-[30%] bg-[#F8F8F8] border-2 border-[#afafaf5d] rounded-md h-10 mx-4 px-2 py-5 outline-none ring-0"
              placeholder="Enter text here..."
            />
            <OrangeButton text={"Contact Me"} />
          </div>

          <div></div>
        </section>

        {/* footer */}
        {/*  */}
        <Footer navItems={navItems} />
      </main>
    </ThemeProvider>
  );
};

export default Page;
