import type { ActivityLogEntry } from '../models/types'

export const activityLogs: ActivityLogEntry[] = [
  {
    id: 'log-1',
    timestampLabel: '2026-01-28 10:00:00',
    category: 'deployment',
    message: 'Initializing Phase 2: Foundational data models and configuration.',
  },
  {
    id: 'log-2',
    timestampLabel: '2026-01-28 10:15:00',
    category: 'learning',
    message: 'Integrating Vitest and Prettier for enhanced code quality and testing.',
  },
  {
    id: 'log-3',
    timestampLabel: '2026-01-28 10:30:00',
    category: 'principle',
    message: 'Adopting a "Systems-as-Service" architecture for portfolio representation.',
  },
]
