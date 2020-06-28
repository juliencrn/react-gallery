import React from 'react'
import { render } from '@testing-library/react'

import ImageCard from '../ImageCard'
import { Image } from '../../interfaces'
import { axe } from 'jest-axe'

const randomImage: Image = {
  id: '62QRdDoe44M',
  title: 'Seville Sunset',
  user: {
    id: 'rBvON6YD9Bk',
    name: 'Henrique Ferreira',
    link: 'http://rickferreira.ch/',
  },
  imageUrls: {
    full:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
    thumb:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
  },
  alt_description: 'brown concrete building during daytime photo',
  link: 'https://unsplash.com/photos/62QRdDoe44M',
}

describe('ImageCard', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<ImageCard {...randomImage} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
