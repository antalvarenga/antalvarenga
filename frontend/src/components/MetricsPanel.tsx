import React from 'react'
import { metrics } from '../config/metrics'

const MetricsPanel: React.FC = () => {
  return (
    <section
      style={{
        padding: '1.5rem',
        backgroundColor: '#111',
        border: '1px solid #333',
        borderRadius: '4px',
        fontFamily: 'monospace',
        color: '#ccc',
        marginBottom: '1rem',
      }}
    >
      <h2
        style={{
          color: '#00ff41',
          marginTop: 0,
          fontSize: '1.2rem',
          borderBottom: '1px solid #333',
          paddingBottom: '0.5rem',
        }}
      >
        {'>'} SYSTEM_METRICS
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {metrics.map((metric) => (
          <div key={metric.id}>
            <div
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}
            >
              <span style={{ color: metric.isPrimary ? '#00ff41' : '#ccc' }}>
                {metric.isPrimary ? '[*] ' : '[ ] '}
                {metric.label}
              </span>
              <span style={{ color: '#b0b0b0' }}>{metric.level}%</span>
            </div>
            <div
              role="img"
              aria-label={`${metric.label} proficiency: ${metric.level}%`}
              style={{ width: '100%', height: '8px', backgroundColor: '#222', borderRadius: '4px' }}
            >
              <div
                style={{
                  width: `${metric.level}%`,
                  height: '100%',
                  backgroundColor: metric.isPrimary ? '#00ff41' : '#555',
                  borderRadius: '4px',
                  transition: 'width 1s ease-in-out',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: '#b0b0b0' }}>
        [*] PRIMARY_SYSTEM_CAPABILITY
      </div>
    </section>
  )
}

export default MetricsPanel
