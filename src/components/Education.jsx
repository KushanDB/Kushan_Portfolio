import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List (4 semesters)',
        'Lead Developer - University Tech Club'
      ]
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2022',
      description: 'Intensive program covering modern web technologies and best practices.',
      achievements: [
        'Top 5% of cohort',
        'Built 10+ full-stack applications',
        'Specialized in MERN stack'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'React Developer Certification',
    'MongoDB Certified Developer'
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <span className="education-period">{edu.period}</span>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-icon">🏆</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
