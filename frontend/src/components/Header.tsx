import React from 'react'
import { profile } from '../config/profile'

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0a0a0a',
        color: '#00ff41', // Matrix/Console green as primary accent
        borderBottom: '1px solid #333',
        fontFamily: 'monospace',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{profile.name}</h1>
        <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{profile.primaryRole}</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span style={{ fontSize: '0.8rem', color: '#888' }}>SYSTEM STATUS: </span>
        <span
          style={{
            color: profile.status === 'online' ? '#00ff41' : '#ff4100',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {profile.status}
        </span>
      </div>
    </header>
  )
}

export default Header
