import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import ImageAuthor from '../ImageAuthor'
import { User } from '../../interfaces'

describe('ImageAuthor', () => {
  const user: Omit<User, 'id'> = {
    name: 'John Doe',
    link: 'https://www.wikiwand.com/fr/John_Doe',
  }
  const nameRegex = new RegExp(user.name, 'gi')

  test('when is loading', () => {
    const { queryByText, queryByTestId } = render(
      <ImageAuthor {...user} isLoading />,
    )

    expect(queryByText(nameRegex)).not.toBeInTheDocument()
    expect(queryByTestId('image-author-skeleton')).toBeInTheDocument()
  })

  test('when is visible', () => {
    const { getByText } = render(<ImageAuthor {...user} />)
    expect(getByText(nameRegex)).toBeInTheDocument()
  })

  test('when is visible name missing', () => {
    const { getByText } = render(<ImageAuthor link={user.link} />)

    expect(getByText(/anonym/i).closest('a')).toHaveAttribute('href', user.link)
  })

  test('when is visible link missing', () => {
    const { getByText } = render(<ImageAuthor name={user.name} />)
    expect(getByText(nameRegex)).toBeInTheDocument()
    expect(getByText(nameRegex).closest('a')).toHaveAttribute('href', '')
  })

  test('has no accessibility violations', async () => {
    const { container } = render(<ImageAuthor {...user} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
