import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Dashboard from '../Dashboard'
import { profile } from '../../config/profile'

describe('Dashboard Page', () => {
  it('renders the dashboard page and sub-components', async () => {
    render(<Dashboard />)

    // Wait for loading to finish
    const dashboardPage = await screen.findByTestId('dashboard-page')
    expect(dashboardPage).toBeInTheDocument()

    // Header check
    expect(screen.getByText(profile.name)).toBeInTheDocument()

    // Identity check
    expect(screen.getByText(/> IDENTITY_SCAN/i)).toBeInTheDocument()

    // Metrics check
    expect(screen.getByText(/> SYSTEM_METRICS/i)).toBeInTheDocument()

    // Capabilities check
    expect(screen.getByText(/> CAPABILITIES_MAP/i)).toBeInTheDocument()

    // Logs check
    expect(screen.getByText(/> SYSTEM_ACTIVITY_LOG/i)).toBeInTheDocument()

    // Command Palette check
    expect(screen.getByText(/SYSTEM_CONTROL/i)).toBeInTheDocument()
  })
})
