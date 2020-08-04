import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import SearchForm from '../SearchForm'

// const mockLogin = jest.fn(search => {
//   console.log({ search })
//   return Promise.resolve({ search })
// })

describe('SearchForm', () => {
  test('on SearchForm submit with search query', async () => {
    const onSearch = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <SearchForm onSearch={onSearch} />,
    )

    const input = getByTestId('search-input')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
      fireEvent.click(getByLabelText('search'))
    })

    expect(onSearch).toBeCalledWith('test')
  })

  test('when user clicks on clear button', async () => {
    const onSearch = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <SearchForm onSearch={onSearch} />,
    )

    const input = getByTestId('search-input')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
      fireEvent.click(getByLabelText('clear'))
    })

    expect(input.value).toBe('')
    expect(onSearch).not.toHaveBeenCalled()
  })

  test('when user submit an empty search value', async () => {
    const onSearch = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <SearchForm onSearch={onSearch} />,
    )

    const input = getByTestId('search-input')

    await act(async () => {
      fireEvent.change(input, { target: { value: '' } })
      fireEvent.click(getByLabelText('search'))
    })

    expect(onSearch).not.toHaveBeenCalled()
  })
})
