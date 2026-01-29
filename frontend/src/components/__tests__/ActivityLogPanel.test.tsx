import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ActivityLogPanel from '../ActivityLogPanel'
import { activityLogs } from '../../config/logs'

describe('ActivityLogPanel Component', () => {
  it('renders all log entries', () => {
    render(<ActivityLogPanel />)
    activityLogs.forEach((log) => {
      expect(screen.getByText(new RegExp(log.message))).toBeInTheDocument()
    })
  })
})
