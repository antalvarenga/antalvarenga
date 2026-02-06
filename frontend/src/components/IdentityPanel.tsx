import React from 'react'
import { profile } from '../config/profile'

const IdentityPanel: React.FC = () => {
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
        {'>'} IDENTITY_SCAN
      </h2>
      <div
        role="region"
        aria-label="Developer Identity Metadata"
        style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.5rem' }}
      >
        <span style={{ color: '#b0b0b0' }} id="label-location">
          LOCATION:
        </span>
        <span aria-labelledby="label-location">{profile.location}</span>

        <span style={{ color: '#b0b0b0' }} id="label-experience">
          EXPERIENCE:
        </span>
        <span aria-labelledby="label-experience">{profile.yearsOfExperience}+ Years</span>

        <span style={{ color: '#b0b0b0' }} id="label-focus">
          CURRENT_FOCUS:
        </span>
        <span aria-labelledby="label-focus" style={{ color: '#00ff41' }}>
          {profile.currentFocus}
        </span>
      </div>
    </section>
  )
}

export default IdentityPanel
