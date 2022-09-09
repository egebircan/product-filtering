import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Products from './products/Products'
import ProductDetail from './products/ProductDetail'
import './App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  )
}

export default App