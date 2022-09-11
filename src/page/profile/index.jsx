import React from 'react'
import './profile.css'
import profilImg from '../../source/five-colorful-gin-tonic-cocktails-wine-glasses-bar-counter-pup-restaurant-111478962.jpg'
import profileUser from '../../source/pngwing.com.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = () => {
    return (
        <div className='profile '>
            <div className='cover-profile'>
                <img src={profilImg} alt="" className='cover-img w-100 h-100'/>
            </div>
            <div className="user-profile">
                <img src={profileUser} alt="" className=' user-img'/>
                <div className="user-info">
                <span className='user-name ' style={{fontWeight:'bold'}} >Le Cafe</span>
                <span className='user-name' style={{fontSize:"small"}}>78 Sazz Street, India</span>
                </div>

            </div>
        </div>
    )
}

export default Profile