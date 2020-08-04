import React from 'react'
import { render } from '@testing-library/react'

import ImageCard from '../ImageCard'
import { PexelsImage } from '../../interfaces'
import { axe } from 'jest-axe'

const randomImage: PexelsImage = {
  id: 3722818,
  width: 3200,
  height: 4800,
  url:
    'https://www.pexels.com/photo/white-concrete-buildings-under-white-clouds-3722818/',
  photographer: 'Alex Azabache',
  photographer_url: 'https://www.pexels.com/@alexazabache',
  photographer_id: 1664241,
  src: {
    original:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg',
    large2x:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    large:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    medium:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&h=350',
    small:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&h=130',
    portrait:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    landscape:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tiny:
      'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  liked: false,
}

describe('ImageCard', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<ImageCard data={randomImage} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('has all fields', () => {
    const { getByText } = render(<ImageCard data={randomImage} />)

    expect(getByText('Alex Azabache')).toBeInTheDocument()
  })

  test('when is loading', () => {
    const { queryByText, queryByTestId } = render(<ImageCard />)

    expect(queryByText('Alex Azabache')).not.toBeInTheDocument()
    expect(queryByTestId('image-skeleton')).toBeInTheDocument()
    expect(queryByTestId('image-title-skeleton')).toBeInTheDocument()
  })
})
