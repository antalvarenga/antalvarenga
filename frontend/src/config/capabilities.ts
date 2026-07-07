import type { CapabilityNode } from '../models/types'

export const capabilities: CapabilityNode[] = [
  {
    id: 'agile-dev',
    label: 'Agile Development',
    type: 'Other',
    description:
      'Comfortable in working in fast-paced, Agile & Scrum environments, with frequent requirement changes',
  },
  {
    id: 'agentic',
    label: 'Agentic Development',
    type: 'Other',
    description: 'Using AI tools and agents to ship features fast.',
  },
  {
    id: 'tdd',
    label: 'Test Driven Development',
    type: 'Other',
    description: 'Building robust software with integration tests to optimize speed and coverage',
  },
  {
    id: 'automation',
    label: 'Process Automation',
    type: 'DevOps',
    description: 'Streamlining workflows and CI/CD pipelines to improve development velocity.',
  },
  {
    id: 'mvc',
    label: 'MVC',
    type: 'Backend',
    description:
      'Building backends using Model-View-Controller arquitecture for simplicity and structure',
  },
  {
    id: 'event-driven',
    label: 'Event-driven arquitecture',
    type: 'Backend',
    description: 'Building fault-tolerant, scalable solutions with event-driven design.',
  },
  {
    id: 'backround-jobs',
    label: 'Background jobs',
    type: 'Backend',
    description:
      'Developing orquestrated background workers using Python Celery to perform complex asynchronous tasks.',
  },
  {
    id: 'languages',
    label: 'Languages',
    type: 'Other',
    description: 'Portuguese - Native; English - Fluent; Spanish - Basic',
  },
]
