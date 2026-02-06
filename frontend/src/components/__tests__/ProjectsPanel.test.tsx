import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectsPanel from '../ProjectsPanel'
import { projects } from '../../config/projects'

describe('ProjectsPanel Component', () => {
  it('renders all projects', () => {
    render(<ProjectsPanel />)
    projects.forEach((project) => {
      expect(screen.getByText(new RegExp(project.name))).toBeInTheDocument()
    })
  })

  it('expands project details on click', async () => {
    render(<ProjectsPanel />)
    const firstProject = projects[0]
    const projectElement = screen.getByText(new RegExp(firstProject.name))

    // Initially summary is visible, responsibilities might not be (depending on implementation)
    expect(screen.getByText(firstProject.summary)).toBeInTheDocument()

    // Click to expand
    fireEvent.click(projectElement)

    // Check for architecture summary which should be visible now
    // We wait for the simulated request lifecycle to complete (~1.1s)
    await waitFor(() => {
      expect(screen.getByText(new RegExp(firstProject.architectureSummary, 'i'))).toBeInTheDocument()
    }, { timeout: 2000 })
  })
})
