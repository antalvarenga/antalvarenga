import React, { useState, useEffect, useRef } from 'react'
import type { Project } from '../models/types'
import styles from './ProjectCard.module.css'

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
      <div className={styles.loadingState}>
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
      className={`${styles.container} ${isExpanded || isLoading ? styles.containerActive : ''}`}
    >
      <div className={styles.header}>
        <h3
          className={`${styles.title} ${isExpanded || isLoading ? styles.titleActive : ''}`}
        >
          {isExpanded ? '[v] ' : '[>] '}
          {project.name}
        </h3>
        <span className={styles.status}>
          {project.status}
        </span>
      </div>
      <p className={styles.summary}>
        {project.summary}
      </p>

      {renderLoadingState()}

      {isExpanded && (
        <div
          role="region"
          aria-label={`${project.name} details`}
          className={styles.details}
        >
          <div className={styles.detailRow}>
            <span className={styles.label}>ARCH_SUMMARY:</span> {project.architectureSummary}
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>BACKEND_FOCUS:</span> {project.backendFocus}
          </div>
          <div>
            <span className={styles.label}>RESPONSIBILITIES:</span>
            <ul className={styles.responsibilitiesList}>
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

