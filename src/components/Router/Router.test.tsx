import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'

import store from '../../redux/store'
import { default as AppRouter } from './Router'

describe('Router', () => {
  test('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <AppRouter />
        </Router>
      </Provider>,
    )

    //   fireEvent.click(getByText(/Gallery/i))
    //   expect(await findByText('Images gallery')).toBeVisible()

    expect(getByTestId('location-display')).toHaveTextContent('/')
  })

  test('invalid path should redirect to 404', async () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    const { findByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <AppRouter />
        </Router>
      </Provider>,
    )

    expect(await findByText(/404/gi)).toBeInTheDocument()
  })
})
