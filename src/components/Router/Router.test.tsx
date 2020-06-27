import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { default as AppRouter } from './Router'

describe('Router', () => {
  test('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    const { findByText, getByText } = render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    )

    expect(await findByText('Welcome to Home')).toBeVisible()

    fireEvent.click(getByText(/Gallery/i))
    expect(await findByText('Spain images gallery')).toBeVisible()

    fireEvent.click(getByText(/Home/i))
    expect(await findByText('Welcome to Home')).toBeInTheDocument()
  })
})
