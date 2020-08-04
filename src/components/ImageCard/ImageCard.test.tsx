import React from 'react'
import { render } from '@testing-library/react'

import ImageCard from '../ImageCard'
// import { Image } from '../../interfaces'
import { axe } from 'jest-axe'

const randomImage = {
  // id: '62QRdDoe44M',
  // title: 'Seville Sunset',
  // user: {
  //   id: 'rBvON6YD9Bk',
  //   name: 'Henrique Ferreira',
  //   link: 'http://rickferreira.ch/',
  // },
  // imageUrls: {
  //   full:
  //     'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
  //   regular:
  //     'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
  //   thumb:
  //     'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
  // },
  // alt_description: 'brown concrete building during daytime photo',
  // link: 'https://unsplash.com/photos/62QRdDoe44M',
}

// describe('ImageCard', () => {
//   test('has no accessibility violations', async () => {
//     const { container } = render(<ImageCard {...randomImage} />)
//     const results = await axe(container)

//     expect(results).toHaveNoViolations()
//   })
// })

/*
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
*/
