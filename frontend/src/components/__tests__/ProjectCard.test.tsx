import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from '../ProjectCard'
import type { Project } from '../../models/types'

const mockProject: Project = {
  id: 'p1',
  name: 'Test Project',
  duration: '1 month',
  summary: 'A test project summary.',
  architectureSummary: 'Microservices',
  backendFocus: 'High',
  responsibilities: ['Dev', 'Ops'],
  capabilityIds: ['api-design', 'cli-dev', 'automation'],
}

describe('ProjectCard Component', () => {
  it('renders correctly in collapsed state', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText(/Test Project/)).toBeInTheDocument()
    expect(screen.queryByText(/Microservices/)).not.toBeInTheDocument()
  })

  it('toggles expansion state on click', () => {
    render(<ProjectCard project={mockProject} />)

    const button = screen.getByRole('button')

    // Click to expand
    fireEvent.click(button)
    expect(screen.getByText(/Microservices/)).toBeInTheDocument()
    expect(screen.getByText(/Dev/)).toBeInTheDocument()
    expect(screen.getByText(/Ops/)).toBeInTheDocument()

    // Click to collapse
    fireEvent.click(button)
    expect(screen.queryByText(/Microservices/)).not.toBeInTheDocument()
  })
})
