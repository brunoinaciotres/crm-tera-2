import React from 'react'

export default function ProductItem({product}) {
  return (
    <li className="products-li">
        <div className="product-title">
            {product.name}
        </div>
        <div className="product-data">
            <div className="product-top-div">
                <div className="data-label">Power: <span className="bold"> {product.power} </span> </div>
                <div className="data-label">0-60mph: <span className="bold"> {product.acceleration} </span> </div>
                <div className="data-label">Preço Base: <span className="bold"> {product.price} </span> </div>
            </div>
            <div className="product-bottom-div">
                <div className="data-label">Velocidade Máxima: <span className="bold">{product.speed}</span></div>
            </div>
        </div>
    </li>
  )
}
