import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ProjectCard from '../ProjectCard'
import type { Project } from '../../models/types'

const mockProject: Project = {
  id: 'p1',
  name: 'Test Project',
  status: 'Stable',
  summary: 'A test project summary.',
  architectureSummary: 'Microservices',
  backendFocus: 'High',
  responsibilities: ['Dev', 'Ops']
}

describe('ProjectCard Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders correctly in idle state', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText(/Test Project/)).toBeInTheDocument()
    expect(screen.queryByText(/INITIATING HANDSHAKE/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Microservices/)).not.toBeInTheDocument()
  })

  it('goes through lifecycle states on click', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Click to start expansion
    fireEvent.click(screen.getByRole('button'))

    // Requesting
    expect(screen.getByText(/INITIATING HANDSHAKE/)).toBeInTheDocument()
    expect(screen.queryByText(/Microservices/)).not.toBeInTheDocument()

    // Validating (after 300ms)
    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(screen.getByText(/VERIFYING AUTHORIZATION/)).toBeInTheDocument()

    // Processing (after another 400ms -> 700ms total)
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(screen.getByText(/ESTABLISHING DATA STREAM/)).toBeInTheDocument()

    // Expanded (after another 400ms -> 1100ms total)
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(screen.queryByText(/ESTABLISHING DATA STREAM/)).not.toBeInTheDocument()
    expect(screen.getByText(/Microservices/)).toBeInTheDocument()
  })
})
