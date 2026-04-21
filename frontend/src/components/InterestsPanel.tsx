import React from 'react'
import { interests } from '../config/interests'
import Panel from './common/Panel'
import styles from './InterestsPanel.module.css'

const InterestsPanel: React.FC = () => {
  return (
    <Panel title="INTERESTS_LOG">
      <div
        role="list"
        aria-label="Personal Interests"
        className={styles.grid}
      >
        {interests.map((interest) => (
          <div
            key={interest.id}
            role="listitem"
            className={styles.item}
          >
            {interest.icon && (
              <div className={styles.icon} aria-hidden="true">
                {interest.icon}
              </div>
            )}
            <div className={styles.content}>
              <div className={styles.header}>
                <span className={styles.label}>{interest.label}</span>
              </div>
              {interest.description && (
                <div className={styles.description}>
                  {interest.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default InterestsPanel
