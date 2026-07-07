import { Document, Page, Text, View } from '@react-pdf/renderer'
import type { ReactNode } from 'react'
import type { CvContent } from './buildCvContent'
import { cvStyles as styles } from './cvStyles'

interface CvDocumentProps {
  content: CvContent
}

function BulletList({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

function TimelineSection({ title, entries }: { title: string; entries: CvContent['experience'] }) {
  if (entries.length === 0) return null

  return (
    <Section title={title}>
      {entries.map((entry) => (
        <View key={`${entry.date}-${entry.message}`} style={styles.timelineEntry}>
          <Text style={styles.timelineDate}>{entry.date}</Text>
          <Text style={styles.timelineMessage}>{entry.message}</Text>
        </View>
      ))}
    </Section>
  )
}

function buildContactLine(content: CvContent): string {
  const parts = [content.header.email]
  if (content.header.linkedinUrl) parts.push(content.header.linkedinUrl)
  if (content.header.githubUrl) parts.push(content.header.githubUrl)
  if (content.header.websiteUrl) parts.push(content.header.websiteUrl)
  return parts.join('  ·  ')
}

const CvDocument = ({ content }: CvDocumentProps) => (
  <Document title={`${content.header.name} - CV`} author={content.header.name}>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{content.header.name}</Text>
        <Text style={styles.roleLine}>
          {content.header.role} · {content.header.location}
        </Text>
        <Text style={styles.contactLine}>{buildContactLine(content)}</Text>
      </View>

      <Section title="Summary">
        <Text style={styles.paragraph}>{content.summary}</Text>
      </Section>

      <Section title="Technical Skills">
        {content.skillGroups.map((group) => (
          <View key={group.category} style={styles.skillGroup}>
            <Text>
              <Text style={styles.skillCategory}>{group.category}: </Text>
              {group.skills.join(', ')}
            </Text>
          </View>
        ))}
      </Section>

      <TimelineSection title="Professional Experience" entries={content.experience} />
      <Section title="Selected Projects">
        {content.projects.map((project) => (
          <View key={project.name} style={styles.projectBlock}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDuration}>{project.duration}</Text>
            </View>
            <Text style={styles.projectSummary}>{project.summary}</Text>
            <BulletList items={project.responsibilities} />
            <Text style={styles.techStack}>Stack: {project.techStack}</Text>
          </View>
        ))}
      </Section>

      <Section title="Core Competencies">
        {content.competencies.map((competency) => (
          <View key={competency.label} style={styles.competencyItem}>
            <Text>
              <Text style={styles.competencyLabel}>{competency.label}</Text>
              {' — '}
              {competency.description}
            </Text>
          </View>
        ))}
      </Section>

      <TimelineSection title="Certifications" entries={content.certifications} />
      <TimelineSection title="Education" entries={content.education} />

      <Section title="Interests">
        {content.interests.map((interest) => (
          <View key={interest.label} style={styles.interestItem}>
            <Text>
              <Text style={styles.interestLabel}>{interest.label}: </Text>
              {interest.description}
            </Text>
          </View>
        ))}
      </Section>
    </Page>
  </Document>
)

export default CvDocument
