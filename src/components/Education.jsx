import React from 'react'

export default function Education(){
  const items = [
    {year:'2020 - 2024', title:'B.Sc. Computer Science', place:'University ABC', details:'Focus on software engineering, web development.'},
    {year:'2016 - 2019', title:'Advanced Level', place:'XYZ College', details:'Mathematics stream.'}
  ]

  return (
    <section id="education" className="education container">
      <h2>Education</h2>
      <p className="lead">My educational background and certifications.</p>
      <div className="education-list">
        {items.map(it=> (
          <div key={it.year} className="education-item">
            <div className="edu-year">{it.year}</div>
            <div className="edu-body">
              <h4>{it.title}</h4>
              <p className="place">{it.place}</p>
              <p className="detail">{it.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
