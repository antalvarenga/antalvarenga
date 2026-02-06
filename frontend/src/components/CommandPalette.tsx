import React, { useState } from 'react'
import { theme } from '../styles/theme'

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
        bottom: theme.spacing.xl,
        right: theme.spacing.xl,
        zIndex: 1000,
        fontFamily: theme.fonts.mono,
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isOpen) setIsOpen(false)
      }}
    >
      <style>
        {`
          .command-palette-toggle:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
          }
          .command-palette-item:hover {
            background-color: ${theme.colors.backgroundLighter} !important;
            color: ${theme.colors.primary} !important;
          }
          .command-palette-item:focus {
            outline: 2px solid ${theme.colors.primary};
            background-color: ${theme.colors.backgroundLighter};
          }
        `}
      </style>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="command-palette-toggle"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? 'Close control menu' : 'Open system control menu'}
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.backgroundDark,
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: theme.borderRadius.md,
          boxShadow: `0 4px 12px rgba(0, 255, 65, 0.3)`,
          transition: 'all 0.2s ease',
          outline: 'none',
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
            backgroundColor: theme.colors.background,
            border: `1px solid ${theme.colors.primary}`,
            borderRadius: theme.borderRadius.md,
            padding: theme.spacing.sm,
            width: '200px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}
        >
          {commands.map((cmd) => (
            <button
              key={cmd.id}
              role="menuitem"
              className="command-palette-item"
              onClick={() => {
                onCommand(cmd.id)
                setIsOpen(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                backgroundColor: 'transparent',
                color: theme.colors.text,
                border: 'none',
                padding: theme.spacing.sm,
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                outline: 'none',
                borderRadius: theme.borderRadius.sm,
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
