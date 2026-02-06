import React, { useState } from 'react'

interface CommandPaletteProps {
  onCommand: (panelId: string) => void
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ onCommand }) => {
  const [isOpen, setIsOpen] = useState(false)

  const commands = [
    { id: 'identity', label: 'GOTO_IDENTITY' },
    { id: 'metrics', label: 'GOTO_METRICS' },
    { id: 'projects', label: 'GOTO_PROJECTS' },
    { id: 'capabilities', label: 'GOTO_CAPABILITIES' },
    { id: 'logs', label: 'GOTO_SYSTEM_LOGS' },
  ]

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        fontFamily: 'monospace',
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isOpen) setIsOpen(false)
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? 'Close control menu' : 'Open system control menu'}
        style={{
          backgroundColor: '#00ff41',
          color: '#000',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0, 255, 65, 0.3)',
          outlineColor: '#00ff41',
        }}
      >
        {isOpen ? 'CLOSE_CONTROL' : 'SYSTEM_CONTROL'}
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="System commands"
          style={{
            position: 'absolute',
            bottom: '3.5rem',
            right: 0,
            backgroundColor: '#111',
            border: '1px solid #00ff41',
            borderRadius: '4px',
            padding: '0.5rem',
            width: '200px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}
        >
          {commands.map((cmd) => (
            <button
              key={cmd.id}
              role="menuitem"
              onClick={() => {
                onCommand(cmd.id)
                setIsOpen(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                backgroundColor: 'transparent',
                color: '#ccc',
                border: 'none',
                padding: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'background 0.2s',
                outlineColor: '#00ff41',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#222')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {'>'} {cmd.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommandPalette
