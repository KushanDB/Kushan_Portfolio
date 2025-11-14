import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function RoutesList(){
  return (
    <Routes>
      <Route path="/" element={<>
        <Hero />
        <About />
        <Projects />
      </>} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
