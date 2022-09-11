import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../redux/featcherFile/Cardslicer';
const CartItem = ({name,id,quantity,img}) => {
    const dispatch = useDispatch();
    const addToCarts = () => {
        dispatch(cartAction.addToCart({
            name,
            id,
        
        }))}

        const removeFromCart= () => {
            dispatch(cartAction.removeFromCart(id));
          };
  return (
<>

<div className="col">
  <div className=" card-item">
    <img src={img} alt="" className='cartImg' />
    <h5 className="card-title ">{name}</h5>
    <h5 className="card-id ">{id}</h5>
    <p className='quantity'>{quantity}</p>
    <button className='btn cardBtn' onClick={addToCarts}>Add</button>
    <button className='btn cardBtn' onClick={removeFromCart}>remove</button>
</div>
</div>
</>

  )
  }


export default CartItem