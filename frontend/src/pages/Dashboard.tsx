import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import IdentityPanel from '../components/IdentityPanel'
import MetricsPanel from '../components/MetricsPanel'
import ProjectsPanel from '../components/ProjectsPanel'
import CapabilitiesPanel from '../components/CapabilitiesPanel'
import ActivityLogPanel from '../components/ActivityLogPanel'
import CommandPalette from '../components/CommandPalette'
import styles from './Dashboard.module.css'

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleCommand = (panelId: string) => {
    const element = document.getElementById(panelId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Focus the heading or the panel itself for screen readers
      const heading = element.querySelector('h2')
      if (heading) {
        heading.tabIndex = -1
        heading.focus()
      }
    }
  }

  if (isLoading) {
    return (
      <div
        role="alert"
        aria-busy="true"
        aria-label="Loading dashboard"
        className={styles.loadingScreen}
      >
        <div
          className={`skeleton ${styles.skeletonHeader}`}
          aria-hidden="true"
        ></div>
        <div className={styles.grid}>
          <div>
            <div
              className={`skeleton ${styles.skeletonSmall} ${styles.skeletonBlock}`}
            ></div>
            <div className={`skeleton ${styles.skeletonMedium}`}></div>
          </div>
          <div>
            <div
              className={`skeleton ${styles.skeletonLarge} ${styles.skeletonBlock}`}
            ></div>
            <div className={`skeleton ${styles.skeletonSmall}`}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      data-testid="dashboard-page"
      className={styles.dashboard}
    >
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <div id="identity">
              <IdentityPanel />
            </div>
            <div id="metrics">
              <MetricsPanel />
            </div>
            <div id="capabilities">
              <CapabilitiesPanel />
            </div>
          </div>
          <div>
            <div id="projects">
              <ProjectsPanel />
            </div>
            <div id="logs">
              <ActivityLogPanel />
            </div>
          </div>
        </div>
      </main>
      <CommandPalette onCommand={handleCommand} />
    </div>
  )
}

export default Dashboard
