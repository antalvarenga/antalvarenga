import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import IdentityPanel from '../IdentityPanel'
import { profile } from '../../config/profile'

describe('IdentityPanel Component', () => {
  it('renders location, experience and current focus', () => {
    render(<IdentityPanel />)
    expect(screen.getByText(new RegExp(profile.location, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`${profile.yearsOfExperience}`, 'i'))).toBeInTheDocument()
    expect(screen.getByText(profile.currentFocus)).toBeInTheDocument()
  })
})
