import React from 'react'
import { ProductItem } from '../molecules'

export default function ProductsList({products}) {
  console.log(products)
  return (
    
    <ul className="products-ul">
      {products.map( product  => (
            <ProductItem product={product} />
          ))}
    </ul>
  )
}
