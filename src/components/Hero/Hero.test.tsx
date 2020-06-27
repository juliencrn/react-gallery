import React from 'react'
import { render } from '@testing-library/react'

import Hero from './Hero'

describe('Hero', () => {
  test('renders Hero component with a title', () => {
    const { getByText } = render(<Hero title="My super title" />)

    expect(getByText('My super title')).toBeInTheDocument()
  })
})
