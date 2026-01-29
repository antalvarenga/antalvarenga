import React from 'react'
import { capabilities } from '../config/capabilities'

const CapabilitiesPanel: React.FC = () => {
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
        {'>'} CAPABILITIES_MAP
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            style={{
              padding: '0.75rem',
              backgroundColor: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '2px',
            }}
          >
            <div style={{ color: '#00ff41', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              [{cap.type}]
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{cap.label}</div>
            <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
              {cap.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesPanel
