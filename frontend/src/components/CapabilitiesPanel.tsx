import React from 'react'
import { capabilities } from '../config/capabilities'
import Panel from './common/Panel'
import styles from './CapabilitiesPanel.module.css'

const CapabilitiesPanel: React.FC = () => {
  return (
    <Panel title="CAPABILITIES_MAP">
      <div
        role="list"
        aria-label="Technical Capabilities"
        className={styles.grid}
      >
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            role="listitem"
            className={styles.card}
          >
            <div className={styles.type}>
              [{cap.type}]
            </div>
            <div className={styles.label}>{cap.label}</div>
            <div className={styles.description}>
              {cap.description}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default CapabilitiesPanel
