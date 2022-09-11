import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './featcherFile/Cardslicer'
import CocktailSlicer from './featcherFile/CocktailSlicer'



export default configureStore ({
    reducer:{
        app: CocktailSlicer,
        cart: cartSlice.reducer,
   
}})