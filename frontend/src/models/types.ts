export type SkillCategory = 'backend' | 'frontend' | 'devops' | 'other'
export type SkillTrend = 'up' | 'steady' | 'down'

export interface SkillMetric {
  id: string
  label: string
  category: SkillCategory
  level: number // 0-100
  trend: SkillTrend
  isPrimary: boolean
}

export type ProjectStatus = 'Stable' | 'In Progress' | 'Archived'

export interface Project {
  id: string
  name: string
  summary: string
  status: ProjectStatus
  responsibilities: string[]
  architectureSummary: string
  backendFocus: string
  uiPreviewAsset?: string
  capabilityIds: string[]
}

export type CapabilityType = 'Auth' | 'API' | 'Database' | 'Cache' | 'Frontend' | 'DevOps' | 'Other'

export interface CapabilityNode {
  id: string
  label: string
  type: CapabilityType
  description: string
}

export type LogCategory = 'deployment' | 'learning' | 'principle' | 'other'

export interface ActivityLogEntry {
  id: string
  timestampLabel: string
  category: LogCategory
  message: string
}

export interface DeveloperProfile {
  id: string
  name: string
  primaryRole: string
  location: string
  yearsOfExperience: number
  currentFocus: string
  status: 'online' | 'offline' | 'busy' | 'maintenance'
}
