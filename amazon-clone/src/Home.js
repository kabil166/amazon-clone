import React from 'react'
import './Home.css'
import Product from './Product'
  
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image' 
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qid7QFWJL._SX3000_.jpg" 
            alt=''
            />
        
        <div className='home__row'>
            <Product
              title="product 1"
              price = {23.65}
              rating = {4}
              productImage={"https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Playstation3.jpg"}
            />
            <Product
            title="product 2"
            price = {100.00}
            rating = {4}
            productImage={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Laptop.png"}
            />
        </div>
        <div className='home__row'>
            <Product
            title="product 3"
            price = {132}
            rating = {5}
            productImage={"https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Apparel.jpg"}
            />
            <Product
            title="product 4"
            price = {223.65}
            rating = {3}
            productImage={"https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Mug.jpg"}
            />
            <Product
            title="product 5"
            price = {213.45}
            rating = {4}
            productImage={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_XBOX2.png"}
            />
        </div>
        <div className='home__row'>
            <Product
            title="product 6"
            price = {112.92}
            rating = {3}
            productImage={"https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Hat.jpg"}
            />
        </div>

     </div>
    </div>
  )
}

export default Home