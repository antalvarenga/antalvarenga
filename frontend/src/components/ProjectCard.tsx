import React, { useState } from 'react'
import type { Project } from '../models/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

type LifecycleState = 'collapsed' | 'expanded'

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [lifecycleState, setLifecycleState] = useState<LifecycleState>('collapsed')

  const toggleExpansion = () => {
    if (lifecycleState === 'expanded') {
      setLifecycleState('collapsed')
    } else {
      setLifecycleState('expanded')
    }
  }

  const isExpanded = lifecycleState === 'expanded'

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
      tabIndex={0}
      aria-label={`Project: ${project.name}. ${
        isExpanded ? 'Click to collapse.' : 'Click to expand details.'
      }`}
      className={`${styles.container} ${isExpanded ? styles.containerActive : ''}`}
    >
      <div className={styles.header}>
        <h3
          className={`${styles.title} ${isExpanded ? styles.titleActive : ''}`}
        >
          {isExpanded ? '[v] ' : '[>] '}
          {project.name}
        </h3>
        <span className={styles.status}>
          {project.duration}
        </span>
      </div>
      <p className={styles.summary}>
        {project.summary}
      </p>

      {isExpanded && (
        <div
          role="region"
          aria-label={`${project.name} details`}
          className={styles.details}
        >
          <div className={styles.detailRow}>
            <span className={styles.label}>ARCH_SUMMARY:</span> {project.architectureSummary}
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

