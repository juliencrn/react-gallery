import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ProgressiveImage from '../ProgressiveImage'

describe('ProgressiveImage', () => {
  const url = 'https://via.placeholder.com/500'
  test('when is loading', () => {
    const { queryByTestId } = render(<ProgressiveImage url={url} isLoading />)

    expect(queryByTestId('image')).not.toBeInTheDocument()
    expect(queryByTestId('image-skeleton')).toBeInTheDocument()
  })

  test('when is visible', () => {
    const { queryByTestId } = render(<ProgressiveImage url={url} />)

    expect(queryByTestId('image')).toBeInTheDocument()
    expect(queryByTestId('image').closest('img')).toHaveProperty('src', url)
    expect(queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<ProgressiveImage url={url} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
