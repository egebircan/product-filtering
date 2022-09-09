import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { selectProducts } from './productsSlice'
import './ProductDetail.scss'

export default function ProductDetail() {
  const products = useSelector(selectProducts)
  let { id } = useParams()

  const [{ name, priceText, inStock, image }] = useState(products.find(p => p.productId === id))

  return (
    <div className="product-detail-container">
      <img className="product-detail-image" src={image} alt="Product" />
      <h1 className="product-detail-title">{name}</h1>
      <h2 className="product-detail-price">{priceText}</h2>
      <h4 className="product-detail-not-in-stock">{!inStock ? "Not in stock" : null}</h4>
      <p className="back-to-main-page">
        <Link to={`/`}>
          Go back
        </Link>
      </p>
    </div>
  )
}