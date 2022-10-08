import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className="header__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt=''/>
        <div className="header__search">
            <input className='header__searchInput' type="text"/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optioinLineOne'>
                    Hello Guest
                </span>
                <span className='header__optioinLineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optioinLineOne'>
                    Returns
                </span>
                <span className='header__optioinLineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optioinLineOne'>
                    Your
                </span>
                <span className='header__optioinLineTwo'>
                    Prime
                </span>
            </div>

            <div className='header__optionbasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>
                    0
                </span>
            </div>

        </div>
    </div>
  )
}

export default Header