import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';

import { fetchSearchCocktails } from '../../../redux/featcherFile/CocktailSlicer';
import Cart from '../../cart/TotalCart';




import './search.css'


const Searchbar = () => {
 
    const searchTerm = useRef();
    const dispatch = useDispatch()

    const changeHandler = () =>{
        const searchText = searchTerm.current.value
        dispatch (fetchSearchCocktails({searchText}))
    }

  
const submitHandler =(e) =>{
    e.preventDefault()
  }

    return (
        <div>
    <form onSubmit={submitHandler}>

        <div className="container">
            <Cart className="cart" />
      
          <div className="searchItem">
             <input type="search" 
                    className='searchBar shadow p-3 mb-2 bg-body rounded'
                    ref={searchTerm}
                    onChange={changeHandler}
                    placeholder="Search here..."
                 /> 
            </div>

       
        </div>
    </form>
    </div>
  )
}

export default Searchbar