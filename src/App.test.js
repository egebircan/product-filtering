import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

it('should render form', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText("Only in stock")).toBeInTheDocument()
  expect(getByText("Search by name")).toBeInTheDocument()
  expect(getByText("Sort by price")).toBeInTheDocument()
});
