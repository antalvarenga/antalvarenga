import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Header from '../Header'
import { profile } from '../../config/profile'

vi.mock('../../cv/generateCvPdf', () => ({
  downloadCvPdf: vi.fn().mockResolvedValue(undefined),
}))

import { downloadCvPdf } from '../../cv/generateCvPdf'

describe('Header Component', () => {
  beforeEach(() => {
    vi.mocked(downloadCvPdf).mockClear()
  })

  it('renders developer name and role', () => {
    render(<Header />)
    expect(screen.getByText(profile.name)).toBeInTheDocument()
    expect(screen.getByText(profile.primaryRole)).toBeInTheDocument()
  })

  it('renders system status', () => {
    render(<Header />)
    expect(screen.getByText(/SYSTEM STATUS:/i)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(profile.status, 'i'))).toBeInTheDocument()
  })

  it('renders export button and triggers PDF download', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const exportButton = screen.getByRole('button', { name: /download cv as pdf/i })
    expect(exportButton).toBeInTheDocument()

    await user.click(exportButton)

    expect(downloadCvPdf).toHaveBeenCalledTimes(1)
  })
})
