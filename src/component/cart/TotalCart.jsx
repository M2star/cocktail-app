import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


import {cartAction} from '../../redux/featcherFile/Cardslicer'


const Cart = () => {

 const  quantity = useSelector ((state) => state.cart.totalQuantity)
 const dispatch = useDispatch()
 
 const showCart = ()=>{
  dispatch(cartAction.setShowCart())
 }
  return (
   <div className="cart" style={{cursor:'pointer'}}>
    <h2 onClick={showCart} className='shadow p-3 mb-7 bg-body rounded fa-2' >Cart: { quantity} Item</h2>
   </div>
  )
}

export default Cart