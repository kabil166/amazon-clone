import React from 'react'
import './Product.css'

function Product({title, rating, price, productImage}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small> $</small>
                <strong>{price}</strong>
            </p>  

            <div className='product__rating'>
              {Array(rating)
              .fill()
              .map((_,i) => (
                <p> ⭐</p>
              ))}

            </div>
            </div> 
            <img className='product__image' src={productImage} alt=''/>

            <button type="submit">Add to basket</button>
           
    </div>
  )
}

export default Product