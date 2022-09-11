import React from 'react'
import Menu from '../../component/common/menu/Menu'
import Searchbar from '../../component/common/searchbar/Searchbar'
import { useSelector } from 'react-redux'
import Profile from '../profile/index'

import CartItemList from '../../component/cart/cartItemList/CartItemList'

// import Alcohole from '../../component/common/alcohol/Alcohole'


const Home = () => {
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div>
      {/* profile file */}
      <Profile />
     <Searchbar />
        <Menu />
     {showCart && <CartItemList />}
   
      
     
 
    </div>

  )
}

export default Home