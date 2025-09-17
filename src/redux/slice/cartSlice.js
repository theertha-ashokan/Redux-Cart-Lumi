import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState :[],
    reducers : {
        // add to cart - when add to cart btn clicked from view & wishlist
        addToCart :(state,action)=>{
            // find product is in the stste
            const existingProduct = state?.find(item => item.id==action.payload.id)
            if(existingProduct){
                // incement quantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                // get remaining products other than existing
                const remainProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainProducts,existingProduct]

            }else{
                // add item to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // remove cart item - whwn clicked in 
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        // increment quatity - when +btn clicked in cart
        incrementQuantity:(state,action)=>{
            // find product is in state
            const existingProduct = state?.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingproduct = state?.filter(item=>item.id!=action.payload)
            state = [...remainingproduct,existingProduct]
        },

        // decrement quantity
         decrementQuantity:(state,action)=>{
            // find product is in state
            const existingProduct = state?.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingproduct = state?.filter(item=>item.id!=action.payload)
            state = [...remainingproduct,existingProduct]
        },

        // empty cart
        emptyCart:(state)=>{
            return state = []
        }
    }
})
export const {addToCart,removeCartItem,incrementQuantity,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer