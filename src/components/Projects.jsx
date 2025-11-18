import React, { useState } from "react";

// Placeholder image - Replace with your actual project images
const proj1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23222' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3EProject Image%3C/text%3E%3C/svg%3E";

const categories = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"];

const projects = [
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
  {
    title: "Name Project",
    category: "Categories",
    image: proj1,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of work that combines design, code, and creativity.
        </p>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
