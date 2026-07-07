import { describe, it, expect } from 'vitest'
import { buildCvContent, formatCvDate } from '../buildCvContent'
import { profile } from '../../config/profile'
import { projects } from '../../config/projects'
import { capabilities } from '../../config/capabilities'
import { interests } from '../../config/interests'

describe('buildCvContent', () => {
  it('maps profile header and summary', () => {
    const content = buildCvContent()

    expect(content.header.name).toBe(profile.name)
    expect(content.header.email).toBe(profile.email)
    expect(content.header.linkedinUrl).toBe(profile.linkedinUrl)
    expect(content.summary).toContain(profile.primaryRole)
    expect(content.summary).toContain(profile.yearsOfExperience)
  })

  it('groups skills by category in defined order', () => {
    const content = buildCvContent()

    expect(content.skillGroups.map((group) => group.category)).toEqual([
      'Backend',
      'DevOps',
      'Frontend',
    ])
    expect(content.skillGroups[0].skills.some((skill) => skill.includes('Python'))).toBe(true)
  })

  it('maps all projects with tech stack from architecture summary', () => {
    const content = buildCvContent()

    expect(content.projects).toHaveLength(projects.length)
    expect(content.projects[0].techStack).toBe(projects[0].architectureSummary)
  })

  it('maps capabilities and interests', () => {
    const content = buildCvContent()

    expect(content.competencies).toHaveLength(capabilities.length)
    expect(content.interests).toHaveLength(interests.length)
    expect(content.interests[0].description).toBeTruthy()
  })

  it('sorts experience entries newest first', () => {
    const content = buildCvContent()

    expect(content.experience[0].message).toContain('Senior Software Engineer')
    expect(content.experience.at(-1)?.message).toContain('everis')
  })

  it('includes certifications and education separately', () => {
    const content = buildCvContent()

    expect(
      content.certifications.some((entry) => entry.message.includes('Azure AI Fundamentals')),
    ).toBe(true)
    expect(content.education.some((entry) => entry.message.includes('Masters'))).toBe(true)
  })
})

describe('formatCvDate', () => {
  it('formats ISO timestamps as Mon YYYY', () => {
    expect(formatCvDate('2022-07-01 09:00:00')).toBe('Jul 2022')
    expect(formatCvDate('2016-11-09 12:00:00')).toBe('Nov 2016')
  })
})
