import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        itemsList:[],
        totalQuantity: 0,
        showCart: false,
        changed: false

    },
    reducers :{
        addToCart(state,action) {
        const newItem = action.payload;
        const existingItem = state.itemsList.find ((item) => item.id === newItem.id);    
             
        if(existingItem){
            existingItem.quantity++; 
        }else{
            state.itemsList.push({
                id :newItem.id,
                quantity :1,
                name: newItem.name,
                img:newItem.img
            })
           
            state.totalQuantity++;
        }
        },
        removeFromCart(state,action){
            state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
      }
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }

    }
})

export const cartAction = cartSlice.actions;

export default cartSlice