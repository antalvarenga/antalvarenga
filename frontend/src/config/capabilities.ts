import type { CapabilityNode } from '../models/types'

export const capabilities: CapabilityNode[] = [
  {
    id: 'api-design',
    label: 'API Design',
    type: 'API',
    description:
      'Designing RESTful and GraphQL APIs with focus on developer experience and scalability.',
  },
  {
    id: 'react-dev',
    label: 'React Development',
    type: 'Frontend',
    description:
      'Building high-performance, accessible, and maintainable user interfaces with React.',
  },
  {
    id: 'automation',
    label: 'Process Automation',
    type: 'DevOps',
    description: 'Streamlining workflows and CI/CD pipelines to improve development velocity.',
  },
]
