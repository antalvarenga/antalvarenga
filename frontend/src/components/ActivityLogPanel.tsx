import React from 'react'
import { activityLogs } from '../config/logs'

const ActivityLogPanel: React.FC = () => {
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
        {'>'} SYSTEM_ACTIVITY_LOG
      </h2>
      <div
        style={{
          marginTop: '1rem',
          maxHeight: '300px',
          overflowY: 'auto',
          fontSize: '0.85rem',
          lineHeight: '1.4',
        }}
      >
        {activityLogs.map((log) => (
          <div key={log.id} style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
            <span style={{ color: '#555', whiteSpace: 'nowrap' }}>[{log.timestampLabel}]</span>
            <span
              style={{
                color:
                  log.category === 'deployment'
                    ? '#00ff41'
                    : log.category === 'learning'
                      ? '#00bcff'
                      : '#ffbc00',
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
    </section>
  )
}

export default ActivityLogPanel
