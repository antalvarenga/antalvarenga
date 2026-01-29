import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import IdentityPanel from '../components/IdentityPanel'
import MetricsPanel from '../components/MetricsPanel'
import ProjectsPanel from '../components/ProjectsPanel'
import CapabilitiesPanel from '../components/CapabilitiesPanel'
import ActivityLogPanel from '../components/ActivityLogPanel'
import CommandPalette from '../components/CommandPalette'

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
    }
  }

  if (isLoading) {
    return (
      <div style={{ backgroundColor: '#050505', minHeight: '100vh', padding: '2rem' }}>
        <div
          className="skeleton"
          style={{ width: '100%', height: '60px', marginBottom: '2rem' }}
        ></div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          <div>
            <div
              className="skeleton"
              style={{ width: '100%', height: '200px', marginBottom: '1rem' }}
            ></div>
            <div className="skeleton" style={{ width: '100%', height: '300px' }}></div>
          </div>
          <div>
            <div
              className="skeleton"
              style={{ width: '100%', height: '400px', marginBottom: '1rem' }}
            ></div>
            <div className="skeleton" style={{ width: '100', height: '200px' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      data-testid="dashboard-page"
      style={{
        backgroundColor: '#050505',
        minHeight: '100vh',
        color: '#eee',
        fontFamily: 'monospace',
      }}
    >
      <Header />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
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
