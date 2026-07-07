import { profile } from '../config/profile'
import { metrics } from '../config/metrics'
import { capabilities } from '../config/capabilities'
import { projects } from '../config/projects'
import { activityLogs } from '../config/logs'
import { interests } from '../config/interests'
import type { LogCategory, SkillCategory } from '../models/types'

export interface CvTimelineEntry {
  date: string
  message: string
}

export interface CvProject {
  name: string
  duration: string
  summary: string
  responsibilities: string[]
  techStack: string
}

export interface CvContent {
  header: {
    name: string
    role: string
    location: string
    email: string
    linkedinUrl?: string
    githubUrl?: string
    websiteUrl?: string
  }
  summary: string
  skillGroups: { category: string; skills: string[] }[]
  projects: CvProject[]
  competencies: { label: string; description: string }[]
  experience: CvTimelineEntry[]
  certifications: CvTimelineEntry[]
  education: CvTimelineEntry[]
  interests: { label: string; description: string }[]
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  devops: 'DevOps',
  other: 'Other',
}

const CATEGORY_ORDER: SkillCategory[] = ['backend', 'devops', 'frontend', 'other']

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatCvDate(timestampLabel: string): string {
  const datePart = timestampLabel.split(' ')[0]
  const [year, month] = datePart.split('-')
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`
}

function sortByTimestampDesc(a: { timestampLabel: string }, b: { timestampLabel: string }): number {
  return b.timestampLabel.localeCompare(a.timestampLabel)
}

function buildTimelineEntries(category: LogCategory): CvTimelineEntry[] {
  return activityLogs
    .filter((log) => log.category === category)
    .sort(sortByTimestampDesc)
    .map((log) => ({
      date: formatCvDate(log.timestampLabel),
      message: log.message,
    }))
}

function buildSkillGroups(): CvContent['skillGroups'] {
  return CATEGORY_ORDER.flatMap((category) => {
    const skills = metrics
      .filter((metric) => metric.category === category)
      .map((metric) => metric.label)

    if (skills.length === 0) return []

    return [{ category: CATEGORY_LABELS[category], skills }]
  })
}

function buildSummary(): string {
  return `${profile.primaryRole} with ${profile.yearsOfExperience}+ years of experience \
designing scalable backend systems, REST APIs, and \
distributed applications. Experienced leading backend development, \
collaborating directly with clients, and delivering cloud-native \
solutions across cybersecurity, logistics, proptech and data platforms. \
Primary expertise in Python, FastAPI, PostgreSQL, Docker.`
}

export function buildCvContent(): CvContent {
  return {
    header: {
      name: profile.name,
      role: profile.primaryRole,
      location: profile.location,
      email: profile.email,
      linkedinUrl: profile.linkedinUrl,
      githubUrl: profile.githubUrl,
      websiteUrl: profile.websiteUrl,
    },
    summary: buildSummary(),
    skillGroups: buildSkillGroups(),
    projects: projects.map((project) => ({
      name: project.name,
      duration: project.duration,
      summary: project.summary,
      responsibilities: project.responsibilities,
      techStack: project.architectureSummary,
    })),
    competencies: capabilities.map((capability) => ({
      label: capability.label,
      description: capability.description,
    })),
    experience: buildTimelineEntries('work'),
    certifications: buildTimelineEntries('certification'),
    education: buildTimelineEntries('education'),
    interests: interests.map((interest) => ({
      label: interest.label,
      description: interest.description ?? '',
    })),
  }
}
