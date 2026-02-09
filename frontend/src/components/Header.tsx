import React from 'react'
import { profile } from '../config/profile'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.primaryRole}</p>
      </div>
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
    </header>
  )
}

export default Header
