import React from 'react'
import { profile } from '../config/profile'
import Panel from './common/Panel'
import { theme } from '../styles/theme'

const IdentityPanel: React.FC = () => {
  return (
    <Panel title="IDENTITY_SCAN">
      <div
        role="region"
        aria-label="Developer Identity Metadata"
        style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: theme.spacing.sm }}
      >
        <span style={{ color: theme.colors.textMuted }} id="label-location">
          LOCATION:
        </span>
        <span aria-labelledby="label-location">{profile.location}</span>

        <span style={{ color: theme.colors.textMuted }} id="label-experience">
          EXPERIENCE:
        </span>
        <span aria-labelledby="label-experience">{profile.yearsOfExperience}+ Years</span>

        <span style={{ color: theme.colors.textMuted }} id="label-focus">
          CURRENT_FOCUS:
        </span>
        <span aria-labelledby="label-focus" style={{ color: theme.colors.primary }}>
          {profile.currentFocus}
        </span>
      </div>
    </Panel>
  )
}

export default IdentityPanel
