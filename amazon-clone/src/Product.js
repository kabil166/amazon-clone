import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The lean start Up</p>
            <p className='product__price'>
                <small> $</small>
                <strong>100</strong>
            </p>  

            <div className='product__rating'>
            <p> ⭐</p>
            <p> ⭐</p>
            <p> ⭐</p>

            </div>
            </div> 
            <img className='product__image' src='https://m.media-amazon.com/images/I/41gXMAK8MSL._SX300_SY300_QL70_FMwebp_.jpg' alt=''/>

            <button type="submit">Add to basket</button>
           
    </div>
  )
}

export default Product