import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  const { findByText, getByText } = render(
    <Router history={history}>
      <App />
    </Router>,
  )

  expect(await findByText('Welcome to Home')).toBeVisible()

  fireEvent.click(getByText(/Gallery/i))
  expect(await findByText('Spain images gallery')).toBeVisible()

  fireEvent.click(getByText(/Home/i))
  expect(await findByText('Welcome to Home')).toBeInTheDocument()
})
