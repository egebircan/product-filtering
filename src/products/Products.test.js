import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import App from '../App'

test('fetches and renders products', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  await delay(250)
  expect(getByText("Veuve Clicquot Ponsardin Brut Magnum (1,5L) / Price: 107")).toBeInTheDocument()
})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}