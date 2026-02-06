import React from 'react'
import { capabilities } from '../config/capabilities'
import Panel from './common/Panel'
import { theme } from '../styles/theme'

const CapabilitiesPanel: React.FC = () => {
  return (
    <Panel title="CAPABILITIES_MAP">
      <div
        role="list"
        aria-label="Technical Capabilities"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: theme.spacing.md,
          marginTop: theme.spacing.md,
        }}
      >
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            role="listitem"
            style={{
              padding: '0.75rem',
              backgroundColor: theme.colors.backgroundLight,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.borderRadius.sm,
            }}
          >
            <div style={{ color: theme.colors.primary, fontSize: '0.8rem', marginBottom: theme.spacing.xs }}>
              [{cap.type}]
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{cap.label}</div>
            <div style={{ fontSize: '0.75rem', color: theme.colors.textMuted, marginTop: theme.spacing.sm }}>
              {cap.description}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default CapabilitiesPanel
