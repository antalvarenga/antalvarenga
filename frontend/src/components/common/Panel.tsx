import React from 'react'
import { theme } from '../../styles/theme'

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
      className={className}
      style={{
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.md,
        fontFamily: theme.fonts.mono,
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
      }}
    >
      <h2
        style={{
          color: theme.colors.primary,
          marginTop: 0,
          fontSize: '1.2rem',
          borderBottom: `1px solid ${theme.colors.border}`,
          paddingBottom: theme.spacing.sm,
        }}
      >
        {'>'} {title}
      </h2>
      {children}
    </section>
  )
}

export default Panel
