import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'
import { profile } from '../../config/profile'

describe('Header Component', () => {
  it('renders developer name and role', () => {
    render(<Header />)
    expect(screen.getByText(profile.name)).toBeInTheDocument()
    expect(screen.getByText(profile.primaryRole)).toBeInTheDocument()
  })

  it('renders system status', () => {
    render(<Header />)
    expect(screen.getByText(/SYSTEM STATUS:/i)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(profile.status, 'i'))).toBeInTheDocument()
  })
})
