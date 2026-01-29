import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CapabilitiesPanel from '../CapabilitiesPanel'
import { capabilities } from '../../config/capabilities'

describe('CapabilitiesPanel Component', () => {
  it('renders all capability nodes', () => {
    render(<CapabilitiesPanel />)
    capabilities.forEach((cap) => {
      expect(screen.getByText(cap.label)).toBeInTheDocument()
    })
  })
})
