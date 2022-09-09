import React from 'react'
import { Link } from "react-router-dom"
import './ProductCard.scss'
export default function ProductCard({ id, name, price, inStock, imageUrl }) {
  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <img src={imageUrl} alt="Product" />
      </Link>
      <div className="product-card-info">
        <p>{name}</p>
        <p className="product-card-price">{price}</p>
        <p className="not-in-stock">{!inStock ? "Not in Stock" : null}</p>
      </div>
    </div>
  )
}