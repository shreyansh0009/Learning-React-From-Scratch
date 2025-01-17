import React from 'react'

function ProductInfo() {

    const product = {
        name: "Laptop",
        price: 599,
        Availability: "In Stock"
    }
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.Availability}</p>

    </div>
  )
}

export default ProductInfo
