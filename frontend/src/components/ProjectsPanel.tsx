import React from 'react'
import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'
import Panel from './common/Panel'
import { theme } from '../styles/theme'

const ProjectsPanel: React.FC = () => {
  return (
    <Panel title="PROJECTS_AS_SERVICES">
      <div style={{ marginTop: theme.spacing.md }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  )
}

export default ProjectsPanel
