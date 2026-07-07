import React, { useState } from 'react'
import { profile } from '../config/profile'
import { downloadCvPdf } from '../cv/generateCvPdf.tsx'
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      await downloadCvPdf()
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.primaryRole}</p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.exportButton}
          onClick={() => void handleExport()}
          disabled={isExporting}
          aria-label="Download CV as PDF"
        >
          {isExporting ? 'Exporting…' : 'Export'}
        </button>
        <div className={styles.statusContainer}>
          <span className={styles.statusLabel}>SYSTEM STATUS: </span>
          <span
            className={`${styles.status} ${
              profile.status === 'online' ? styles.statusOnline : styles.statusOffline
            }`}
          >
            {profile.status}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
