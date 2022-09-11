import React from 'react'
import './style.css'
import notFoundImg from './pngwing.com.png'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate= useNavigate()
 
    return (
    <div className='pageNotFound'>
        <img src={notFoundImg} alt="empty" />
        <button onClick={()=>navigate('/')} >
            Back Home Page
            <i className='fas fa-long-arrow-alt-left' ></i>
            </button>
    </div>
  )
}

export default PageNotFound