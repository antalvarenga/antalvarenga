import { StyleSheet } from '@react-pdf/renderer'

export const cvStyles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 42,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.45,
    color: '#1a1a1a',
  },
  header: {
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  roleLine: {
    fontSize: 10.5,
    color: '#333333',
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 9.5,
    color: '#444444',
  },
  section: {
    marginTop: 12,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  paragraph: {
    marginBottom: 4,
    textAlign: 'justify',
  },
  skillGroup: {
    marginBottom: 4,
  },
  skillCategory: {
    fontFamily: 'Helvetica-Bold',
  },
  projectBlock: {
    marginBottom: 8,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  projectName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    flex: 1,
  },
  projectDuration: {
    fontSize: 9.5,
    color: '#555555',
    marginLeft: 8,
  },
  projectSummary: {
    marginBottom: 3,
    color: '#333333',
  },
  bulletList: {
    marginLeft: 8,
    marginBottom: 2,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
  },
  techStack: {
    fontSize: 9,
    color: '#555555',
    fontStyle: 'italic',
    marginTop: 1,
  },
  timelineEntry: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  timelineDate: {
    width: 62,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: '#555555',
  },
  timelineMessage: {
    flex: 1,
  },
  competencyItem: {
    marginBottom: 3,
  },
  competencyLabel: {
    fontFamily: 'Helvetica-Bold',
  },
  interestItem: {
    marginBottom: 2,
  },
  interestLabel: {
    fontFamily: 'Helvetica-Bold',
  },
})
