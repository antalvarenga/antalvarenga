import React from 'react'
import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'
import Panel from './common/Panel'
import styles from './ProjectsPanel.module.css'

const ProjectsPanel: React.FC = () => {
  return (
    <Panel title="PROJECTS">
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  )
}

export default ProjectsPanel
