import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Hero from './Hero'

describe('Hero', () => {
  test('renders Hero component with a title', () => {
    const { getByText } = render(
      <Hero title="My super title" subtitle="Hello subtitle" />,
    )

    expect(getByText('My super title')).toBeInTheDocument()
    expect(getByText('Hello subtitle')).toBeInTheDocument()
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<Hero title="My super title" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
