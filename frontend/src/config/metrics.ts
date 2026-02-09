import type { SkillMetric } from '../models/types'

export const metrics: SkillMetric[] = [
  {
    id: 'python',
    label: 'Python',
    category: 'backend',
    level: 85,
    trend: 'up',
    isPrimary: true,
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    category: 'backend',
    level: 85,
    trend: 'up',
    isPrimary: true,
  },
  {
    id: 'node-js',
    label: 'Node.js / TypeScript',
    category: 'backend',
    level: 95,
    trend: 'up',
    isPrimary: true,
  },
  {
    id: 'react',
    label: 'React / Next.js',
    category: 'frontend',
    level: 90,
    trend: 'steady',
    isPrimary: false,
  },
  {
    id: 'docker-k8s',
    label: 'Docker & Kubernetes',
    category: 'devops',
    level: 80,
    trend: 'up',
    isPrimary: true,
  },
  {
    id: 'aws',
    label: 'AWS Cloud Services',
    category: 'devops',
    level: 85,
    trend: 'steady',
    isPrimary: true,
  },
]
