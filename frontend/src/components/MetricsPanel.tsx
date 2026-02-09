import React from 'react'
import { metrics } from '../config/metrics'
import Panel from './common/Panel'
import styles from './MetricsPanel.module.css'

const MetricsPanel: React.FC = () => {
  return (
    <Panel title="SYSTEM_METRICS">
      <div className={styles.container}>
        {metrics.map((metric) => (
          <div key={metric.id}>
            <div className={styles.metricHeader}>
              <span className={metric.isPrimary ? styles.primaryLabel : styles.metricLabel}>
                {metric.isPrimary ? '[*] ' : '[ ] '}
                {metric.label}
              </span>
              <span className={styles.metricLevel}>{metric.level}%</span>
            </div>
            <div
              role="img"
              aria-label={`${metric.label} proficiency: ${metric.level}%`}
              className={styles.barContainer}
            >
              <div
                className={`${styles.barFill} ${metric.isPrimary ? styles.primaryBarFill : ''}`}
                style={{ width: `${metric.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        [*] PRIMARY_SYSTEM_CAPABILITY
      </div>
    </Panel>
  )
}

export default MetricsPanel
