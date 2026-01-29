import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CommandPalette from '../CommandPalette'

describe('CommandPalette Component', () => {
  it('renders command palette trigger', () => {
    render(<CommandPalette onCommand={vi.fn()} />)
    expect(screen.getByText(/SYSTEM_CONTROL/i)).toBeInTheDocument()
  })

  it('opens and displays commands when clicked', () => {
    render(<CommandPalette onCommand={vi.fn()} />)
    fireEvent.click(screen.getByText(/SYSTEM_CONTROL/i))
    expect(screen.getByText(/GOTO_IDENTITY/i)).toBeInTheDocument()
    expect(screen.getByText(/GOTO_METRICS/i)).toBeInTheDocument()
    expect(screen.getByText(/GOTO_PROJECTS/i)).toBeInTheDocument()
  })

  it('calls onCommand when a command is clicked', () => {
    const onCommand = vi.fn()
    render(<CommandPalette onCommand={onCommand} />)
    fireEvent.click(screen.getByText(/SYSTEM_CONTROL/i))
    fireEvent.click(screen.getByText(/GOTO_PROJECTS/i))
    expect(onCommand).toHaveBeenCalledWith('projects')
  })
})
