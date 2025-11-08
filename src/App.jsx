import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-gradient"></div>
      
      <header className="header">
        <div className="header-content">
          <h1 className="title">
            <span className="title-main">Jose Escalón</span>
            <span className="title-accent">.</span>
          </h1>
          <p className="subtitle">Professional Shawarma sampler</p>
        </div>
      </header>

      <main className="main-content">
        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Project Portfolio</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 All rights reserved. To who? Hell of I know</p>
      </footer>
    </div>
  )
}

export default App
