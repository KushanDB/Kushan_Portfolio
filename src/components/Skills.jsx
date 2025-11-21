import React from "react";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillColumn = ({ title, items }) => (
  <div className="skill-column-wrapper">
    <h3 className="skill-category-title">{title}</h3>
    <div className="skill-column">
      <ul className="skill-list">
        {items.map((item) => (
          <li key={item.name} className="skill-item">
            <span className="skill-icon" title={item.name}>{item.icon}</span>
            <span className="skill-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  return (
    <section className="section skills-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'animate' : ''}`}>Skills & Stack</h2>
        <p className={`section-subtitle ${titleVisible ? 'animate' : ''}`}>
          Organized by programming languages, frameworks, tools, and databases.
        </p>

        <div ref={gridRef} className={`skills-grid ${gridVisible ? 'animate' : ''}`}>
          <SkillColumn
            title="Programming Languages"
            items={[
              { name: "JavaScript", icon: <SiJavascript /> },
              { name: "TypeScript", icon: <SiTypescript /> },
              { name: "Python", icon: <SiPython /> },
              { name: "Java", icon: <FaJava /> }
            ]}
          />
          <SkillColumn
            title="Frameworks & Libraries"
            items={[
              { name: "React", icon: <SiReact /> },
              { name: "Node.js", icon: <SiNodedotjs /> },
              { name: "Express", icon: <SiExpress /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss /> }
            ]}
          />
          <SkillColumn
            title="Tools"
            items={[
              { name: "Git", icon: <SiGit /> },
              { name: "GitHub", icon: <SiGithub /> },
              { name: "Figma", icon: <SiFigma /> },
              { name: "VS Code", icon: <SiVisualstudiocode /> },
              { name: "Postman", icon: <SiPostman /> }
            ]}
          />
          <SkillColumn
            title="Databases"
            items={[
              { name: "PostgreSQL", icon: <SiPostgresql /> },
              { name: "MongoDB", icon: <SiMongodb /> },
              { name: "MySQL", icon: <SiMysql /> },
              { name: "Firebase", icon: <SiFirebase /> }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
