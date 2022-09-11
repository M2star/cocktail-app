import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cartAction } from '../../../../redux/featcherFile/Cardslicer'

import './menuitem.css'
const MenuItem = (item) => {
    const { id, name, img, info, glass, categories } = item
    const navigator = useNavigate()

    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartAction.addToCart({
            name,
            id,
            info,
            img,
        }))
    }

    return (
        <div className="item-container">


            <div className="item ">
                <div>
                    <img src={img} alt="" className='item-img' />

                </div>
                <div className='item-details'>
                    <span>Name:{name}</span>
                    <span>Catrgory:{categories}</span>
                    <span>info:{info}</span>
                    <span>glass:{glass}</span>
                </div>
                <div className='Item-Button'>
                    <button className='btn btn-primary' onClick={() => navigator(`product/${id}`)} >Details</button>
                    <button className='btn btn-primary' onClick={addToCart}>Add</button>
                </div>
            </div>

        </div>
    )
}

export default MenuItem