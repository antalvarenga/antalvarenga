import { buildCvContent } from './buildCvContent'

const CV_FILENAME = 'Antonio-Alvarenga-CV.pdf'

export async function downloadCvPdf(): Promise<void> {
  const [{ pdf }, { default: CvDocument }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./CvDocument'),
  ])

  const content = buildCvContent()
  const blob = await pdf(<CvDocument content={content} />).toBlob()

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = CV_FILENAME
  link.click()
  URL.revokeObjectURL(url)
}
