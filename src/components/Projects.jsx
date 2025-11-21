import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../utils/useScrollAnimation";

// Project images
import sportCenter from "../assets/University Sport Center Management System.png";
import mindLink from "../assets/MindLink.png";
import kolonnaStore from "../assets/Kolonna Store Track.png";
import trendHive from "../assets/TrendHive.png";
import travel from "../assets/Travel.png";
import livora from "../assets/Livora.png";

const projects = [
  {
    title: "University Sport Center Management System",
    category: "Group Project",
    image: sportCenter,
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    description: "A web-based Sports Center Management System built to handle equipment borrowing, fine tracking, and inventory management efficiently."
  },
  {
    title: "MindLink",
    category: "Group Project",
    image: mindLink,
    technologies: ["Flutter", "Firebase", "Figma"],
    description: "MindLink is an AI-powered quiz app that creates interactive quizzes from study materials and tracks user performance in real time."
  },
  {
    title: "Kolonna Store Track",
    category: "Community Project",
    image: kolonnaStore,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description: "A web-based Store Management System developed for the Kolonna Divisional Secretariat to automate operations and manage inventory efficiently."
  },
  {
    title: "TrendHive",
    category: "Individual Project",
    image: trendHive,
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
    description: "Trend Hive is a full-stack eCommerce website where users can browse products, manage carts, and place orders, with an admin dashboard."
  },
  {
    title: "Travel",
    category: "Individual Project",
    image: travel,
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Travel is a simple website built with HTML, CSS, and JavaScript that showcases popular tourist destinations through an interactive image slideshow."
  },
  {
    title: "Livora",
    category: "Individual Project",
    image: livora,
    technologies: ["React.js", "Tailwind CSS"],
    description: "Livora is a responsive real estate website that showcases property listings and offers an easy platform for users to explore and connect with developers."
  },
];

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [loadedImages, setLoadedImages] = useState({});

  // Lazy load images
  useEffect(() => {
    projects.forEach((project, index) => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);
  
  return (
    <section className="section projects-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'animate' : ''}`}>Projects</h2>
        
        <p className={`section-subtitle ${titleVisible ? 'animate' : ''}`}>
          A selection of work that combines design, code, and creativity.
        </p>

        <br />
        <br />

        <div ref={gridRef} className={`projects-grid ${gridVisible ? 'animate' : ''}`}>
          {projects.map((project, index) => (
            <article key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`project-image ${loadedImages[index] ? 'loaded' : 'loading'}`}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
