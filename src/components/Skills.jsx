import React from 'react'

export default function Skills(){
  // Separated topics: Programming Languages, Frameworks, Tools, Databases
  const list = {
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Node.js', 'Express'],
    tools: ['Figma', 'Git', 'Photoshop'],
    databases: ['PostgreSQL', 'MongoDB']
  }

  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skills-grid">
        <div className="skill-col">
          <h4>Programming Languages</h4>
          <ul>{list.languages.map(l=> <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="skill-col">
          <h4>Frameworks</h4>
          <ul>{list.frameworks.map(l=> <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="skill-col">
          <h4>Tools</h4>
          <ul>{list.tools.map(l=> <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="skill-col">
          <h4>Databases</h4>
          <ul>{list.databases.map(l=> <li key={l}>{l}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}
