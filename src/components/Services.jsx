import React from "react";
import { AiOutlineUser, AiOutlineMobile, AiOutlineCode, AiOutlineBgColors, AiOutlineDatabase, AiOutlineLineChart } from "react-icons/ai";

const Services = () => {
  const services = [
    {
      icon: <AiOutlineMobile />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    },
    {
      icon: <AiOutlineCode />,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    },
    {
      icon: <AiOutlineBgColors />,
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    },
    {
      icon: <AiOutlineDatabase />,
      title: "Backend Development",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    },
    {
      icon: <AiOutlineUser />,
      title: "Consulting",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    },
    {
      icon: <AiOutlineLineChart />,
      title: "SEO & Marketing",
      description: "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
    }
  ];

  return (
    <div className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
        </p>

        <div className="services-grid">
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
