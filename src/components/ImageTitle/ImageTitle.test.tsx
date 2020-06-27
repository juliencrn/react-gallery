import React from 'react'
import { render } from '@testing-library/react'

import ImageTitle from '../ImageTitle'
import { axe } from 'jest-axe'

describe('ImageTitle', () => {
  const title = 'My super title'

  test('when is visible', () => {
    const { getByText } = render(<ImageTitle title={title} />)
    expect(getByText(title)).toBeInTheDocument()
  })

  test('when is loading', () => {
    const { queryByText, queryByTestId } = render(
      <ImageTitle title={title} isLoading />,
    )

    expect(queryByText(title)).not.toBeInTheDocument()
    expect(queryByTestId('image-title-skeleton')).toBeInTheDocument()
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<ImageTitle title={title} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
