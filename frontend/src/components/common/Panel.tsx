import React from 'react'
import styles from './Panel.module.css'

interface PanelProps {
  title: string
  children: React.ReactNode
  id?: string
  className?: string
}

const Panel: React.FC<PanelProps> = ({ title, children, id, className }) => {
  return (
    <section
      id={id}
      className={`${styles.panel} ${className || ''}`}
    >
      <h2 className={styles.header}>
        {'>'} {title}
      </h2>
      {children}
    </section>
  )
}

export default Panel
