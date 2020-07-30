import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ProgressiveImage from '../ProgressiveImage'
import { ProgressiveImageProps } from './ProgressiveImage'

describe('ProgressiveImage', () => {
  const image: ProgressiveImageProps = {
    url: 'https://via.placeholder.com/1500',
    thumbUrl: 'https://via.placeholder.com/150',
    alt: 'text alt',
    isVisible: true,
  }

  // test('when is loading', () => {
  //   const { queryByTestId } = render(<ProgressiveImage {...image} isLoading />)

  //   expect(queryByTestId('image')).not.toBeInTheDocument()
  //   expect(queryByTestId('thumb-image')).not.toBeInTheDocument()
  //   expect(queryByTestId('image-skeleton')).toBeInTheDocument()
  // })

  test('when is visible', async () => {
    const { queryByTestId } = render(<ProgressiveImage {...image} />)

    expect(queryByTestId('regular-image')).toHaveProperty('src', image.url)
    expect(queryByTestId('thumb-image')).toHaveProperty('src', image.thumbUrl)
    expect(queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<ProgressiveImage {...image} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
