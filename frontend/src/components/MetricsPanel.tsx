import React from 'react'
import { metrics } from '../config/metrics'
import Panel from './common/Panel'
import { theme } from '../styles/theme'

const MetricsPanel: React.FC = () => {
  return (
    <Panel title="SYSTEM_METRICS">
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, marginTop: theme.spacing.md }}>
        {metrics.map((metric) => (
          <div key={metric.id}>
            <div
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: theme.spacing.xs }}
            >
              <span style={{ color: metric.isPrimary ? theme.colors.primary : theme.colors.text }}>
                {metric.isPrimary ? '[*] ' : '[ ] '}
                {metric.label}
              </span>
              <span style={{ color: theme.colors.textMuted }}>{metric.level}%</span>
            </div>
            <div
              role="img"
              aria-label={`${metric.label} proficiency: ${metric.level}%`}
              style={{ width: '100%', height: '8px', backgroundColor: theme.colors.backgroundLighter, borderRadius: theme.borderRadius.md }}
            >
              <div
                style={{
                  width: `${metric.level}%`,
                  height: '100%',
                  backgroundColor: metric.isPrimary ? theme.colors.primary : '#555',
                  borderRadius: theme.borderRadius.md,
                  transition: 'width 1s ease-in-out',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: theme.spacing.md, fontSize: '0.7rem', color: theme.colors.textMuted }}>
        [*] PRIMARY_SYSTEM_CAPABILITY
      </div>
    </Panel>
  )
}

export default MetricsPanel
