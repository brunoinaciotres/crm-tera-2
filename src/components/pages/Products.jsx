import React from 'react'
import { Default } from '../template'
import { ProductsList } from '../organisms'
export default function Products() {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:8080/product/getAll')
    .then (response => response.json())
    .then (data => setProducts(data.products))
  }, [])
  

  return (
    <Default >
       <header className="main-header">
            <div className="title-div">
              <h1 className="main-title">Produtos</h1>
              <i className="fa-solid fa-circle-arrow-right header-icon"></i>
            </div>
        </header> 
        <ProductsList products={products} />  
    </Default>
    
  )
}
