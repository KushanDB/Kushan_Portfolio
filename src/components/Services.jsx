import React from "react";
import { AiOutlineUser, AiOutlineMobile, AiOutlineCode, AiOutlineBgColors, AiOutlineDatabase, AiOutlineLineChart, AiOutlineDesktop, AiOutlineLayout } from "react-icons/ai";
import { useScrollAnimation } from "../utils/useScrollAnimation";

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  const services = [
    {
      icon: <AiOutlineMobile />,
      title: "App Design",
      description: "Creating intuitive and engaging mobile applications with modern design principles and seamless user experiences for iOS and Android platforms."
    },
    {
      icon: <AiOutlineCode />,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications using cutting-edge technologies like React, Node.js, and modern frameworks."
    },
    {
      icon: <AiOutlineBgColors />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces with focus on accessibility, usability, and aesthetic appeal to enhance user engagement and satisfaction."
    },
    {
      icon: <AiOutlineDatabase />,
      title: "Backend Development",
      description: "Developing robust server-side solutions, RESTful APIs, and database architectures to power scalable and secure web applications."
    },
    {
      icon: <AiOutlineDesktop />,
      title: "Frontend Development",
      description: "Creating dynamic and responsive user interfaces using modern JavaScript frameworks and libraries to deliver seamless user experiences."
    },
    {
      icon: <AiOutlineLayout />,
      title: "Landing Page Design",
      description: "Crafting visually appealing and conversion-focused landing pages that effectively communicate your message and drive user engagement."
    }
  ];

  return (
    <div className="services-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'animate' : ''}`}>Services</h2>
        <p className={`section-subtitle ${titleVisible ? 'animate' : ''}`}>
          Delivering comprehensive digital solutions tailored to your needs.
        </p>

        <div ref={gridRef} className={`services-grid ${gridVisible ? 'animate' : ''}`}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
