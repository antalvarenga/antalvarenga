import type { Interest } from '../models/types'

export const interests: Interest[] = [
  {
    id: '1',
    label: 'Sports',
    category: 'show',
    description: 'Padel, Sumo, Football, Basketball, Skiing, Chess.',
    icon: '⚽️'
  },
  {
    id: '2',
    label: 'Shows',
    category: 'other',
    description: 'The Office, Breaking Bad & Better Call Saul, Game of Thrones',
    icon: '📺'
  },
  {
    id: '5',
    label: 'Movies',
    category: 'other',
    description: 'The Wolf of Wall Street, The Matrix, Interstellar, The Truman Show.',
    icon: '🎥'
  },
  {
    id: '3',
    label: 'Books',
    category: 'hobby',
    description: 'The Bible, Harry Potter, politics, religion, manga.',
    icon: '📚'
  },
  {
    id: '4',
    label: 'Gaming',
    category: 'hobby',
    description: 'Mostly retro nintendo games.',
    icon: '🎮'
  }
]
