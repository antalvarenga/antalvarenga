import React, { useState, useEffect, useRef } from 'react'
import type { Project } from '../models/types'

interface ProjectCardProps {
  project: Project
}

type LifecycleState = 'idle' | 'requesting' | 'validating' | 'processing' | 'expanded'

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [lifecycleState, setLifecycleState] = useState<LifecycleState>('idle')
  const timeoutsRef = useRef<number[]>([])

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  const toggleExpansion = () => {
    if (lifecycleState === 'expanded') {
      clearAllTimeouts()
      setLifecycleState('idle')
    } else if (lifecycleState === 'idle') {
      setLifecycleState('requesting')

      const t1 = window.setTimeout(() => {
        setLifecycleState('validating')
      }, 300)

      const t2 = window.setTimeout(() => {
        setLifecycleState('processing')
      }, 700)

      const t3 = window.setTimeout(() => {
        setLifecycleState('expanded')
      }, 1100)

      timeoutsRef.current.push(t1, t2, t3)
    } else {
      // If clicked during transition, cancel and collapse
      clearAllTimeouts()
      setLifecycleState('idle')
    }
  }

  const renderLoadingState = () => {
    if (lifecycleState === 'idle' || lifecycleState === 'expanded') return null

    return (
      <div
        style={{
          marginTop: '0.75rem',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          color: '#00ff41',
          padding: '0.5rem',
          backgroundColor: '#0a0a0a',
          borderLeft: '2px solid #00ff41',
        }}
      >
        {lifecycleState === 'requesting' && '> INITIATING HANDSHAKE...'}
        {lifecycleState === 'validating' && '> VERIFYING AUTHORIZATION...'}
        {lifecycleState === 'processing' && '> ESTABLISHING DATA STREAM...'}
      </div>
    )
  }

  const isExpanded = lifecycleState === 'expanded'
  const isLoading =
    lifecycleState === 'requesting' ||
    lifecycleState === 'validating' ||
    lifecycleState === 'processing'

  return (
    <div
      onClick={toggleExpansion}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleExpansion()
        }
      }}
      role="button"
      aria-expanded={isExpanded}
      aria-busy={isLoading}
      tabIndex={0}
      aria-label={`Project: ${project.name}. Status: ${project.status}. ${
        isExpanded ? 'Click to collapse.' : 'Click to expand details.'
      }`}
      style={{
        padding: '1rem',
        backgroundColor: '#1a1a1a',
        border: `1px solid ${isExpanded || isLoading ? '#00ff41' : '#333'}`,
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '0.5rem',
        transition: 'all 0.3s ease',
        outlineColor: '#00ff41',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3
          style={{
            margin: 0,
            color: isExpanded || isLoading ? '#00ff41' : '#ccc',
            fontSize: '1rem',
          }}
        >
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
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#b0b0b0' }}>
        {project.summary}
      </p>

      {renderLoadingState()}

      {isExpanded && (
        <div
          role="region"
          aria-label={`${project.name} details`}
          style={{
            marginTop: '1rem',
            borderTop: '1px solid #333',
            paddingTop: '1rem',
            fontSize: '0.85rem',
            animation: 'fadeIn 0.3s ease-in',
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
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1.2rem', color: '#b0b0b0' }}>
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
