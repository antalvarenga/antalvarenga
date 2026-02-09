import React from 'react'
import { profile } from '../config/profile'
import Panel from './common/Panel'
import styles from './IdentityPanel.module.css'

const IdentityPanel: React.FC = () => {
  return (
    <Panel title="IDENTITY_SCAN">
      <div
        role="region"
        aria-label="Developer Identity Metadata"
        className={styles.grid}
      >
        <span className={styles.label} id="label-location">
          LOCATION:
        </span>
        <span aria-labelledby="label-location">{profile.location}</span>

        <span className={styles.label} id="label-experience">
          EXPERIENCE:
        </span>
        <span aria-labelledby="label-experience">{profile.yearsOfExperience}+ Years</span>

        <span className={styles.label} id="label-focus">
          CURRENT_FOCUS:
        </span>
        <span aria-labelledby="label-focus" className={styles.focus}>
          {profile.currentFocus}
        </span>
      </div>
    </Panel>
  )
}

export default IdentityPanel
