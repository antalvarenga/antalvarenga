import React, { useState } from 'react'
import styles from './CommandPalette.module.css'

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
    { id: 'interests', label: 'GOTO_INTERESTS' },
    { id: 'logs', label: 'GOTO_SYSTEM_LOGS' },
  ]

  return (
    <div
      className={styles.container}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isOpen) setIsOpen(false)
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? 'Close control menu' : 'Open system control menu'}
      >
        {isOpen ? 'CLOSE_CONTROL' : 'SYSTEM_CONTROL'}
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="System commands"
          className={styles.menu}
        >
          {commands.map((cmd) => (
            <button
              key={cmd.id}
              role="menuitem"
              className={styles.item}
              onClick={() => {
                onCommand(cmd.id)
                setIsOpen(false)
              }}
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
