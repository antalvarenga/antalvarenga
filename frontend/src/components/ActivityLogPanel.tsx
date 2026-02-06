import React from 'react'
import { activityLogs } from '../config/logs'
import Panel from './common/Panel'
import { theme } from '../styles/theme'

const ActivityLogPanel: React.FC = () => {
  return (
    <Panel title="SYSTEM_ACTIVITY_LOG">
      <div
        role="log"
        aria-live="polite"
        aria-label="System activity log"
        style={{
          marginTop: theme.spacing.md,
          maxHeight: '300px',
          overflowY: 'auto',
          fontSize: '0.85rem',
          lineHeight: '1.4',
        }}
      >
        {activityLogs.map((log) => (
          <div key={log.id} style={{ marginBottom: '0.75rem', display: 'flex', gap: theme.spacing.md }}>
            <span style={{ color: theme.colors.textMuted, whiteSpace: 'nowrap' }}>[{log.timestampLabel}]</span>
            <span
              style={{
                color:
                  log.category === 'deployment'
                    ? theme.colors.primary
                    : log.category === 'learning'
                      ? theme.colors.accentBlue
                      : theme.colors.accentYellow,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                minWidth: '100px',
              }}
            >
              {log.category}
            </span>
            <span>{log.message}</span>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default ActivityLogPanel
