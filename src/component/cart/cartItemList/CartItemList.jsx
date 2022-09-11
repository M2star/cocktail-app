import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

import CartItem from './CartItem'

const CartItemList = () => {
  const cartItemList = useSelector(state => state.cart.itemsList)
  
    return (
      <div >
    <h2 className='cardHead'>YOUR CART</h2>
    <ul className='cartItems' >

        {cartItemList.map((item) => (
          
          <li className="cart-list" key={item.id}>
           
                <CartItem
                quantity={item.quantity}
                id ={item.id}
                info={item.info}
                name ={item.name}
                img ={item.img}
                 />
                

            </li>
        ))}
    </ul>
  </div>
  )
}

export default CartItemList