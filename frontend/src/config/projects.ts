import type { Project } from '../models/types'

export const projects: Project[] = [
  {
    id: 'speckit',
    name: 'SpecKit',
    summary: 'A developer productivity tool for automated specification and task management.',
    status: 'In Progress',
    responsibilities: [
      'Architected the core execution engine',
      'Developed the CLI interface',
      'Implemented automated task tracking',
    ],
    architectureSummary:
      'Node.js based CLI tool with a plugin architecture for extensible commands.',
    backendFocus: 'File system operations, process management, and LLM integration.',
    capabilityIds: ['api-design', 'cli-dev', 'automation'],
  },
  {
    id: 'portfolio-v3',
    name: 'Systems Dashboard Portfolio',
    summary: 'This very dashboard, presenting a developer as a live production system.',
    status: 'In Progress',
    responsibilities: [
      'UX design and prototyping',
      'React implementation',
      'System-inspired UI development',
    ],
    architectureSummary: 'Single-page React application with static data-driven configuration.',
    backendFocus: 'N/A (Static hosting, optimized for instant delivery).',
    capabilityIds: ['react-dev', 'frontend-arch', 'ux-design'],
  },
]
