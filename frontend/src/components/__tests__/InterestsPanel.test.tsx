import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import InterestsPanel from '../InterestsPanel'
import { interests } from '../../config/interests'

describe('InterestsPanel Component', () => {
  it('renders all interest items', () => {
    render(<InterestsPanel />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(interests.length)

    interests.forEach((interest, index) => {
      const item = listItems[index]
      expect(within(item).getByText(interest.label)).toBeInTheDocument()
      expect(within(item).getByText(interest.category)).toBeInTheDocument()
      if (interest.description) {
        expect(within(item).getByText(interest.description)).toBeInTheDocument()
      }
    })
  })

  it('renders correctly with accessibility attributes', () => {
    render(<InterestsPanel />)
    expect(screen.getByRole('list', { name: /personal interests/i })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(interests.length)
  })
})
