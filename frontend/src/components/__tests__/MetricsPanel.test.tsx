import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MetricsPanel from '../MetricsPanel'
import { metrics } from '../../config/metrics'

describe('MetricsPanel Component', () => {
  it('renders all skill metrics', () => {
    render(<MetricsPanel />)
    metrics.forEach((metric) => {
      expect(screen.getByText(new RegExp(metric.label))).toBeInTheDocument()
    })
  })

  it('emphasizes primary metrics', () => {
    render(<MetricsPanel />)
    const primaryMetrics = metrics.filter((m) => m.isPrimary)
    primaryMetrics.forEach((metric) => {
      expect(screen.getByText(new RegExp(metric.label))).toBeInTheDocument()
    })
  })
})
