import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchProductsThenUpdateState,
  selectProducts,
  filterProducts
} from './productsSlice'
import './Products.scss'
import ProductCard from './ProductCard'

export default function Counter() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  const [productsBackup, setProductsBackup] = useState([])
  const [filterConditions, setFilterConditions] = useState({
    filterInStock: false,
    searchKeyword: "",
    sortByPriceType: null
  })

  useEffect(() => {
    dispatch(fetchProductsThenUpdateState())
  }, [dispatch])

  useEffect(() => {
    if (productsBackup.length === 0 && products.length !== 0) setProductsBackup(products)
  }, [productsBackup, products])

  const renderProducts = () => {
    return products.map(
      p => (
        <ProductCard
          id={p.productId}
          name={p.name}
          price={p.priceText}
          inStock={p.inStock}
          imageUrl={p.imageS}
        />
      )
    )
  }

  const handleFormChange = (e) => {
    const { name, value, checked } = e.target

    let updatedFilterConditions = filterConditions

    if (name === "inStock")
      updatedFilterConditions.filterInStock = checked

    if (name === "searchField")
      updatedFilterConditions.searchKeyword = value

    if (name === "sortByPriceType")
      updatedFilterConditions.sortByPriceType = value

    setFilterConditions(updatedFilterConditions)

    dispatch(filterProducts({
      allProducts: productsBackup,
      filterConditions: updatedFilterConditions
    }))
  }

  return (
    <div className="products-page">
      <form className="filter-form" onChange={handleFormChange}>
        <div className="stock-filter">
          <label htmlFor="inStock" class="form-label">Only in stock:</label>
          <input type="checkbox" name="inStock" id="inStock" />
        </div>

        <div className="name-filter">
          <label htmlFor="searchField" class="form-label">Search by name:</label>
          <input type="text" name="searchField" id="searchField" />
        </div>

        <div className="price-sort">
          <label htmlFor="sortByPriceType" class="form-label">Sort by price:</label>
          <select name="sortByPriceType" id="sortByPriceType">
            <option value="">random</option>
            <option value="increasing">increasing</option>
            <option value="decreasing">decreasing</option>
          </select>
        </div>
      </form>
      <div className="products-container">
        {renderProducts()}
      </div>
    </div>
  )
}