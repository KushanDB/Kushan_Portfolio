import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Logo(){
  // Simple textual logo using Qasira font
  return (
    <Link to="/" className="logo">
      <span className="logo-symbol">KJ</span>
      <span className="logo-text">Kushan Jayathunga</span>
    </Link>
  )
}

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
