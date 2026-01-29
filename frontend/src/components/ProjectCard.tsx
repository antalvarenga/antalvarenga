import React, { useState } from 'react'
import type { Project } from '../models/types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        padding: '1rem',
        backgroundColor: '#1a1a1a',
        border: `1px solid ${isExpanded ? '#00ff41' : '#333'}`,
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '0.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: isExpanded ? '#00ff41' : '#ccc', fontSize: '1rem' }}>
          {isExpanded ? '[v] ' : '[>] '}
          {project.name}
        </h3>
        <span
          style={{
            fontSize: '0.7rem',
            padding: '2px 6px',
            backgroundColor: '#333',
            color: '#aaa',
            borderRadius: '2px',
          }}
        >
          {project.status}
        </span>
      </div>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#888' }}>
        {project.summary}
      </p>

      {isExpanded && (
        <div
          style={{
            marginTop: '1rem',
            borderTop: '1px solid #333',
            paddingTop: '1rem',
            fontSize: '0.85rem',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: '#00ff41' }}>ARCH_SUMMARY:</span> {project.architectureSummary}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: '#00ff41' }}>BACKEND_FOCUS:</span> {project.backendFocus}
          </div>
          <div>
            <span style={{ color: '#00ff41' }}>RESPONSIBILITIES:</span>
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1.2rem', color: '#aaa' }}>
              {project.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
