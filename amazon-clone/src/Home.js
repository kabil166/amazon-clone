import React from 'react'
import './Home.css'
import Product from './Product'
  
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image' 
            src="https://libertyhousenh.org/wp-content/uploads/2020/10/Amazon-smile-web-banner.jpg" 
            alt=''
            />
        
        <div className='home__row'>
            <Product/>
            <Product/>
        </div>
        <div className='home__row'>
        <Product/>
        <Product/>
        <Product/>
        </div>
        <div className='home__row'>
        <Product/>
        </div>

     </div>
    </div>
  )
}

export default Home