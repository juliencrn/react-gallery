import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Hero from './Hero'

describe('Hero', () => {
  const title = 'My super title'

  test('renders Hero component with a title', () => {
    const { getByText } = render(<Hero title={title} />)

    expect(getByText(title)).toBeInTheDocument()
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<Hero title={title} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
