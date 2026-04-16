import React from 'react'
import { activityLogs } from '../config/logs'
import Panel from './common/Panel'
import styles from './ActivityLogPanel.module.css'

const ActivityLogPanel: React.FC = () => {
  return (
    <Panel title="SYSTEM_ACTIVITY_LOG">
      <div
        role="log"
        aria-live="polite"
        aria-label="System activity log"
        className={styles.logContainer}
      >
        {activityLogs.map((log) => (
          <div key={log.id} className={styles.logEntry}>
            <span className={styles.timestamp}>[{log.timestampLabel}]</span>
            <span
              className={`${styles.category} ${
                log.category === 'work'
                  ? styles.categoryDeployment
                  : log.category === 'education'
                    ? styles.categoryLearning
                    : log.category === 'certification'
                    ? styles.categoryCertification
                    : styles.categoryDefault
              }`}
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
