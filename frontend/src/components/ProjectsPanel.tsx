import React from 'react'
import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'

const ProjectsPanel: React.FC = () => {
  return (
    <section
      style={{
        padding: '1.5rem',
        backgroundColor: '#111',
        border: '1px solid #333',
        borderRadius: '4px',
        fontFamily: 'monospace',
        color: '#ccc',
        marginBottom: '1rem',
      }}
    >
      <h2
        style={{
          color: '#00ff41',
          marginTop: 0,
          fontSize: '1.2rem',
          borderBottom: '1px solid #333',
          paddingBottom: '0.5rem',
        }}
      >
        {'>'} PROJECTS_AS_SERVICES
      </h2>
      <div style={{ marginTop: '1rem' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPanel
