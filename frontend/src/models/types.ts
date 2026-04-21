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

export type ProjectStatus = 'Completed' | 'In Progress'

export interface Project {
  id: string
  name: string
  summary: string
  duration: string
  responsibilities: string[]
  architectureSummary: string
  backendFocus: string
  uiPreviewAsset?: string
  capabilityIds: string[]
}

export type CapabilityType = 'Auth' | 'API' | 'Database' | 'Cache' | 'Frontend' | 'DevOps' | 'Other' | "Backend"

export interface CapabilityNode {
  id: string
  label: string
  type: CapabilityType
  description: string
}

export type LogCategory = 'work' | 'education' | 'certification' | 'other'

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

export type InterestCategory = 'show' | 'hobby' | 'music' | 'book' | 'other'

export interface Interest {
  id: string
  label: string
  category: InterestCategory
  description?: string
  icon?: string
}
