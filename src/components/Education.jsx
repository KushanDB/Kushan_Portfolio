import React from "react";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import suslLogo from "../assets/images/SUSL_logo2.png";
import asmLogo from "../assets/images/ASM_logo.png";

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const educationData = [
    {
      year: "2023 - Present",
      title: "BSc (Hons) in Computing & Information Systems",
      place: "Sabaragamuwa University of Sri Lanka",
      description: (
        <>
          Focusing on software engineering, web development, and UI/UX engineering with a current GPA of <span className="gpa-highlight">3.58</span>.
        </>
      ),
      status: "Undergraduate",
      icon: <FaUniversity />,
      logo: suslLogo
    },
    {
      year: "2017 - 2019",
      title: "G.C.E Advanced Level - Physical Science Stream",
      place: "Ananda Sastralaya National School - Mathugama",
      description: "Passed Examination with \"B\" in Chemistry, \"C\" in Combined Mathematics, and \"C\" in Physics.",
      status: "Completed",
      icon: <FaGraduationCap />,
      logo: asmLogo
    },
    {
      year: "2016",
      title: "G.C.E Ordinary Level Examination",
      place: "Ananda Sastralaya National School - Mathugama",
      description: "Passed G.C.E. Ordinary Level with \"7A\" passes and \"2C\" passes including Mathematics and Science.",
      status: "Completed",
      icon: <FaSchool />,
      logo: asmLogo
    }
  ];

  return (
    <section className="section education-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'animate' : ''}`}>Education</h2>
        <p className={`section-subtitle ${titleVisible ? 'animate' : ''}`}>
          A simple timeline of my academic background.
        </p>

        <div ref={timelineRef} className={`education-timeline-wrapper ${timelineVisible ? 'animate' : ''}`}>
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="education-content">
                {edu.logo ? (
                  <div className="edu-icon edu-logo">
                    <img src={edu.logo} alt="University Logo" />
                  </div>
                ) : (
                  <div className="edu-icon">{edu.icon}</div>
                )}
                <div className="edu-info">
                  <div className="edu-period">{edu.year}</div>
                  <h3 className="edu-title">{edu.title}</h3>
                  <p className="edu-institution">{edu.place}</p>
                  <p className="edu-description">{edu.description}</p>
                  <span className="edu-status">{edu.status}</span>
                </div>
              </div>
              <div className="timeline-dot">
                <div className="dot-inner">{edu.icon}</div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
