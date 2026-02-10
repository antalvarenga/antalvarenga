import type { CapabilityNode } from '../models/types'

export const capabilities: CapabilityNode[] = [
  {
    id: 'api-design',
    label: 'API Design',
    type: 'API',
    description:
      'Designing RESTful APIs with focus on developer experience and scalability.',
  },
  {
    id: 'tdd',
    label: 'Test Driven Development',
    type: 'Other',
    description:
      'Building robust software with integration tests to optimize speed and coverage',
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
    description: 'Building backends using Model-View-Controller arquitecture for simplicity and structure',
  },
  {
    id: 'schedulers',
    label: 'Schedulers',
    type: 'Backend',
    description: 'Building schedulers to run tasks robustly using Python APScheduler and database utilities.',
  },
  {
    id: 'backround-jobs',
    label: 'Background jobs',
    type: 'Backend',
    description: 'Developing orquestrated background workers using Python Celery to perform complex, time-consuming tasks.',
  },
]
