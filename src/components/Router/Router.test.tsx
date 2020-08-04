import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { default as AppRouter } from './Router'

describe('Router', () => {
  test('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    )

    //   fireEvent.click(getByText(/Gallery/i))
    //   expect(await findByText('Images gallery')).toBeVisible()

    expect(getByTestId('location-display')).toHaveTextContent('/')
  })

  test('invalid path should redirect to 404', async () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    const { findByText } = render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    )

    expect(await findByText(/404/gi)).toBeInTheDocument()
  })
})
