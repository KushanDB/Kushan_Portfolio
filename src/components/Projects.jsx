import React from 'react'

const sampleProjects = [
  {id:1, title:'Project One', desc:'A short description', img:'/assets/project1.jpg'},
  {id:2, title:'Project Two', desc:'A short description', img:'/assets/project2.jpg'},
  {id:3, title:'Project Three', desc:'A short description', img:'/assets/project3.jpg'}
]

export default function Projects(){
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <p className="lead">Selected projects I've worked on.</p>

      <div className="projects-grid">
        {sampleProjects.map(p=> (
          <article key={p.id} className="project-card">
            <img src={p.img} alt={p.title} />
            <div className="project-body">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a className="btn outline" href="#">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
